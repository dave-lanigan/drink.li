
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import Ingrediants from './screens/ingrediants';
import About from './screens/about';
import { Feather } from '@expo/vector-icons'; 

//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// const Stack = createStackNavigator();
const Tabs = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer style={ styles.nav } >
          <Tabs.Navigator
              barStyle={styles.nav}
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === 'Home') {
                    iconName = focused
                      ? 'home'
                      : 'home';
                  } else if (route.name === 'Ingrediants') {
                    iconName = focused ? 'list' : 'list';
                  }
                  else if (route.name === 'About') {
                    iconName = focused ? 'info' : 'info';
                  }

                  // You can return any component that you like here!
                  return <Feather name={iconName} size={16} color={"black"} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
              }}
          >
              <Tabs.Screen name="Home" component={Home} />
              <Tabs.Screen name="Ingrediants" component={Ingrediants} />
              <Tabs.Screen name="About" component={About} />
          </Tabs.Navigator>
      </NavigationContainer>
  
  </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#489fb5',
  },
});
