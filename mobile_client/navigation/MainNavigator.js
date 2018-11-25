import OnboardScreen from '../screens/OnboardScreen.js'
import HomeScreen from '../screens/HomeScreen.js'
import DreamScreen from '../screens/DreamScreen.js'
import { createStackNavigator } from 'react-navigation';


const MainStack = createStackNavigator(
  {
    Onboard: {
      screen: OnboardScreen
    },
    Home: {
      screen: HomeScreen
    },
    Dream: {
      screen: DreamScreen
    }
  },
);

export default MainStack