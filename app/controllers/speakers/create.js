import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('speaker', EmberObject.create());
    this.speaker.set('firstName', '');
    this.speaker.set('lastName', '');
  },

  dataService: service('data'),
  actions: {
    async saveSpeaker(speaker) {
      await this.dataService.createSpeaker(speaker);

      this.transitionToRoute('speakers.index');
    },
  },
});
