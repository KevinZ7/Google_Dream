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


  return dogParkType;
};