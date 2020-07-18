import React, { useState } from 'react';
import { FlatList } from 'react-native';
import {DrinkItem, IngredItem, DrinkIngredItem, SelectedDrinkItem } from './listItems';



export function DrinkList(props) {

   return (
      <FlatList
      showsVerticalScrollIndicator={false}
      data={ props.entities }
      renderItem={ ({item}) => ( <DrinkItem func={props.func} data={ {item} } nav={props.nav} info={ [item.strDrink, item.strDrinkThumb ,item.idDrink] } /> ) }
      keyExtractor={item => item.idDrink}
      numColumns={2}
      />
   );
 }



export function SelectedDrinkList(props) {

      let DATA = props.entities;
   
      return (
            <FlatList
            horizontal={true}
            data={DATA}
            renderItem={ ( {item} ) => ( <SelectedDrinkItem info={ item.name }/> ) }
            />
      );
    }


export function IngredList(props) {

   let DATA = props.entities;

   return (
         <FlatList
         data={DATA}
         renderItem={ ( {item} ) => ( <IngredItem info={ [item.amount, item.ingred] }/> ) }
         />
   );
 }

 export function DrinkIngredList(props) {
      let DATA = props.sent_data;
      return (
            <FlatList
            data={DATA}
            renderItem={ ( {item} ) => ( <DrinkIngredItem info={ [item.ingreds,  item.amount] }/> ) }
            />
      );
}



//<DrinkIngredItem info={ [item.que, item.amount, item.unit] }/>