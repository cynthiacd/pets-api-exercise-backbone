// do you only need to import jquery and underscore here
import $ from 'jquery';
import _ from 'underscore';

import PetList from 'app/collections/pet_list';
import PetListView from 'app/views/pet_list_view';

var petList = new PetList();
// fetch can take a callback function look up
petList.fetch();
// console.log(petList);

$(document).ready(function() {

  var petListView = new PetListView({
    model: petList,
    templateCard: _.template( $('#pet-card-template').html() ),
    templateDetails: _.template( $('#pet-info-template').html() ), 
    el: 'main'
  });

  // if you call render now the ajax call hasn't completed so it wont render anything
  // remember js is asyc
  // petListView.render();
});
