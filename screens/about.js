import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/header';

export default function Ingrediants() {

    return (
      <React.Fragment>
        <View style={styles.heading}>
            <Text style={styles.body}> This App was created by David M.J. Lanigan </Text>
        </View>
        </React.Fragment>
  );
}


const styles = StyleSheet.create({
  heading: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 24,
  },
});