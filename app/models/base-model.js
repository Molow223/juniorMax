import EmberObject from '@ember/object';
import { computed } from '@ember/object';

export default EmberObject.extend({
    fullName: computed('firstName','lastName', function() {
        return `${this.get('lastName')} ${this.get('firstName')}`;
    })
});