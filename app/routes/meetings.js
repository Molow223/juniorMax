import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true,
    },
  },
  dataService: service('data'),

  model({ search }) {
    return this.store.findAll('meeting');
  },
  setupController(controller, model) {
    this._super(...arguments);
    /*if (this.modelPromise) {
      controller.set('isLoading', true);
    }*/
  },
  actions: {
    refreshMeetings() {
      //this.refresh();
    },
    /*loading(transition, originRoute) {
      return false;
    },*/
  },
});
