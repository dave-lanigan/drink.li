import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {IngredList} from '../components/drinkList';
import Header from '../components/header';

export default function Ingrediants() {

    return (
      <React.Fragment>
        <Header />
        <View style={styles.heading}>
            <Text style={styles.header}>Ingrediants</Text>
            <Text style={styles.body}> For 1 serving of each selected drink </Text>
        </View>

        <View style={styles.list}>
          <IngredList />
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
