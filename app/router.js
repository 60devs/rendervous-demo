import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('screenshot');
  this.route('html');
  this.route('messenger');
});

export default Router;
