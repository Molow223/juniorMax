import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),
  
  actions: {
    async saveSpeaker(speaker) {
      await this.dataService.createSpeaker(speaker);
      this.model.set('id', speaker.id);
      this.model.set('firstName', speaker.firstName);
      this.model.set('lastName', speaker.lastName);
      this.model.set('img', speaker.img);

      this.transitionToRoute('speakers.index');
    },
  },
});
