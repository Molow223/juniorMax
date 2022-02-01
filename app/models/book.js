import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  pages: DS.attr('string'),
  img: DS.attr('string'),
  progress: DS.attr('string'),
});
