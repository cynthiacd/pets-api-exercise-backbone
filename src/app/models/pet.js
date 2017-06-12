import Backbone from 'backbone';
// import _ from 'underscore';
// import $ from 'jquery';

var Pet = Backbone.Model.extend({
  defaults: {
    name: "string",
    breed: "string",
    age: "integer",
    about: "string",
    vaccinated: "true or false"
  },

  initialize: function(params){
    console.log("Pet Initialized: " + this.get("name"));
  }
});

export default Pet;
