import Service from '@ember/service';
import ENV from 'juniormax/config/environment';
import { A } from '@ember/array';

export default Service.extend({
  init() {
    this._super(...arguments);
    this.set('speakers', A());
    this.set('books', A());
  },

  getMeetingsData() {
    return fetch(`${ENV.backendURL}/meettings`).then((response) =>
      response.json()
    );
  },

  async getBooksData() {
    let response = await fetch(`${ENV.backendURL}/books`);
    let books = await response.json();
    this.books.clear();
    this.books.pushObjects(books);
    return this.books;
  },

  getBookData(id) {
    return this.books.find((book) => book.id === parseInt(id));
  },

  async createBook(book) {
    return await fetch(`${ENV.backendURL}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
  },
  deleteBook(book) {
    this.books.removeObject(book);
    return fetch(`${ENV.backendURL}/books/${book.id}`, {
      method: 'DELETE',
    });
  },

  async getSpeakersData() {
    let response = await fetch(`${ENV.backendURL}/speakers`);
    let speakers = await response.json();
    this.speakers.clear();
    this.speakers.pushObjects(speakers);
    return this.speakers;
  },

  getSpeakerData(id) {
    return this.speakers.find((speaker) => speaker.id === parseInt(id));
  },

  deleteSpeaker(speaker) {
    this.speakers.removeObject(speaker);
    return fetch(`${ENV.backendURL}/speakers/${speaker.id}`, {
      method: 'DELETE',
    });
  },
  async createSpeaker(speaker) {
    return await fetch(`${ENV.backendURL}/speakers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(speaker),
    });
  },
  async updateSpeaker(speaker) {
    this.speakers.removeObject(speaker);
    return await fetch(`${ENV.backendURL}/speakers/${speaker.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(speaker),
    });
  },
});
