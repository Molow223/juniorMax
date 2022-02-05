import DS from 'ember-data';
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  normalize(model, hash) {
    hash = this._super(...arguments);
    return hash;

  },
  serializeBelongsTo(snapshot, json, relationship) {
    let key = relationship.key;
    let belongsTo = snapshot.belongsTo(key);

    key = this.keyForRelationship ? this.keyForRelationship(key, "belongsTo", serialize) : key;
    json[key] = isNone(belongsTo)  ? belongsTo : parseInt(belongsTo.record.get('id'));
  }
});
