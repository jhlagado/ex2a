import {
  createRouter,
} from '@exponent/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import TodoListScreen from '../screens/TodoListScreen';
import TabNavigationExample from '../screens/TabNavigationExample';
import SlidingTabNavigationExample from '../screens/SlidingTabNavigationExample';
import AlertBarsExample from '../screens/AlertBarsExample';
import TranslucentBarExample from '../screens/TranslucentBarExample';
import EventEmitterExample from '../screens/EventEmitterExample';
import CustomNavigationBarExample from '../screens/CustomNavigationBarExample';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default createRouter(() => ({
  home: () => HomeScreen,
  about: () => AboutScreen, 
  todoList: () => TodoListScreen,
  tabNavigationExample: () => TabNavigationExample,
  slidingTabNavigationExample: () => SlidingTabNavigationExample,
  alertBarsExample: () => AlertBarsExample,
  translucentBarExample: () => TranslucentBarExample,
  eventEmitterExample: () => EventEmitterExample,
  customNavigationBarExample: () => CustomNavigationBarExample,
  links: () => LinksScreen,
  settings: () => SettingsScreen,
}));

