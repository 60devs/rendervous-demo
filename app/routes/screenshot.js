import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      url: 'https://google.com',
      screen: {
        width: 600,
        height: 450,
      },
    };
  }
});
