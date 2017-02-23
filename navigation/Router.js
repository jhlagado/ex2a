import {
  createRouter,
} from '@exponent/ex-navigation'; 

import TodoListScreen from '../screens/TodoListScreen';
import IndexScreen from '../screens/IndexScreen';
import AboutScreen from '../screens/AboutScreen';
import TabNavigationExample from '../screens/TabNavigationExample'; 
import SlidingTabNavigationExample from '../screens/SlidingTabNavigationExample';
import AlertBarsExample from '../screens/AlertBarsExample';
import TranslucentBarExample from '../screens/TranslucentBarExample';
import EventEmitterExample from '../screens/EventEmitterExample';
import CustomNavigationBarExample from '../screens/CustomNavigationBarExample';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default createRouter(() => ({
  home: () => TodoListScreen,
  index: () => IndexScreen,
  about: () => AboutScreen, 
  tabNavigationExample: () => TabNavigationExample,
  slidingTabNavigationExample: () => SlidingTabNavigationExample,
  alertBarsExample: () => AlertBarsExample,
  translucentBarExample: () => TranslucentBarExample,
  eventEmitterExample: () => EventEmitterExample,
  customNavigationBarExample: () => CustomNavigationBarExample,
  links: () => LinksScreen,
  settings: () => SettingsScreen,
}));

