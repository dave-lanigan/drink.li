import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Profiles from './getImages';


export function DrinkItem(props) {

    // function upperCaseIt(name){
    //     let nameArray = name.split(" ");
    //     for (let i=0;i<nameArray.length;i++){
    //         let w = nameArray[i];
    //         nameArray[i] = w[0].toUpperCase() + w.slice(1);
    //     }
    //     return nameArray.join(" ")
    // }

    let obj_name = props.info[0].replaceAll("-","_")

    console.log("here")
    console.log(obj_name)
    console.log(Profiles.aviation)
    console.log(Profiles[obj_name])


    return (
    <React.Fragment>
        <TouchableOpacity onPress={ () => props.func( props.info[2] ) }>
            <View style={{
                            margin: 4,
                            padding: 8,
                            alignItems: "center",
                            //backgroundColor: "#284b63",
                            borderColor: "#ced4da",
                            borderWidth: 1,
                            borderStyle: "solid",
                            borderRadius: 8,
                            opacity: props.opac,
                        }}>      
                {/* <Image style={styles.image} source={ require( "../assets/moscow-mule.jpg" ) } /> */}

                <Image style={styles.image} source={ Profiles[obj_name]["src"] } /> 

                <Text style={styles.text} >{ props.info[1] }</Text>
            </View>
        </TouchableOpacity>
    </React.Fragment>
  );
}


export function IngredItem(props) {

    return (
        <View style={styles.icomp}>
            <Text style={{ alignItems: "flex-start", padding: 4 }}>{props.info[1]}</Text>
            <Text style={{ alignItems: "flex-end", padding: 4 }}>{props.info[0]}</Text>
        </View>
  );
}


const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderRadius:8,
  },
  dcomp: {
      margin: 4,
      padding: 16,
      borderColor: "blue",
      borderWidth: 4,
      borderStyle: "solid",
  },
  icomp: {
    margin: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    //borderBottomColor: "#ced4da",
    //borderBottomWidth: 2,
    //borderBottomStyle: "solid",
  },

  text: {
    //color: "white",
    color: "black",
    paddingTop: 2,
  }
  
});


//<Image style={styles.image} source={ require( "../assets/images/" + props.info + ".jpg" ) } />