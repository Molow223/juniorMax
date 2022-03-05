import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { PER_PAGE } from '../controllers/meetings';

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true,
    },
    page: {
      refreshModel: true,
    },
    author: {
      refreshModel: true,
    },
  },

  model({ search, page, author }) {
    const query = {
      _page: page,
      _limit: PER_PAGE,
    };

    if (search) {
      query.q = search;
    }
    /*if (author){
      query.author = author;
    }*/
    return this.store.query('meeting', query);
    /*return RSVP.hash({
      speakers: this.store.findAll('speaker'),
      meetings: this.store.query('meetings', query),
    });*/
  },
  setupController(controller, model) {
    this._super(...arguments);
    /*if (this.modelPromise) {
      controller.set('isLoading', true);
    }*/
  },
  actions: {
    refreshMeetings() {
      //this.refresh();
    },
    /*loading(transition, originRoute) {
      return false;
    },*/
  },
});
