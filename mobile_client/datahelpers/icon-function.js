function generateIconImage (type) {
  let iconLink
  switch (type) {
    case 'amusement_park':
      iconLink = require('../assets/type_icons/amusement_park_icon.png')
      break;
    case 'aquarium':
      iconLink = require('../assets/type_icons/aquarium_icon.png')
      break;
    case 'art_gallery':
      iconLink = require('../assets/type_icons/art_gallery_icon.png')
      break;
    case 'atm':
      iconLink = require('../assets/type_icons/atm_icon.png')
      break;
    case 'bakery':
      iconLink = require('../assets/type_icons/bakery_icon.png')
      break;
    case 'bank':
      iconLink = require('../assets/type_icons/bank_icon.png')
      break;   
    case 'bar':
      iconLink = require('../assets/type_icons/bar_icon.png')
      break; 
    case 'beauty':
      iconLink = require('../assets/type_icons/beauty_icon.png')
      break; 
    case 'book_store':
      iconLink = require('../assets/type_icons/book_store_icon.png')
      break; 
    case 'bowling_alley':
      iconLink = require('../assets/type_icons/bowling_alley_icon.png')
      break;
    case 'bus_station':
      iconLink = require('../assets/type_icons/bus_station_icon.png')
      break;
    case 'cafe':
      iconLink = require('../assets/type_icons/cafe_icon.png')
      break;
    case 'car_wash':
      iconLink = require('../assets/type_icons/car_wash_icon.png')
      break;
    case 'convenience_store':
      iconLink = require('../assets/type_icons/convenience_store.png')
      break;
    case 'dentist':
      iconLink = require('../assets/type_icons/dentist_icon.png')
      break;   
    case 'department_store':
      iconLink = require('../assets/type_icons/department_store_icon.png')
      break; 
    case 'doctor':
      iconLink = require('../assets/type_icons/doctor_icon.png')
      break; 
    case 'electrician':
      iconLink = require('../assets/type_icons/electrician_icon.png')
      break;  
    case 'florist':
      iconLink = require('../assets/type_icons/florist_icon.png')
      break;
    case 'gas_station':
      iconLink = require('../assets/type_icons/gas_station_icon.png')
      break;
    case 'gym':
      iconLink = require('../assets/type_icons/gym_icon.png')
      break;
    case 'hair_care':
      iconLink = require('../assets/type_icons/hair_care_icon.png')
      break;
    case 'hardware_store':
      iconLink = require('../assets/type_icons/hardware_store.png')
      break;
    case 'home_goods_store':
      iconLink = require('../assets/type_icons/home_goods_store.png')
      break;   
    case 'hospital':
      iconLink = require('../assets/type_icons/hospital_icon.png')
      break; 
    case 'library':
      iconLink = require('../assets/type_icons/library_icon.png')
      break; 
    case 'liquor':
      iconLink = require('../assets/type_icons/liquor_store_icon.png')
      break;  
    case 'meal_takeaway':
      iconLink = require('../assets/type_icons/meal_takeaway_icon.png')
      break;
    case 'movie_theater':
      iconLink = require('../assets/type_icons/movie_theater_icon.png')
      break;
    case 'museum':
      iconLink = require('../assets/type_icons/museum_icon.png')
      break;
    case 'painter':
      iconLink = require('../assets/type_icons/painter_icon.png')
      break;
    case 'park':
      iconLink = require('../assets/type_icons/park_icon.png')
      break;
    case 'parking':
      iconLink = require('../assets/type_icons/parking_icon.png')
      break;   
    case 'pet_store':
      iconLink = require('../assets/type_icons/pet_store_icon.png')
      break; 
    case 'pharmacy':
      iconLink = require('../assets/type_icons/pharmacy_icon.png')
      break; 
    case 'plumber':
      iconLink = require('../assets/type_icons/plumber_icon.png')
      break; 
      case 'post_office':
      iconLink = require('../assets/type_icons/post_office_icon.png')
      break;
    case 'restaurant':
      iconLink = require('../assets/type_icons/restaurant_icon.png')
      break;
    case 'school':
      iconLink = require('../assets/type_icons/school_icon.png')
      break;
    case 'shopping_mall':
      iconLink = require('../assets/type_icons/shopping_mall_icon.png')
      break;
    case 'spa':
      iconLink = require('../assets/type_icons/spa_icon.png')
      break;
    case 'subway_station':
      iconLink = require('../assets/type_icons/subway_station_icon.png')
      break;   
    case 'supermarket':
      iconLink = require('../assets/type_icons/supermarket_icon.png')
      break; 
    case 'transit_station':
      iconLink = require('../assets/type_icons/transit_station_icon.png')
      break; 
    case 'veterinary_care':
      iconLink = require('../assets/type_icons/veterinary_care_icon.png')
      break;    
    case 'zoo':
      iconLink = require('../assets/type_icons/zoo_icon.png')
      break;
    default:
      iconLink = require('../assets/type_icons/florist_icon.png')
  }
  return iconLink
}

export default generateIconImage