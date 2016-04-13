import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {

    //generate some Dummy Data
    console.log('generate');
    var myList = [];
    var listItem = {
      title: 'ListItem',
      body: 'This is the body of this listItem'
    };
    var i=20;
    while ( i-- ) {
      myList.push(listItem);
    }

    myList = Ember.A(myList);
    return {myList: myList};
  }

});
