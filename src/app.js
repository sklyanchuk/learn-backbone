/* jshint esversion: 6 */

// Libraries
import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

// Templates
import userCard from './components/user-card/user-card.html';
import messageList from './components/message-list/message-list.html';
import messageForm from './components/message-form/message-form.html';

// Models
import UserModel from './user.model';

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

const AppView = Backbone.View.extend({
  el: $('#chatapp'),
  template: _.template(userCard + messageList + messageForm),
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
