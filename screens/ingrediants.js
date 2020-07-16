import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {IngredList} from '../components/drinkList';
import Header from '../components/header';
import DATA from '../data/data.json';

export default function Ingrediants({route, navigation}) {

  function createList(tokens){

    let ingred=[];
    let amount=[];
    for (let i=0;i<tokens.length;i++){
       
        let partial_ingreds = DATA[ tokens[i] ]["ingredients"];

        console.log(partial_ingreds)

        for (let j=0;j<partial_ingreds.length;j++){
            if (partial_ingreds[j]["garnish"]==null){
              ingred.push( partial_ingreds[j]["que"] )
              amount.push( partial_ingreds[j]["amount"] )
            }
        }
    }

    let s = new Set( ingred );
    let uniq_ingred = Array.from(s);
    let uniq_amount = [];


    console.log( uniq_ingred )


    for (let i =0;i<uniq_ingred.length;i++){
        let sum=0;
        for (let j=0;j<ingred.length;j++){
            if (uniq_ingred[i]==ingred[j]){
              sum=sum+amount[j];
            }
        }
        uniq_amount.push(sum.toString());
    }

    let D=[{ingred: "ITEM:",amount:"QTY (OZ):",key:"0"}];

    for (let i =1;i<uniq_ingred.length;i++){
      D.push( {ingred: uniq_ingred[i], amount: uniq_amount[i], key: i.toString() } )
    }
    
    return D
  }

  let data = createList( route.params.names )

  console.log(data)


    return (
      <React.Fragment>
        <View style={styles.heading}>
            <Text style={styles.header}>Ingrediants</Text>
            <Text style={styles.body}> For 1 serving of each selected drink </Text>
        </View>

        <View style={styles.list}>
          <IngredList entities={data} />
        </View>
        </React.Fragment>
  );
}

const styles = StyleSheet.create({
    heading: {
      //flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      margin: 16,
    },
    header: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      margin: 4,
      fontSize: 20,
      fontWeight:"bold",
    },
    body: {
      //fontSize: 20,
      //fontWeight:"bold",
    },
    list: {
      flex: 1,
      //justifyContent: 'center',
      //alignItems: 'center',
      margin: 16,
    },

  });







// xtra
  // var idx = array.indexOf(element);
// while (idx != -1) {
//   indices.push(idx);
//   idx = array.indexOf(element, idx + 1);
// }

