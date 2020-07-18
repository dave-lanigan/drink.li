import React, {useState} from 'react';
import { Text, FlatList } from 'react-native';


let base_url="https://www.thecocktaildb.com/api/json/v1/1/";

function getListByFirstLetter(term){
    
    term = term.toLowerCase()
    let first_letter = term[0];
    let rest_of_term = term.replace( term[0], "");
    
    var data;
    let url=`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${first_letter}`;
    
    return fetch( url ).then( (resp) => resp.json());
}


export function NewList(props) {

    ndata = propse.entities;

   return (
         <FlatList
             data={ndata}
             renderItem={ ({item}) => ( <Text>{"here"}</Text> ) }
         />
   );
 }
 