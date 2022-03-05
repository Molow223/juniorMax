import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  img: DS.attr('string'),
  progress: DS.attr('string'),
  review: DS.attr('string'),
  //reservationDate: DS.attr('4.10.2019')


  //books: DS.hasMany('book'),
});
