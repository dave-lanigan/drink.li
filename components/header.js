import React from 'react';
import { StyleSheet, FlatList, View, Text, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts, Dosis  } from '@expo-google-fonts/inter';


export default function Comp() {
  return (
      <SafeAreaView>
        <View style={styles.container}>
            <Text style={styles.text}>{"Drink.Li"}</Text>
            <Image style={{width:20, height:20, marginLeft: 5}} source={ require("../assets/icon.png") }/>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'center',
        height: 60,
        backgroundColor: "#489fb5",
        alignItems: "center",
        //borderBottomColor: 'black',
        //borderBottomWidth: 2,
        flexDirection: "row",
    },
    text: {
        fontFamily: 'sans-serif',
        //fontWeight: "bold",
        fontSize: 20,
        //fontStyle: "italic",
        color: "white",
    }
  });