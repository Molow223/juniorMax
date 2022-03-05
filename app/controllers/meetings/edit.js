import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),
  actions: {
    async saveMeeting(meeting) {
      //await this.dataService.updateSpeaker(speaker);
      let meetingModel = this.model;
      meetingModel.set('reservationDate', meeting.reservationDate);
      meetingModel.set('title', meeting.title);
      meetingModel.set('author', meeting.author);
      meetingModel.set('img', meeting.img);
      meetingModel.set('progress', meeting.progress);
      meetingModel.set('review', meeting.review);

      await meetingModel.save();

      this.transitionToRoute('meetings.index');
    },
  },
});
