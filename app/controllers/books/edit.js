import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    dataService: service('data'),
    actions: {
      async saveBook(book) {
        await this.dataService.updateBook(book);
        this.model.set('id', book.id);
        this.model.set('title', book.title);
        this.model.set('author', book.author);
        this.model.set('pages', book.pages);
        this.model.set('img', book.img);
        this.model.set('progress', book.progress);
  
  
        this.transitionToRoute('books');
      },
    },
})
