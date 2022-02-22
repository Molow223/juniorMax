import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  img: DS.attr('string'),

  books: DS.hasMany('book'),
});
