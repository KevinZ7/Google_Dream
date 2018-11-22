const PORT = process.env.PORT || 8080;
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const settings = require('./settings.json')
const knexConfig = require('./knexfile.js').development
const knex = require('knex')(knexConfig);

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}


app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    knex
    .select("*")
    .from("markers")
    .where('name', 'bubble tea')
    .then((results) => {

      res.json(results)
  });
})

app.get('/categories', (req, res) => {
  knex.
  select('markers.name', 'types_id', 'types.name')
  .from('markers')
  .leftJoin('marker_types', 'markers.id', 'marker_types.markers_id')
  .leftJoin('types', 'types.id', 'marker_types.types_id')
  .then((results) => {
    res.json(results)
  })
})

app.get('/categories/:entity', (req, res) => {
  knex.
  select('markers.*', 'types_id')
  .from('markers')
  .leftJoin('marker_types', 'markers.id', 'marker_types.markers_id')
  .leftJoin('types', 'types.id', 'marker_types.types_id')
  .where({'types.name': req.params.entity})
  .then((results) => {
    res.json(results)
  })
})

app.get('/entities/:entity', (req, res) => {
  knex
  .select('*')
  .from('markers')
  .where('markers.name', req.params.entity)
  .then((results) => {
    res.json(results)
  })
})

app.post('/clusters/markers', (req,res) => {
  console.log("receiving message")
  var markerArray = req.body.array.split(',')
  var numberMarkerArray = markerArray.map((marker) => {
    return (Number(marker))
  })

   knex('users')
  .join('markers','users.id','users_id')
  .join('marker_types','markers.id','markers_id')
  .join('types','types.id','types_id')
  .select('markers.name','users.email')
  .whereIn('markers.id',numberMarkerArray)
  .then((result) => {
    console.log(result)
    res.json(result)
  })

  console.log(numberMarkerArray)

})

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}!`)
})