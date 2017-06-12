import Backbone from 'backbone';
// import _ from 'underscore';
// import $ from 'jquery';

import PetView from './pet_view';

var PetListView = Backbone.View.extend({

  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "update", this.render);
  },

  render: function() {

    console.log("rendering the petListView");

    var that = this;
    this.model.each( function(pet) {
      var petView = new PetView({
        model: pet,
        template: that.template,
        tagName: 'li'
      });

      // var view = petView.render();
      that.$('#pet-list').append( petView.render().$el );
    });
    return this;
  }

});

export default PetListView;
