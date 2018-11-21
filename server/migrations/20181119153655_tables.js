
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('users', function(user){
    user.increments('id').primary();
    user.string('type');
    user.string('name');
    user.string('email');
  })
  .createTable('markers', function(marker){
    marker.increments('id').primary();
    marker.date('date');
    marker.time('time');
    marker.string('name');
    marker.float('lat', 14, 10);
    marker.float('lng', 14, 10);
    marker.string('address');
  })
  .createTable('marker_types', function(markerType){
    markerType.increments('id').primary();
  })
  .createTable('types', function(type){
    type.increments('id').primary();
    type.string('name');
    type.string('icon');
    type.string('color');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTable('types')
  .dropTable('marker_types')
  .dropTable('markers')
  .dropTable('users')
};
