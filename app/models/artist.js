import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  itunes_id: DS.attr('number'),
  albums: DS.hasMany('album')
});
