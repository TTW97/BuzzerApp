import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import BuzzerScreen from './screens/BuzzerScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {
  
  render() {
    return (
      <View style={{ marginTop: 0 }}>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  BuzzerScreen: BuzzerScreen,
});

const AppContainer = createAppContainer(AppNavigator);
