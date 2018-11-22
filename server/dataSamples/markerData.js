
function generateMarkers(latMin,latMax,lngMin,lngMax,name,count){
  var markerArray = [];

  for(let i = 0; i < count; i++){

    var randomLat = latMin + Math.random() * (latMax - latMin);
    var randomLng = lngMin + Math.random() * (lngMax - lngMin);
    markerArray.push({
      name: name,
      lat: randomLat,
      lng: randomLng,
      users_id: i+1
    })
  }

  return markerArray;
}

var bubbleTeaB13 = generateMarkers(49.269207,49.272234,-123.151028,-123.146006,"bubble tea",2);
var bubbleTeaB65 = generateMarkers(49.265521,49.268642,-123.111536,-123.106609,"bubble tea",13);
var bubbleTeaB34 = generateMarkers(49.277945,49.279593,-123.113275,-123.110786, "bubble tea",6);
var bubbleTeaB89 = generateMarkers(49.278280,49.281624,-123.136305,-123.131985, "bubble tea",15);
var bubbleTeaB58 = generateMarkers(49.286926,49.289888,-123.134988,-123.130813, "bubble tea",11);
var bubbleTeaY672 = generateMarkers(49.283248,49.286591,-123.142017,-123.137184, "bubble tea",100);
var bubbleTeaY773 = generateMarkers(49.277277,49.280668,-123.130740,-123.126127, "bubble tea",125);
var bubbleTeaY503 = generateMarkers(49.277038,49.280764,-123.123052,-123.117596, "bubble tea",100);
var bubbleTeaG419 = generateMarkers(49.274363,49.277659,-123.134621,-123.129935, "bubble tea",80);
var bubbleTeaG371 = generateMarkers(49.269035,49.271997,-123.136597,-123.132240, "bubble tea",62);
var bubbleTeaR1684 = generateMarkers(49.273096,49.276154,-123.127042,-123.122648, "bubble tea",300);

var bubbleTea = bubbleTeaB13.concat(bubbleTeaB65).concat(bubbleTeaB34).concat(bubbleTeaB89).concat(bubbleTeaB58)
.concat(bubbleTeaY672).concat(bubbleTeaY773).concat(bubbleTeaY503).concat(bubbleTeaG419).concat(bubbleTeaG371)
.concat(bubbleTeaR1684)


var trainY773 = generateMarkers(49.246119,49.263611,-123.100981,-123.080611,"skytrain station",100)
var trainY672 = generateMarkers(49.256581,49.274072,-123.177639,-123.149141,"skytrain station",70)
var trainY503 = generateMarkers(49.211980,49.229915,-123.066140,-123.038672,"skytrain station",60)
var trainB58 = generateMarkers(49.232884,49.249490, -123.163753,-123.134250,"skytrain station",7)
var trainB13 = generateMarkers(49.229276,49.246989,-123.087112, -123.059644,"skytrain station",2)
var trainB65 = generateMarkers(49.179877,49.198477,-123.069961,-123.040477,"skytrain station",7)
var trainG419 = generateMarkers(49.239500,49.256821, -123.192369,-123.165837,"skytrain station",50)
var trainG371 = generateMarkers(49.214690, 49.232653,-123.178956, -123.151452,"skytrain station",30)
var trainR2480 = generateMarkers(49.256823,49.273076,-123.250365,-123.221527,"skytrain station",300)
var trainR2100 = generateMarkers(49.248271,49.265378,-123.206126,-123.180244,"skytrain station",250)

var train = trainY773.concat(trainY672).concat(trainY503).concat(trainB58).concat(trainB13).concat(trainB65)
.concat(trainG419).concat(trainG371).concat(trainR2480).concat(trainR2100)


var dogB65 = generateMarkers(49.283993,49.289365,-123.141787,-123.132665,"dog park",65)
var dogB58 = generateMarkers(49.265486,49.270940,-123.156488,-123.146231, "dog park",58)
var dogB13 = generateMarkers(49.265653,49.272429,-123.169659,-123.160668,"dog park",13)
var dogB92 = generateMarkers(49.243714,49.251815,-123.125065,-123.115095,"dog park",92)
var dogG171 = generateMarkers(49.259495,49.265201,-123.138313-123.127792,"dog park",171)
var dogG226 = generateMarkers(49.252809,49.258604,-123.161539,-123.151020,"dog park",226)
var dogG219 = generateMarkers(49.248420,49.254751,-123.091595,-123.081485,"dog park",219)
var dogY503 = generateMarkers(49.264513,49.270678,-123.076318,-123.068097,"dog park",503)

var dog = dogB65.concat(dogB58).concat(dogB13).concat(dogB92).concat(dogG171).concat(dogG226).concat(dogG219)
.concat(dogY503)


module.exports = {
  bubbleTea: bubbleTea,
  train: train,
  dog: dog
};




