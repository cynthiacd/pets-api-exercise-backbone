import Backbone from 'backbone';
// import _ from 'underscore';
// import $ from 'jquery';

var PetView = Backbone.View.extend({
  tagName: 'li',
  // className:
  initialize: function(params){
    this.template = params.template;
    this.listenTo(this.model, "change", this.render);
    this.listenTo(this.model, "update", this.render);
  },

  render: function() {
    console.log("rendering the PetView");

    var compiledTemplate = this.template( { pet: this.model.toJSON() });
    console.log(compiledTemplate);

    this.$el.html(compiledTemplate);
    return this;
  }

});

export default PetView;
