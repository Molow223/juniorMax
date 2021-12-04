import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  this.route('meetings');
  this.route('speakers');
  this.route('books');
  this.route('author', { path: '/authors' }, function () {
    this.route('detail', {path: '/:id'});
  });
  this.route('404', { path: '*path' });
});

export default Router;
