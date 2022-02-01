import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  dataService: service('data'),

  actions: {
    submitForm(e) {
      e.preventDefault();

      const self = this;
      this.onSubmit({
        id: self.get('idSpeaker'),
        firstName: self.get('firstName'),
        lastName: self.get('lastName'),
        img: self.get('img'),
      });
    },
  },

  didReceiveAttrs() {
    this._super();
    /*this._super();
     this.__super(...arguments);*/

    /*
    this.set('id', this.get('speaker.id'));
    this.set('firstName', this.get('speaker.firstName'));
    this.set('lastName', this.get('speaker.lastName'));
    this.set('img', this.get('speaker.img'));
    */
    const self = this;
    this.setProperties({
      idSpeaker: self.get('speaker.id') ? self.get('speaker.id') : undefined,
      firstName: self.get('speaker.firstName'),
      lastName: self.get('speaker.lastName'),
      img: self.get('speaker.img'),
    });
  },
});
