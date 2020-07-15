import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {IngredList} from '../components/drinkList';

export default function Ingrediants() {

    return (
        <View>
            <Text>{"Howdy"}</Text>
          </View>
  );
}



// import React, {useState} from 'react';
// import { StyleSheet, Button, View, } from 'react-native';
// import DrinkList from '../components/drinkList'
// import DATA from '../data/data.json'

// export default function Home() {


//   let drink_keys =Object.keys( DATA )
//   let drinks = [];

//   for (let i =0;i<drink_keys.length;i++){
//       let out = DATA[drink_keys[i]]
//       drinks.push( out )
//   }

//   // drinks = [
//   //   {name: "negroni", "key": 0},
//   //   {name: "negroni", "key": 1}
//   // ]
    

//   console.log( drinks )
//     return (
//     <React.Fragment>
//         <View style={styles.container}>
//           <DrinkList entities={drinks} />
//         </View>
//     </React.Fragment>
//   );
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       margin: 2,
//     },
//   });