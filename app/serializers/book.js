import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalize(model, hash) {
    let hashCopy = Object.assign({}, hash);
    hashCopy.attributes = {};
    hashCopy.attributes.title = hashCopy.title;
    hashCopy.attributes.author = hashCopy.author;
    hashCopy.attributes.pages = hashCopy.pages;
    hashCopy.attributes.img = hashCopy.img;
    hashCopy.attributes.progress = hashCopy.progress;
    delete hashCopy.title;
    delete hashCopy.author;
    delete hashCopy.pages;
    delete hashCopy.img;
    delete hashCopy.progress;
    hash = {
      data: hashCopy,
    };
    return hash;
  },
  serialize(snapshot, options) {
    let json = this._super(...arguments);
    json.type = snapshot.modelName;
    return json;
  },
});
