import Route from '@ember/routing/route';
import { Promise } from 'rsvp';
import { later } from '@ember/runloop';

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true,
    },
  },

  model({ search }) {
    if (search) {
      return this.store.query('speaker', { q: search });
    }
    return this.store.findAll('speaker');
  },

  setupController(controller, model) {
    this._super(...arguments);
  },

  actions: {
    loading(transition, originRoute) {
      return false;
    },
  },
});
