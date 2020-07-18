
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View} from 'react-native';
import Home from './screens/home';
import Ingrediants from './screens/ingrediants';
import Drink from './screens/drink';
import { Feather } from '@expo/vector-icons'; 

//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();
const Tabs = createMaterialBottomTabNavigator();


function StackedHome(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Ingrediants" component={Ingrediants}/>
      <Stack.Screen name="Drink" component={Drink} />
    </Stack.Navigator>
  )
}



export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
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

              <Tabs.Screen name="Home" component={StackedHome} />
              
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


//              <Tabs.Screen name="Ingrediants" component={Ingrediants} />