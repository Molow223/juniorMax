import DS from 'ember-data';
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  attrs: {
    speaker: {
      serialize: 'record',
      deserialise: 'record',
    },
  },
  normalize(model, hash) {
    hash = this._super(...arguments);
    return hash;
  },
});
