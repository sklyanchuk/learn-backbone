/* jshint esversion: 6 */

import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

import UserModel from './user.model';

const AppView = Backbone.View.extend({
  el: $('#chatapp'),
  template: _.template($('#user-card-template').html()),
  model: new UserModel(),
  initialize() {
    this.render();
    this.listenTo(this.model, 'change', this.render);
  },
  render() {
    this.$el.html(this.template(this.model.toJSON()));
  }
});

new AppView();
