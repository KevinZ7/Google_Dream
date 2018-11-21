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
  .then((id) => {
    return id.forEach((el) => {
       knex('marker_types')
      .insert([{
        markers_id: id[0],
        types_id: 8
      }])
      .asCallback()
    })
  })


  return bubbleTeaType;
};