import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  img: DS.attr('string'),
  progress: DS.attr('string'),
  review: DS.attr('string'),


  //books: DS.hasMany('book'),
});

