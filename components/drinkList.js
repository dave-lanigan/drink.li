import React from 'react';
import { StyleSheet, FlatList, View, Text, Item } from 'react-native';
import {DrinkItem, IngredItem } from './drinkItem';

export function DrinkList(props) {

   let DATA = props.entities;

  return (
        <FlatList
        data={DATA}
        renderItem={ ( {item} ) => ( <DrinkItem info={ [item.path, item.name, item.key,] } func={props.func} /> ) }
        numColumns={2}
        />
  );
}

// export function IngredList(props) {

//     let DATA = props.entities;
 
//    return (
//          <FlatList
//          data={DATA}
//          renderItem={ ( {item} ) => ( <IngredItem info={ item.name } /> ) }
//          numColumns={2}
//          />
//    );
//  }