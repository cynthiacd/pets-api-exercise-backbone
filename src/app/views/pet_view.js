import Backbone from 'backbone';
// import _ from 'underscore';
import $ from 'jquery';

var PetView = Backbone.View.extend({
  tagName: 'li',

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
    'change input': 'onCheckbox',
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
  },

  onCheckbox: function(event) {
    event.stopPropagation();
    // console.log("click on the checkbox");

    var vaccinated = this.$('.vaccinated-checkbox').prop('checked');
    console.log("vacc status: " + vaccinated);
    this.model.set("vaccinated", vaccinated);

    this.model.save();
  }
});

export default PetView;
