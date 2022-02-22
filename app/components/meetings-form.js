import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  dataService: service('data'),

  actions: {
    submitForm(e) {
      e.preventDefault();

      const self = this;
      this.onSubmit({
        id: self.get('idMeeting'),
        title: self.get('title'),
        author: self.get('author'),
        img: self.get('img'),
        progress: self.get('progress'),
        review: self.get('review'),
      });
    },
  },

  didReceiveAttrs() {
    this._super();
    const self = this;
    this.setProperties({
      idMeeting: self.get('meeting.id') ? self.get('meeting.id') : undefined,
      title: self.get('meeting.title'),
      author: self.get('meeting.author'),
      img: self.get('meeting.img'),
      progress: self.get('meeting.progress'),
      review: self.get('meeting.review'),
    });
  },
});
