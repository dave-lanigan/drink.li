import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {IngredList, SelectedDrinkList} from '../components/lists';
import { digitizeUnits } from '../helpers/helpers';

export default function Ingrediants({route, navigation}) {

    let DATA = route.params.data;

    console.log("ing",DATA)

    let data=[];
    let names_data=[];


    if (DATA!=null) {

        let ingred=[];
        let amount=[];
        //iterate thru drinks

        for (let i=0;i<DATA.length;i++){
            
            names_data.push( {"name": DATA[i].strDrink,"key": i.toString() })

            // iterate thru each drinks ingredients
            for (let j=1;j<16;j++){
                let index = j.toString();

                let itemm = DATA[i][ "strIngredient"+index];
                let itemm1 = DATA[i][ "strMeasure"+index ];

                itemm1 = digitizeUnits(itemm1);

                if (itemm!=null && itemm1!=null){
                        ingred.push( itemm.toLowerCase() );
                        amount.push( itemm1 );
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

        //let D=[{ingred: "ITEM:",amount:"QTY (OZ):",key:"0"}];
        for (let i =0;i<uniq_ingred.length;i++){
            data.push( {ingred: uniq_ingred[i], amount: uniq_amount[i], key: i.toString() } )
        } 
        console.log("finished data")
        console.log(data)  
    }
    

    return (
      <React.Fragment>
      
      <View style={{flex: 1, backgroundColor: "white"}}>

        <View style={styles.selectDrinklist}>
            { names_data!=null? <SelectedDrinkList entities={names_data} />: null }
        </View>


        <View style={styles.heading}>
            <Text style={styles.header}>Ingrediants</Text>
            <Text style={styles.body}> For 1 serving of each selected drink </Text>
        </View>

        <View style={styles.list_heading} >
        <Text style={styles.list_heading_text}>Item</Text>
        <Text style={styles.list_heading_text}>Amount</Text>
        </View>

        <View style={styles.list}>
            { data!=null? <IngredList entities={data} />: null }
        </View>


        <View style={{backgroundColor: "white"}}>
        </View>
      
      
      </View>
        </React.Fragment>
  );
  
}

/// styles
const styles = StyleSheet.create({
    heading: {
      //flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      margin: 24,
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

    list_heading: {
      marginTop: 16,
      marginLeft: 24,
      marginRight: 24,
      flexDirection: "row",
      borderBottomColor: "black",
      borderBottomWidth: 1,
      justifyContent: "space-between",

    },

    list_heading_text: {
      fontSize: 16,
      fontWeight: "bold"

    },

    selectDrinklist:{
      justifyContent: "center",
      alignItems: "center",

    }

  });







// xtra
  // var idx = array.indexOf(element);
// while (idx != -1) {
//   indices.push(idx);
//   idx = array.indexOf(element, idx + 1);
// }

