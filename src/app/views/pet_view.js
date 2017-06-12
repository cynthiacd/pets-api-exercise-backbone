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
    // console.log("rendering the PetView");
    var compiledTemplate = this.template( { pet: this.model.toJSON() });
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    'click button.btn-delete': 'onDelete',
    'click': 'onClick'
  },

  onClick: function(event) {
    console.log("you clicked on a pet");
    this.trigger("onClickPet", this.model)
  },

  onDelete: function(event) {
    event.stopPropagation();
    console.log("clicked the delete button");
    this.model.destroy();
  }

});

export default PetView;
