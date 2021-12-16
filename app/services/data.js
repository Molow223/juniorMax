import Service from '@ember/service';
import ENV from 'juniormax/config/environment';
import { A } from '@ember/array';

export default Service.extend({
  init() {
    this._super(...arguments);
    this.set('speakers', A());
  },

  getMeetingsData() {
    return fetch(`${ENV.backendURL}/meettings`).then((response) =>
      response.json()
    );
  },

  getBooksData() {
    return fetch(`${ENV.backendURL}/books`).then((response) => response.json());
  },

  async getSpeakersData() {
    let response = await fetch(`${ENV.backendURL}/speakers`);
    let speakers = await response.json();
    this.speakers.clear();
    this.speakers.pushObjects(speakers);
    return this.speakers;
  },

  getSpeakerData(id) {
    return this.get('speakers').find((speaker) => speaker.id === parseInt(id));
  },

  deleteSpeaker(speaker) {
    this.speakers.removeObject(speaker);
    return fetch(`${ENV.backendURL}/speakers/${speaker.id}`, {
      method: 'DELETE',
    });
  },
  createSpeaker(speaker) {
    return fetch(`${ENV.backendURL}/speakers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(speaker),
    });
  },
  updateSpeaker(speaker) {
    return fetch(`${ENV.backendURL}/speakers/${speaker.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(speaker),
    });
  },
});
