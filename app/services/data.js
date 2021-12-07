import Service from '@ember/service';
import ENV from 'juniormax/config/environment';

export default class DataService extends Service {
  getAuthorsData() {
    return fetch(`${ENV.backendURL}/authors`).then((response) =>
      response.json());
  }

  getAuthorData(id) {
    return fetch(`${ENV.backendURL}/authors/${id}`).then((response) =>
      response.json());
  }

  getBooksData() {
    return fetch(`${ENV.backendURL}/books`).then((response) =>
      response.json());
  }

  getSpeakersData() {
    return fetch(`${ENV.backendURL}/speakers`).then((response) =>
      response.json());
    }
};
