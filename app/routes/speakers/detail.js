import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  dataService: service('data'),

  actions: {
    async deleteSpeaker(speaker) {
      try {
        await this.dataService.deleteSpeaker(speaker);
        this.transitionToPoute('speakers.index');
      } catch (e) {
        this.transitionToRoute('404', { error: 'Connection faild' });
      }
    },
  },

  model({ id }) {
    return this.dataService.getSpeakerData(id);
  },
});
