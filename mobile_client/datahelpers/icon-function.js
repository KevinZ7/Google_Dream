function generateIconImage (type) {
  switch (type) {
    case 'cafe':
      require('../assets/type_icons/cafe_icon.png')
      break;
    default:
      require('../assets/images/green_marker.png')
  }
}

export default generateIconImage