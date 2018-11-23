function generateIconImage (type) {
  let iconLink
  switch (type) {
    case 'cafe':
      iconLink = require('../assets/type_icons/amusement_park_icon.png')
      break;
    case 'transit_station':
      iconLink = require('../assets/type_icons/aquarium_icon.png')
      break;
    case 'cafe':
      iconLink = require('../assets/type_icons/art_gallery_icon.png')
      break;
    case 'cafe':
      iconLink = require('../assets/type_icons/atm_icon.png')
      break;
    case 'cafe':
      iconLink = require('../assets/type_icons/bakery_icon.png')
      break;
    case 'cafe':
      iconLink = require('../assets/type_icons/bank_icon.png')
      break;   
    case 'cafe':
      iconLink = require('../assets/type_icons/bar_icon.png')
      break; 
    case 'cafe':
      iconLink = require('../assets/type_icons/beauty_icon.png')
      break; 
    case 'cafe':
      iconLink = require('../assets/type_icons/book_store_icon.png')
      break; 
    case 'cafe':
      iconLink = require('../assets/type_icons/bowling_alley_icon.png')
      break;
    case 'transit_station':
      iconLink = require('../assets/type_icons/bus_station_icon.png')
      break;
    case 'cafe':
      iconLink = require('../assets/type_icons/cafe_icon.png')
      break;
    case 'cafe':
      iconLink = require('../assets/type_icons/car_wash_icon.png')
      break;
    case 'cafe':
      iconLink = require('../assets/type_icons/convenience_store_icon.png')
      break;
    case 'cafe':
      iconLink = require('../assets/type_icons/dentist_icon.png')
      break;   
    case 'cafe':
      iconLink = require('../assets/type_icons/department_store_icon.png')
      break; 
    case 'cafe':
      iconLink = require('../assets/type_icons/doctor_icon.png')
      break; 
    case 'cafe':
      iconLink = require('../assets/type_icons/electrician_icon.png')
      break;  
    case 'cafe':
      iconLink = require('../assets/type_icons/florist_icon.png')
      break;
    case 'transit_station':
      iconLink = require('../assets/type_icons/gas_station_icon.png')
      break;
    case 'cafe':
      iconLink = require('../assets/type_icons/gym_icon.png')
      break;
    case 'cafe':
      iconLink = require('../assets/type_icons/hair_care_icon.png')
      break;
    case 'cafe':
      iconLink = require('../assets/type_icons/hardware_store.png')
      break;
    case 'cafe':
      iconLink = require('../assets/type_icons/home_goods_store.png')
      break;   
    case 'cafe':
      iconLink = require('../assets/type_icons/hospital_icon.png')
      break; 
    case 'cafe':
      iconLink = require('../assets/type_icons/library_icon.png')
      break; 
    case 'cafe':
      iconLink = require('../assets/type_icons/liquor_store_icon.png')
      break;  
    case 'cafe':
      iconLink = require('../assets/type_icons/meal_takeaway_icon.png')
      break;
    case 'transit_station':
      iconLink = require('../assets/type_icons/movie_theater_icon.png')
      break;
    case 'cafe':
      iconLink = require('../assets/type_icons/museum_icon.png')
      break;
    case 'cafe':
      iconLink = require('../assets/type_icons/painter_icon.png')
      break;
    case 'cafe':
      iconLink = require('../assets/type_icons/park_icon.png')
      break;
    case 'cafe':
      iconLink = require('../assets/type_icons/parking_icon.png')
      break;   
    case 'cafe':
      iconLink = require('../assets/type_icons/pet_store_icon.png')
      break; 
    case 'cafe':
      iconLink = require('../assets/type_icons/pharmacy_icon.png')
      break; 
    case 'cafe':
      iconLink = require('../assets/type_icons/plumber_icon.png')
      break; 
      case 'cafe':
      iconLink = require('../assets/type_icons/post_office_icon.png')
      break;
    case 'transit_station':
      iconLink = require('../assets/type_icons/restaurant_icon.png')
      break;
    case 'cafe':
      iconLink = require('../assets/type_icons/school_icon.png')
      break;
    case 'cafe':
      iconLink = require('../assets/type_icons/shopping_mall_icon.png')
      break;
    case 'cafe':
      iconLink = require('../assets/type_icons/spa_icon.png')
      break;
    case 'cafe':
      iconLink = require('../assets/type_icons/subway_station_icon.png')
      break;   
    case 'cafe':
      iconLink = require('../assets/type_icons/supermarket_icon.png')
      break; 
    case 'cafe':
      iconLink = require('../assets/type_icons/transit_station_icon.png')
      break; 
    case 'cafe':
      iconLink = require('../assets/type_icons/veterinary_care_icon.png')
      break;    
    case 'cafe':
      iconLink = require('../assets/type_icons/zoo_icon.png')
      break; 
    default:
      iconLink = require('../assets/images/florist_icon.png')
  }
  return iconLink
}

export default generateIconImage