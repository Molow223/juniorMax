import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
//import { Promise } from 'rsvp';
//import { later } from '@ember runloop';

export default Route.extend({
  dataService: service('data'),

  model() {
    return this.dataService.getAuthorsData();
    /*return new Promise((resolve) => {
      later(async () => {
        try {
          let authors = await this.dataService.getAuthorsData();
          resolve(authors);
        } catch (e) {
          reject('Connection failed');
        }
      }, 3000);
    });*/
  },
});
