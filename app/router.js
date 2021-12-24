import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  this.route('speakers', function () {
    this.route('create');
    this.route('detail', { path: '/:id' });
    this.route('edit', { path: '/:id/edit' });
  });

  this.route('books', function () {
    this.route('create');
    this.route('detail', { path: '/:id' });
  });

  this.route('meetings');

  this.route('404', { path: '*path' });
});

export default Router;
