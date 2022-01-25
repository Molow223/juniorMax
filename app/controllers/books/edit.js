import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    dataService: service('data'),
    actions: {
      async saveBook(book) {
        await this.dataService.updateBook(book);
        this.set('id', book.id);
        this.set('title', book.title);
        this.set('author', book.author);
        this.set('pages', book.pages);
        this.set('img', book.img);
        this.set('progress', book.progress);
  
  
        this.transitionToRoute('books');
      },
    },
})
