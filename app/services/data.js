import Service from '@ember/service';

export default class DataService extends Service {
  getAuthorsData() {
    return fetch('http://localhost:3000/authors').then((response) =>
      response.json()
    );
  }
}
