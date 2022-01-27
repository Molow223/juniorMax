import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),
  actions: {
    async saveSpeaker(speaker) {
      //await this.dataService.updateSpeaker(speaker);
      let speakerModel = this.get('model');
      speakerModel.set('firstName', speaker.firstName);
      speakerModel.set('lastName', speaker.lastName);
      speakerModel.set('img', speaker.img);
      await speakerModel.save();



      this.transitionToRoute('speakers.index');
    },
  },

});
