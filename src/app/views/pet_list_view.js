import Backbone from 'backbone';
// import _ from 'underscore';
// import $ from 'jquery';

import PetView from './pet_view';
import Pet from '../models/pet';

var PetListView = Backbone.View.extend({

  initialize: function(params) {
    this.templateCard = params.templateCard;
    this.templateDetails = params.templateDetails;
    this.listenTo(this.model, "update", this.render);
  },

  render: function() {

    console.log("rendering the petListView");

    this.$('#pet-list').empty();
    var that = this;
    this.model.each( function(pet) {
      var petView = new PetView({
        model: pet,
        template: that.templateCard,
        tagName: 'li'
      });

      // var view = petView.render();
      that.$('#pet-list').append( petView.render().$el );

      that.listenTo( petView, "onClickPet", that.onClickDisplayDetails );
    });
    return this;
  },

  onClickDisplayDetails: function(pet) {
    console.log("creating the pet-details");

    var petDetailsCompiled = this.templateDetails ( { pet: pet.toJSON() } );

    this.$('#pet').empty();
    this.$('#pet').html(petDetailsCompiled);
    window.scrollTo(0,0);
    // this.$('#pet').show();

    // if you want to do this you have to make a new view for the details box so you
    // can assign a model
    // this.$('.btn-delete').click( pet, this.onDelete );
  },

  events: {
    'click .btn-save': 'onSave'
  },

  onSave: function(event){
    console.log("someone clicked the save button");

    var vaccinated = this.$('#vaccinated').prop('checked');
    console.log(vaccinated);

    var petData = {
      "name": this.$('#name').val(),
      "breed": this.$('#breed').val(),
      "age": parseInt( this.$('#age').val() ),
      "vaccinated": vaccinated
    };

    console.log(petData);

    var pet = new Pet(petData);
    // console.log( pet.toJSON() );
    this.model.create( pet );
    this.clearForm();
  },

  clearForm: function() {
    this.$('#name').val('');
    this.$('#breed').val('');
    this.$('#age').val('');
    this.$('#vaccinated').prop('checked', false);
  }
});

export default PetListView;
