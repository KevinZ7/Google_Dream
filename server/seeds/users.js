const users = require('../dataSamples/userData.js')
const googleTypes = require('../dataSamples/typeData.js')
const markerData = require('../dataSamples/markerData.js')

exports.seed = function(knex) {

  const createUsers = knex('users')
    .returning('*')
    .insert(users.users);


  const createTypes = createUsers
  .then(() => {
    return knex('types')
    .returning('*')
    .insert(googleTypes.googleTypes)
  });

  const createBubbleTea = createTypes
  .then(() => {
    return knex('markers')
    .returning('id')
    .insert(markerData.bubbleTea)
  })

  const bubbleTeaType = createBubbleTea
  .then((ids) => {
    const marker_types = ids.map((id) => {
      return {
        markers_id: id,
        types_id: 8
      }
    })

    return knex('marker_types')
    .insert(marker_types)
  })

  const createTrain = bubbleTeaType
  .then(() => {
    return knex('markers')
    .returning('id')
    .insert(markerData.train)
  })

  const trainType = createTrain
  .then((ids) => {
    const marker_types = ids.map((id) => {
      return {
        markers_id: id,
        types_id: 5
      }
    })

    return knex('marker_types')
    .insert(marker_types)
  })

  const createDogPark = trainType
  .then(() => {
    return knex('markers')
    .returning('id')
    .insert(markerData.dog)
  })

  const dogParkType = createDogPark
  .then((ids) => {
    const marker_types = ids.map((id) => {
      return {
        markers_id: id,
        types_id: 42
      }
    })

    return knex('marker_types')
    .insert(marker_types)
  })

  const createDemoUser = dogParkType
  .then(() => {
    return knex('users')
    .insert({name: 'Google Dream',email: 'example@gg.com'})
  })

  const createDemoDreams = createDemoUser
  .then(() => {
    var demoMarkers = [
      {
        date: "2018/11/15",
        name: "staples",
        lat: 49.281441,
        lng: -123.135435,
        address: "503-, 1250 Burnaby St, Vancouver, BC V6E 1P6, Canada",
        users_id: 2501
      },
      {
        date: "2018/11/12",
        name: "bus stop",
        lat:  49.293195,
        lng: -123.136916,
        address: "1920 Alberni St, Vancouver, BC V6G 1B5, Canada",
        users_id: 2501
      },
      {
        date: "2018/11/16",
        name: "td bank",
        lat: 49.282614,
        lng: -123.137451,
        address: "1314 Broughton St, Vancouver, BC V6G 2B7, Canada",
        users_id: 2501
      },
      {
        date: "2018/11/12",
        name: "post office",
        lat: 49.274824,
        lng: -123.093851,
        address: "Unnamed Road, Vancouver, BC V6A, Canada",
        users_id: 2501
      },
      {
        date: "2018/11/19",
        name: "movie theatre",
        lat: 49.286808,
        lng: -123.136849,
        address: "1601 Comox St, Vancouver, BC V6G 1P4, Canada",
        users_id: 2501
      }
    ]

    return knex('markers')
    .insert(demoMarkers)
  })

  const demoDreamTypes = createDemoDreams
  .then(() => {
    var demoMarkerTypes = [
      {
        markers_id: 2867 ,
        types_id: 39
      },
      {
        markers_id: 2868,
        types_id:1
      },
       {
        markers_id: 2869,
        types_id:14
      },
       {
        markers_id: 2870,
        types_id: 27
      },
       {
        markers_id: 2871,
        types_id:40
      }
    ]

    return knex('marker_types')
    .insert(demoMarkerTypes)
  })

  const createCafeMarkers = demoDreamTypes
  .then(() => {
    var demoCafeMarkers = [
      {
        date: "2018/11/15",
        name: "Elysian",
        lat: 49.281441,
        lng: -123.135435,
        address: "503-, 1250 Burnaby St, Vancouver, BC V6E 1P6, Canada",
        users_id: 1
      },
      {
        date: "2018/11/12",
        name: "Donuts",
        lat:  49.293195,
        lng: -123.136916,
        address: "1920 Alberni St, Vancouver, BC V6G 1B5, Canada",
        users_id: 2
      },
      {
        date: "2018/11/16",
        name: "Tacos",
        lat: 49.282614,
        lng: -123.137451,
        address: "1314 Broughton St, Vancouver, BC V6G 2B7, Canada",
        users_id: 3
      },
      {
        date: "2018/11/12",
        name: "Wendy's",
        lat: 49.274824,
        lng: -123.093851,
        address: "Unnamed Road, Vancouver, BC V6A, Canada",
        users_id: 4
      }
    ]

    return knex('markers')
    .insert(demoCafeMarkers)
  })

  const createCafeTypes = createCafeMarkers
  .then(() => {
    var demoCafeTypes = [
      {
        markers_id: 2872 ,
        types_id: 8
      },
      {
        markers_id: 2873,
        types_id:8
      },
       {
        markers_id: 2874,
        types_id:8
      },
       {
        markers_id: 2875,
        types_id: 8
      }
    ]

    return knex('marker_types')
    .insert(demoCafeTypes)
  })


  return createCafeTypes;
};