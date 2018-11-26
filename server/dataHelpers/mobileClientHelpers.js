function makeFunctions(knex){

  function getUserMarkers(userId){
    return knex('markers')
    .select('markers.id', 'markers.name AS marker_name', 'lat', 'lng', 'types.name AS type_name', 'color', 'date', 'address')
    .leftJoin('marker_types', 'markers.id', 'marker_types.markers_id')
    .leftJoin('types', 'types.id', 'marker_types.types_id')
    .where({'users_id': userId})
  }

  function createMarker(name,name2, lat, lng, users_id, date, address,secret,fetch,typeNames){
    return knex('markers')
    .insert({name: name2, lat: lat, lng: lng, users_id: users_id, date: date, address: address})
    .returning('*')
    .then((result) => {
      return JSON.stringify(result)
    })
    .then((result) => {

      var result = JSON.parse(result)
      var searchName = name
      let apiRequest = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=49.281318,-123.114574&rankby=distance&keyword=${searchName}&key=${secret.GOOGLE_API}`
      fetch(apiRequest, function(error,meta,body){
        if(error){
          console.log(error);
        }
        var object = JSON.parse(body);
        var type = object.results[0].types[0];
        var indexOfType = typeNames.types.indexOf(type)
        if(indexOfType >= 0){
          knex('marker_types')
          .insert({
            markers_id: result[0].id,
            types_id: indexOfType + 1
          })
          .then(()=>{})
        }
        else{
          knex('marker_types')
          .insert({
            markers_id: result[0].id,
            types_id: 47
          })
          .then(()=>{})
        }

      })
    })
  }


  function getClusterMarkers(numberMarkerArray){
    return knex('users')
    .join('markers','users.id','users_id')
    .join('marker_types','markers.id','markers_id')
    .join('types','types.id','types_id')
    .select('markers.name','users.email','markers.lat','markers.lng')
    .whereIn('markers.id',numberMarkerArray)
  }



  return{
    getUserMarkers,
    createMarker,
    getClusterMarkers
  }
}

module.exports = makeFunctions