import Backbone from 'backbone';
// import _ from 'underscore';
// import $ from 'jquery';

import Pet from 'app/models/pet';

var PetList = Backbone.Collection.extend({
  model: Pet,
  url: 'https://petdibs.herokuapp.com/pets'
  // parse: function(data) { return data.pets; }
});

export default PetList;
