import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('book', EmberObject.create());
    this.book.set('title', '');
    this.book.set('author', '');
    this.book.set('pages', '');
  },

  dataService: service('data'),
  actions: {
    async saveBook(book) {
      await this.dataService.createBook(book);

      this.transitionToRoute('books');
    },

    changeNameBook(nameBook) {
      this.set('nameBook', nameBook);
    },

    changeNameAuthor(nameAuthor) {
      this.set('nameAuthor', nameAuthor);
    },
  },
});
