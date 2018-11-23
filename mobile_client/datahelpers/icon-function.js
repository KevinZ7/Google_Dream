function generateIconImage (type) {
  let iconLink 
  switch (type) {
    case 'cafe':
      iconLink = require('../assets/type_icons/cafe_icon.png')
      break;
    default:
      iconLink = require('../assets/images/green_marker.png')
  }
  return iconLink
}

export default generateIconImage