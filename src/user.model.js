/* jshint esversion: 6 */

import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults: {
    name: 'Artem Sklyanchuk',
    city: 'Moscow'
  },
  initialize() {
    setTimeout(() => {
      this.set('city', 'Zelenograd');
    }, 3000);
  }
});
