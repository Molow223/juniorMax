import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({
  dataService: service('data'),
  actions: {
    async saveSpeaker(speaker) {
      await this.dataService.updateSpeaker(speaker);
      this.model.set('firstName', speaker.firstName);
      this.model.set('lastName', speaker.lastName);
      this.model.set('img', speaker.img);

      this.transitionToRoute('speakers.index');
    },
  },
  /*
  model({ id }) {
    return this.get("dataService").getSpeaker(id);
  }*/
  /*fullName: computed('speaker.{firstName, lastName}', function(){
    return `${this.get('model.lastName')} ${this.get('model.firstName')}`
  })*/
});
