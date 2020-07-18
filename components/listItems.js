import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


export function DrinkItem(props) {

    return (
    <React.Fragment>
        <TouchableOpacity onPress={ () => props.func( props.info[2] ) }>
            <View style={listItemStyles.dcomp}>
                <TouchableOpacity onPress={ () => props.func( props.info[2] ) }>
                    <Image style={ listItemStyles.image } source={ { uri: props.info[1] } } />
                </TouchableOpacity>
                
              <TouchableOpacity onPress={() => props.nav.navigate('Drink', {"id": props.info[2], "data": props.data } )}>
                <Text style={listItemStyles.text} >{ props.info[0] }</Text>
              </TouchableOpacity>
            
            </View>
        </TouchableOpacity>
    </React.Fragment>
  );
}


export function IngredItem(props) {

    return (
        <View style={listItemStyles.icomp}>
            <Text style={{ padding: 4 }}>{props.info[1]}</Text>
            <Text style={{ padding: 4 }}>{props.info[0]}</Text>
        </View>
  );
}


export function SelectedDrinkItem(props) {

  return (
        <TouchableOpacity >
          <Text style={listItemStyles.sdtext} >{ props.info }</Text>
        </TouchableOpacity>
);
}

export function DrinkIngredItem(props) {

  return (
      <View style={listItemStyles.icomp}>
          <Text style={{ padding: 4 }}>{props.info[0]}</Text>
          <View style={listItemStyles.icomp2}>
            <Text style={{ padding: 4 }}>{props.info[1]}</Text>
            <Text style={{ padding: 4 }}>{props.info[2]}</Text>
          </View>
      </View>
);
}


export const listItemStyles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderRadius:8,
    // opacity: 0.5,
    //opacity: props.opac,
  },
  dcomp: {
    margin: 4,
    padding: 8,
    alignItems: "center",
    //backgroundColor: "#284b63",
    borderColor: "#ced4da",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
  },
  icomp: {
    margin: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#ced4da",
    borderBottomWidth: 2,
    //borderBottomStyle: "solid",
  },

  icomp2: {
    margin: 4,
    flexDirection: "row",
  },

  text: {
    //color: "white",
    color: "black",
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 6,
    marginBottom: 4,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
  },

  sdtext: {
    //color: "white",
    color: "black",
    padding: 12,
    margin: 4,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
  },

});



//////extras
//<Image style={styles.image} source={ require( "../assets/images/" + props.info + ".jpg" ) } />

    // function upperCaseIt(name){
    //     let nameArray = name.split(" ");
    //     for (let i=0;i<nameArray.length;i++){
    //         let w = nameArray[i];
    //         nameArray[i] = w[0].toUpperCase() + w.slice(1);
    //     }
    //     return nameArray.join(" ")
    // }