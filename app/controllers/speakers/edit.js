import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({
  dataService: service('data'),
  actions: {
    async saveSpeaker(speaker) {
      await this.get("dataService").createSpeaker(speaker);

      this.transitionToRoute('speakers.index');
    },
  },
  model({ id }) {
    return this.get("dataService").getSpeaker(id);
  }
});
