import 'exponent';
import { Font } from 'exponent';
import Exponent, { Asset, Components } from 'exponent';
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { StatusBar, Button } from 'react-native';

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';

import RootNavigation from './navigation/RootNavigation';
import { firebaseConfig } from './config'

//hack to allow browser-based cuid to be used on React Native
global.navigator.mimeTypes = ''; //browser-fingerprint only checks the length property so an empty string is fine
global.navigator.userAgent = 'reactnative';

const assets = [
  require('./assets/images/beetle.jpg'),
  require('./assets/images/cat.gif'),
  require('./assets/images/colorful-windows.jpg'),
  require('./assets/images/paintbrush.jpg'),
  require('./assets/images/space.jpg'),
  require('./assets/images/sparkles.jpg'),
];

import Router from './navigation/Router';

import * as firebase from 'firebase';
import store from './store'

let auth = false;

firebase.initializeApp(firebaseConfig);

// Listen for authentication state to change.
firebase.auth().onAuthStateChanged((user) => {
  if (user != null) {
    console.log("We are authenticated now!");
  }
  auth = (user !== null);

  // Do other things
});

async function signInWithGoogleAsync() {

  const result = await Exponent.Google.logInAsync({
    // androidClientId: '622185421885-egeqinrue7o1gv25lhek0ol96vncie0g.apps.googleusercontent.com',
    androidClientId: '121217071787-9p1mef2gm48v6ns5s73v8vfbenr656et.apps.googleusercontent.com',
    iosClientId: '121217071787-v56aqsac3qamcoel49up9grcs48ecurr.apps.googleusercontent.com',
    scopes: ['https://www.googleapis.com/auth/firebase', 'profile', 'email'],
  });

  const { type, accessToken, idToken } = result;

  if (type === 'success') {

    const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
    const r = await firebase.auth().signInWithCredential(credential);
    return { user: r };
  } else {

    throw { cancelled: true };
  }
}

async function press() {
  // console.log('PRESS!!!!!');
  try {
    let result = await signInWithGoogleAsync();
    // console.log('PRESS result', result);
  } catch (e) {
    // console.log('PRESS error!!!!!', e);
  }
  // console.log('PRESS!!!!! exit');
}

class App extends Component {

  state = {
    bootstrapped: false,
  };

  componentWillMount() {
    this._bootstrap();
  }

  componentDidMount() {
    Font.loadAsync({
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    });
  }

  _bootstrap = async () => {
    const promises = assets.map(module => Asset.fromModule(module).downloadAsync());
    await Promise.all(promises);
    this.setState({
      bootstrapped: true,
    });
  };

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [
          require('./assets/images/exponent-wordmark.png'),
          require('./assets/images/beetle.jpg'),
          require('./assets/images/cat.gif'),
          require('./assets/images/colorful-windows.jpg'),
          require('./assets/images/paintbrush.jpg'),
          require('./assets/images/space.jpg'),
          require('./assets/images/sparkles.jpg'),
        ],
        fonts: [
          FontAwesome.font,
          { 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf') },
        ],
      });
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
        'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e.message);
    } finally {
      this.setState({ appIsReady: true });
    }
  }

  render() {
    if (!this.state.bootstrapped) {
      return <Components.AppLoading />;
    }

    return (
      <Provider store={store}>
        <NavigationProvider router={Router}>
          <StatusBar barStyle="light-content" />
          <RootNavigation />
        </NavigationProvider>
      </Provider>
    );
  }
}

          // <Button title="Log in" onPress={press}></Button>


Exponent.registerRootComponent(App);

      /*<Provider store={store}>
          <NavigationProvider router={Router}>
            <StatusBar barStyle="light-content" />
            <RootNavigation />
            <Button title="Log in" onPress={press}></Button>
          </NavigationProvider>
      </Provider>*/


// async function signInWithFacebookAsync() {
//   const { type, token } = await Exponent.Facebook.logInWithReadPermissionsAsync(
//     '1869076753372562', {
//       behavior: 'web',
//       permissions: ['public_profile'],
//     });
//   if (type === 'success') {
//     // Get the user's name using Facebook's Graph API
//     const response = await fetch(
//       `https://graph.facebook.com/me?access_token=${token}`);
//     Alert.alert(
//       'Logged in!',
//       `Hi ${(await response.json()).name}!`,
//     );
//   }
// }

