import Component from '@ember/component';

export default Component.extend({
  actions: {
    submitForm(e) {
      e.preventdefault();

      this.onsubmit(this.speaker);
    },
  },
});
