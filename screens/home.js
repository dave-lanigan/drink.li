import React, {useState} from 'react';
import { StyleSheet, Button, View, } from 'react-native';
import {DrinkList} from '../components/drinkList';
import Header from '../components/header';
import DATA from '../data/data.json';

/*

Question: how do we:
--> pass data between screens
--> get state from child elements
*/


export default function Home() {

  const [namesArray,setIngreds] = useState([]);


  let drink_keys =Object.keys( DATA )
  let drinks = [];
  //let drink_states = [];

  for (let i =0;i<drink_keys.length;i++){
      let out = DATA[drink_keys[i]]
      drinks.push( out )
      //drink_states.push( {name: out.name, added: "false"} )
  }

  // drinks = [
  //   {name: "negroni", "key": 0},
  //   {name: "negroni", "key": 1}
  // ]
  

  const pressHandler = (key) => {
    
    console.log( "pressed" )
    console.log(key)
    
    let newEl = [ DATA[ drink_keys[key] ]["ingrediants"] ]
  
    setIngreds( namesArray => [...namesArray,newEl] )

    console.log( namesArray )

  }

    return (
    <React.Fragment>
        <Header />
        <View style={styles.container}>
          <DrinkList entities={drinks} func={pressHandler}/>
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
      paddingTop:16,
      backgroundColor: "#f7f7ff",
      //backgroundColor: "#1a535c",
    },
  });