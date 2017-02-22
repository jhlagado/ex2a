import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@exponent/ex-navigation';

import { Ionicons } from '@exponent/vector-icons';
import Router from '../navigation/Router';

const navItems = [
  { id: 'home', title: 'Examples', icon: 'md-apps' },
  { id: 'settings', title: 'Settings', icon: 'md-settings' },
  { id: 'links', title: 'Links', icon: 'md-link' },
  { id: 'about', title: 'About', icon: 'md-alert' },
];

const renderHeader = () => {
  return (
    <View style={{ height: 180, width: 300 }}>
      <Image source={require('../assets/images/sparkles.jpg')} style={styles.header} />
    </View>
  );
};

const renderTitle = (text: string, isSelected: bool) => {
  return (
    <Text style={[styles.buttonTitleText, isSelected ? styles.selectedText : null]}>
      {text}
    </Text>
  );
};

const renderIcon = (name: string, isSelected: bool) => {
  let extraStyle = { marginTop: 2 };
  if (name === 'md-alert') {
    extraStyle = { ...extraStyle, marginLeft: -3 };
  }
  return (
    <Ionicons
      style={[styles.icon, isSelected ? styles.selectedText : null, extraStyle]}
      name={name}
      size={24}
      />
  );
};

export default class extends React.PureComponent {

  render = () => (
    <DrawerNavigation
      drawerPosition="right"
      renderHeader={renderHeader}
      drawerWidth={300}
      initialItem="home">
      {
        navItems.map((item) =>
          <DrawerNavigationItem
            key={item.id}
            id={item.id}
            selectedStyle={styles.selectedItemStyle}
            renderTitle={isSelected => renderTitle(item.title, isSelected)}
            renderIcon={isSelected => renderIcon(item.icon, isSelected)}>
            <StackNavigation
              id="root"
              defaultRouteConfig={{}}
              initialRoute={Router.getRoute(item.id)}
              />
          </DrawerNavigationItem>
        )
      }
    </DrawerNavigation>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    height: 180,
    width: null,
    resizeMode: 'cover',
  },
  buttonTitleText: {
    color: '#222',
    fontWeight: 'bold',
    marginLeft: 18,
  },
  icon: {
    color: '#999',
  },
  selectedText: {
    color: '#0084FF',
  },
  selectedItemStyle: {
    backgroundColor: "#E8E8E8",
  },
});
