import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';

export default Route.extend({
  dataService: service('data'),

  model({ id }) {
    /*return EmberObject.create({
            firstName: '',
            lastName: '',
            img: ''});*/
    return this.dataService.getBookData(id);
  },
});