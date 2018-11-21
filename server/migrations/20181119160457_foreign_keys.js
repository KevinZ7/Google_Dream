
exports.up = function(knex, Promise) {
   return knex.schema
  .table('markers',(marker) => {
    marker.integer('users_id');
    marker.foreign('users_id').references('users.id');
  })
  .table('marker_types',(markerType) => {
    markerType.integer('markers_id');
    markerType.integer('types_id');
    markerType.foreign('markers_id').references('markers.id');
    markerType.foreign('types_id').references('types.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
 .table('markers',(marker) => {
    marker.dropColumn('users_id');
  })
  .table('marker_types',(markerType) => {
    markerType.dropColumn('markers_id');
    markerType.dropColumn('types_id');
  })
};
