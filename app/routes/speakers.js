import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { Promise } from 'rsvp';
import { later } from '@ember/runloop';

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true,
    },
  },
  dataService: service('data'),

  model({ search }) {
    let promise = new Promise((resolve, reject) => {
      later(async () => {
        try {
          let speakers = search
            ? await this.dataService.getSpeakersData(search)
            : await this.dataService.getSpeakersData();
          resolve(speakers);
        } catch (e) {
          reject('Connection failed');
        }
      }, 1000);
    })
      .then((speakers) => {
        this.set('controller.model', speakers);
      })
      .finally(() => {
        if (promise === this.modelPromise) {
          this.set('controller.isLoading', false);
        }
      });
    this.set('modelPromise', promise);
    return { isLoading: true };
  },

  setupController(controller, model) {
    this._super(...arguments);
    if (this.modelPromise) {
      controller.set('isLoading', true);
    }
  },

  actions: {
    refreshSpeakers() {
      this.refresh();
    },
    loading(transition, originRoute) {
      return false;
    },
  },
});
