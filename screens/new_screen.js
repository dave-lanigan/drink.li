import React, {useState} from 'react';
import { StyleSheet, FlatList, Text, View, ActivityIndicator } from 'react-native';
//import NewList from '../components/drinkList';


export default function App() {


    const [data_state, setDataState] = useState( {isLoading: true, dataSource: null} );

    function componentDidMount(term) {
        let url="https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

        return fetch( url ).then( (resp) => resp.json()).then( (json) =>{
            let data=json.drinks;
            let filtered_json = data.filter( (drink) => drink.strDrink.includes(term)==true )
            //NewList(filtered_json)
            console.log("here")
            setDataState( {isLoading: false, dataSource: filtered_json } )

        }).catch( (error) => console.log(error) )
        
    }

    if (data_state.isLoading==false){

        return (
            <React.Fragment>
            <View style={styles.heading}>
                <Text>Here.</Text>
            </View>

            <View style={styles.heading}>
                <FlatList
                 data={data_state.dataSource}
                 renderItem={ ({item}) => ( <Text>{ item.strDrink }</Text> ) }
                 keyExtractor={item => item.idDrink}
                />
            </View>

            </React.Fragment>
            );

    } 
    
    else if (data_state.isLoading==true) {
        componentDidMount("A")
        return (
        <React.Fragment>
            <View style={styles.heading}>
                <Text>Here.</Text>
            </View>

            <View style={styles.heading}>
                <ActivityIndicator />
            </View>
           </React.Fragment>

            );
    }

    }

const styles = StyleSheet.create({
    heading: {
      //flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      margin: 24,
    },


  });


//   <React.Fragment>
//   <View style={styles.heading}>
//       <Text>Here.</Text>
//   </View>
  
//   <View style={styles.heading}>
//       <NewList entities={drinks}/>
//   </View>
  
// </React.Fragment>


// function NewList(data) {

//     const [state, setState] = useState([]);

//     setState(data);

//     return (
//         <FlatList
//             data={state}
//             renderItem={ ({item}) => ( <Text>{ item.strDrink }</Text> ) }
//             keyExtractor={item => item.idDrink}
//         />
//     );}


