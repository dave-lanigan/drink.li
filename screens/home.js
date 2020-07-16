import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {DrinkList} from '../components/drinkList';
import Header from '../components/header';
import DATA from '../data/data.json';
import {createStackNavigator} from '@react-navigation/stack';

/*

Question: how do we:
--> pass data between screens
--> get state from child elements
*/

const Stack = createStackNavigator();

export default function Home({ navigation }) {

  const [namesArray,setIngreds] = useState([]);


  let drink_keys =Object.keys( DATA )
  let drinks = [];
  //let drink_states = [];

  for (let i =0;i<drink_keys.length;i++){
      let out = DATA[drink_keys[i]]
      drinks.push( out )
  }

  // drinks = [
  //   {name: "negroni", "key": 0},
  //   {name: "negroni", "key": 1}
  // ]
  
  //[...namesArray,newEl]

  const pressItemHandler = (key) => {
    
    console.log( "pressed" )
    console.log( drink_keys[key]  )
    
    namesArray.push( drink_keys[key] )
    
    setIngreds( () => namesArray )
    console.log(namesArray)
  }
  
  return (
    <React.Fragment>
      <View style={styles.container}>
        <TouchableOpacity style={styles.getIngreds} onPress={() => navigation.navigate('Ingrediants', {"names": namesArray } )}>
          <View style={ {  } } >
            <Text>Get Ingrediants</Text>
          </View>
        </TouchableOpacity>
      
        <DrinkList entities={drinks} func={pressItemHandler}/>
      
      </View>
    </React.Fragment>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 2,
      paddingTop: 8,
      backgroundColor: "#f7f7ff",
      //backgroundColor: "#1a535c",
      //borderColor: "red",
      //borderWidth: 2,
    },

    getIngreds: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 200,
      height: 50,
      margin: 12,
      borderColor: "black",
      borderRadius: 4,
      borderWidth:2,
      backgroundColor: "#f7f7ff",

    }

  });