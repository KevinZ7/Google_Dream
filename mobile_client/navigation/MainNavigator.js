import HomeScreen from '../screens/HomeScreen.js'
import DreamScreen from '../screens/DreamScreen.js'
import { createStackNavigator } from 'react-navigation';

const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Dream: {
      screen: DreamScreen
    }
  },
);

export default MainStack