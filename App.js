import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './components/HomeScreen';
import ProjectsScreen from './components/ProjectsScreen';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Projects: {
    screen: ProjectsScreen
  }
},{
    initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c62368',
    alignItems: 'center',
    justifyContent: 'center',
  },
});