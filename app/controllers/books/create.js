import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';

export default Controller.extend({
  dataService: service('data'),

  /*init() {
    this._super(...arguments);
    this.set('book', EmberObject.create());
    this.book.set('title', '');
    this.book.set('author', '');
    this.book.set('pages', '');
  },*/

  actions: {
    async saveBook(book) {
      await this.dataService.createBook(book);
      this.model.set('id', book.id);
      this.model.set('title', book.title);
      this.model.set('author', book.author);
      this.model.set('pages', book.pages);
      this.model.set('img', book.img);
      this.model.set('progress', book.progress);


      this.transitionToRoute('books');
    },

   /* changeNameBook(nameBook) {
      this.set('nameBook', nameBook);
    },

    changeNameAuthor(nameAuthor) {
      this.set('nameAuthor', nameAuthor);
    },*/
  },
});
