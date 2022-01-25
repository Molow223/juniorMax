import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({
  dataService: service('data'),
  actions: {
    async saveSpeaker(speaker) {
      await this.dataService.updateSpeaker(speaker);
      this.set('firstName', speaker.firstName);
      this.set('lastName', speaker.lastName);
      this.set('img', speaker.img);

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
