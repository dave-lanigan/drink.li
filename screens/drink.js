import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { DrinkIngredList } from '../components/lists';

export default function Drink({route, navigation}) {

  let DATA = route.params.data.item;

  let data=[]
  for (let i=1;i<16;i++){
    let index = i.toString();
    
    let itemm = DATA[ "strIngredient"+index];
    let itemm1 = DATA[ "strMeasure"+index ];

    if (itemm!=null && itemm1!=null){
          let d={};
          d["ingreds"]=itemm;
          d["amount"]= itemm1;
          d["key"]=index;
          data.push( d );
          }
  }

    return (
      <React.Fragment>
        <View style={{ flex:1, backgroundColor:"white" }} >
          <View style={styles.heading}>
                <Image style={styles.image} source={ { uri: DATA.strDrinkThumb } } /> 
                <Text style={styles.caption} > {  DATA.strDrink  } </Text>
            </View>

            <View style={styles.list_heading} >
              <Text style={styles.list_heading_text}>Item</Text>
              <Text style={styles.list_heading_text}>Amount</Text>
            </View>

            <View style={styles.list}>
                <DrinkIngredList sent_data={ data } />
            </View>

            <View style={styles.instructions}>
                <Text>{DATA.strInstructions}</Text>
            </View>
        </View>
        </React.Fragment>
  );
}


const styles = StyleSheet.create({
  heading: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
  },

  list: {
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    margin: 16,
  },

  caption: {
      fontSize: 24,
      margin:16,
  },

  image: {
    width: 250,
    height: 150,
    borderRadius:8,
    borderWidth: 2,
    borderColor: 'black',
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

  instructions: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 34,
  },

  instructions_text: {
    fontSize: 24,
    marginBottom: 24,
  },
});


