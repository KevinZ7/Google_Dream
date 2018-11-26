function makeFunctions(knex){

  function getTypes(){
    return knex
    .select('markers.name', 'types_id', 'types.name')
    .from('markers')
    .leftJoin('marker_types', 'markers.id', 'marker_types.markers_id')
    .leftJoin('types', 'types.id', 'marker_types.types_id')
  }

  function getEntitiesOfType(type){
    return knex.
    select('markers.*', 'types_id')
    .from('markers')
    .leftJoin('marker_types', 'markers.id', 'marker_types.markers_id')
    .leftJoin('types', 'types.id', 'marker_types.types_id')
    .where({'types.name': type})
  }

  function getMarkersOfEntity(entityName){
    return knex
    .select('*')
    .from('markers')
    .where('markers.name', entityName)
  }




  return{
    getTypes,
    getEntitiesOfType,
    getMarkersOfEntity
  }
}

module.exports = makeFunctions