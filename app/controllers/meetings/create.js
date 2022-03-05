import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),

  actions: {
    async saveMeeting(meeting) {
      let newMeeting = this.store.createRecord('meeting', meeting);
      newMeeting.serialize();
      await newMeeting.save();

      this.transitionToRoute('meetings.index');
    },
  },
});
