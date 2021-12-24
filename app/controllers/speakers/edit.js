import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({
  dataService: service('data'),
  actions: {
    async saveSpeaker(speaker) {
      await this.dataService.updateSpeaker(speaker);

      this.transitionToRoute('speakers.index');
    },
  },
});
