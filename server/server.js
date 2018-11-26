var secret = require('./secret.js');
var typeNames = require('./dataSamples/types.js')
var fetch = require('fetch').fetchUrl;

const PORT = process.env.PORT || 8080;
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const settings = require('./settings.json')
const knexConfig = require('./knexfile.js').development
const knex = require('knex')(knexConfig);

const{
  getTypes,
  getEntitiesOfType,
  getMarkersOfEntity
} = require('./dataHelpers/webClientHelpers.js')(knex);

const{
  getUserMarkers,
  createMarker,
  getClusterMarkers
} = require('./dataHelpers/mobileClientHelpers.js')(knex);


const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}


app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/categories', (req, res) => {
  getTypes()
  .then((results) => {
    res.json(results)
  })
})

app.get('/categories/:entity', (req, res) => {
  getEntitiesOfType(req.params.entity)
  .then((results) => {
    res.json(results)
  })
})

app.get('/entities/:entity', (req, res) => {
  getMarkersOfEntity(req.params.entity)
  .then((results) => {
    res.json(results)
  })
})

app.get('/markers/:user_id', (req, res) => {
  getUserMarkers(req.params.user_id)
  .then((results) => {
    res.json(results)
  })
})

app.post('/markers', (req, res) => {
  const { name,name2, lat, lng, users_id, date, address } = req.body
  createMarker(name,name2,lat,lng,users_id,date,address,secret,fetch,typeNames)
  .then(() => {
    res.sendStatus(201)
  })

})

app.post('/clusters/markers', (req,res) => {
  console.log("receiving message")
  var markerArray = req.body.array.split(',')
  var numberMarkerArray = markerArray.map((marker) => {
    return (Number(marker))
  })

  getClusterMarkers(numberMarkerArray)
  .then((result) => {
    res.json(result)
  })


})

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}!`)
})