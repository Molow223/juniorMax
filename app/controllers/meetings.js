import Controller from '@ember/controller';
import { computed } from '@ember/object';

export const PER_PAGE = 5;

export default Controller.extend({
  queryParams: ['search', 'page', 'author'],
  search: '',
  page: 1,
  author: '',

  pages: computed('model.meta.total', function () {
    const total = Number(this.get('model.meta.total'));
    if (Number.isNaN(total) || total <= 0) {
      return [];
    }
    return new Array(Math.ceil(total / PER_PAGE))
      .fill()
      .map((value, index) => index + 1);
  }),
});
