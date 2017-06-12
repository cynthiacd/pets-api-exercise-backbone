import Backbone from 'backbone';
// import _ from 'underscore';
// import $ from 'jquery';

var PetView = Backbone.View.extend({
  initialize: function(params){
    this.template = params.template;
  },

  render: function() {
    console.log("rendering the PetView");

    var compiledTemplate = this.template( this.model.toJSON() );
    this.$el.html(compiledTemplate);
    return this;
  }

});

export default PetView;
