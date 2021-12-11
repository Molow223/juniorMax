import Service from '@ember/service';
import ENV from 'juniormax/config/environment';

export default class DataService extends Service {
  getMeetingsData() {
    return fetch(`${ENV.backendURL}/meettings`).then((response) =>
      response.json()
    );
  }

  getBooksData() {
    return fetch(`${ENV.backendURL}/books`).then((response) => response.json());
  }

  getSpeakersData() {
    return fetch(`${ENV.backendURL}/speakers`).then((response) =>
      response.json()
    );
  }
  getSpeakerData(id) {
    return fetch(`${ENV.backendURL}/speakers/${id}`).then((response) =>
      response.json()
    );
  }
}
