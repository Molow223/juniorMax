import DS from 'ember-data';
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  attrs: {
    books: {
      serialize: 'record',
      deserialise: 'id'
    }
  },
  normalize(model, hash) {
    hash = this._super(...arguments);
    return hash;
  },
});
 