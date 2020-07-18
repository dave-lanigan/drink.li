import React, {useState} from 'react';
import { StyleSheet ,View, Text, TouchableOpacity } from 'react-native';
import {DrinkList} from '../components/lists';
import { SearchBar } from 'react-native-elements';


let ids_array=[];

export default function Home({ navigation }) {

  let idsArray=[];

  const [search_state, setSearch] = useState( { search: "" });
  const [data_state, setDataState] = useState( {isLoading: true, dataSource: null} );

  //const [ids_array, setArray] = useState( [] );

  function componentDidMount(term) {
      
      let url=`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${term[0]}`;

      return fetch( url ).then( (resp) => resp.json()).then( (json) =>{
          let data=json.drinks;
          let filtered_json = data.filter( function(value){ let name = value.strDrink.toLowerCase()
                                                            return name.includes(term)==true} )
          
          setDataState( {isLoading: false, dataSource: filtered_json } )
      }).catch( (error) => console.log(error) )   
  }

  const pressItemHandler = (key) => {
    
    ids_array.push( data_state.dataSource.filter( (value) => value.idDrink==key )[0] );

    console.log( ids_array )

    //let new_ids_array = [...ids_array, data_state.dataSource.filter( (value) => value.idDrink==key )[0]  ];

    //setArray( new_ids_array )
  
  }
  
  const updateSearch = ( search ) => {
        setSearch( { search } );
        if (search!=""){ componentDidMount( search.toLowerCase() ); }
      }
  
  if (data_state.isLoading==false){

    return (
      <React.Fragment>

            <SearchBar
              placeholder="Search For Drink Here.."
              onChangeText={ updateSearch }
              round={true}
              containerStyle={{backgroundColor: 'white', borderBottomColor: "white", borderTopColor: "white"}}
              value={ search_state.search }
            />

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.getIngreds} 
                              onPress={() => navigation.navigate('Ingrediants', {"ids": idsArray, "data": ids_array } )}>

              <View style={ {  } } >
                <Text>Get Ingrediants</Text>
              </View>
            
            </TouchableOpacity>

            <TouchableOpacity style={styles.getIngreds} onPress={ () => ids_array=[] }>
              <View style={ {  } } >
                <Text>Reset List</Text>
              </View>
            </TouchableOpacity>

          </View>
        
        <View style={styles.container}>
          <DrinkList entities={data_state.dataSource} nav={navigation} func={pressItemHandler}/>
        </View>
      </React.Fragment>
    );
    }

  else if (data_state.isLoading==true){

    return (
      <React.Fragment>

           <SearchBar
              placeholder="Search For Drink Here.."
              onChangeText={ updateSearch }
              round={true}
              value={ search_state.search }
              containerStyle={{backgroundColor: 'white', borderBottomColor: "white", borderTopColor: "white"}}
            />
        
        <View style={{ flex:1, backgroundColor:"white"}}>
        </View>
      
      </React.Fragment>
    );

    }

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 2,
      paddingTop: 8,
      backgroundColor: "white",
    },

    getIngreds: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 150,
      height: 50,
      margin: 4,
      marginTop: 12,
      marginBottom: 12,
      borderColor: '#489fb5',
      borderRadius: 4,
      borderWidth:2,
      backgroundColor: 'white',

    },

    buttons: {
      justifyContent: 'center',
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: "white",
    }

  });




  /*

  let drink_keys =Object.keys( DATA )
  let drinks = [];

  let drink_states = [];

  for (let i =0;i<drink_keys.length;i++){
      let out = DATA[drink_keys[i]]
      out["opac"]=1.0;
      out["darkness"]=0.0;
      drinks.push( out )
  }


  let term = search.search
  const renderList = (term) => {
      if (term!=""){
        let data = getListByFirstLetter(term);
      }
  }

  */