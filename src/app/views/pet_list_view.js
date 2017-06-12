import Backbone from 'backbone';
// import _ from 'underscore';
// import $ from 'jquery';

import PetView from './pet_view';

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

      that.listenTo( petView, "onClick", that.onClickDisplayDetails)
    });
    return this;
  },

  onClickDisplayDetails: function(pet) {
    console.log("creating the pet-details");

    var petDetailsCompiled = this.templateDetails ( { pet: pet.toJSON() } );

    this.$('#pet').empty();
    this.$('#pet').html(petDetailsCompiled);
    // this.$('#pet').show();
  }

});

export default PetListView;
