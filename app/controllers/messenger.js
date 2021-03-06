import Ember from 'ember';
import config from 'rendervous-demo/config/environment';
const { APP: { API_HOST } } = config;

export default Ember.Controller.extend({
  actions: {
    capture() {
      fetch(`${API_HOST}/screenshots`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          html: this.get('model.html'),
          siteType: 'html',
          screenSize: this.get('model.screen')
        }),
      }).then(response => {
        var location = response.headers.get('location');
        this.set('model.result', API_HOST + location);
      });
    }
  }
});
