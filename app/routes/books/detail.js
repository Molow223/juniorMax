import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  dataService: service('data'),

  model(params) {
    return this.dataService.getBookData(params.id);
  },
});
