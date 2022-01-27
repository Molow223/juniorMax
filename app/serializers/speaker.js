import DS from 'ember-data';

export default DS.JSONSerializer.extend({
    normalize(model, hash) {
        let hashCopy = Object.assign({}, hash);
        hashCopy.attributes = {};
        hashCopy.attributes.firstName = hashCopy.firstName;
        hashCopy.attributes.lastName = hashCopy.lastName;
        hashCopy.attributes.img = hashCopy.img;
        delete hashCopy.firstName;
        delete hashCopy.lastName;
        delete hashCopy.img;
        hash = {
            data: hashCopy
        };
        return hash;
    },
    serialize(snapshot, options) {
        let json = this._super(...arguments);
        return json;
    }
});
