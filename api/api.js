// what are promises and how to use also asysnc

/*
Promises and shit.


*/


let base_url="https://www.thecocktaildb.com/api/json/v1/1/";

export function getListByFirstLetter(term){
    
    term = term.toLowerCase()
    let first_letter = term[0];
    let rest_of_term = term.replace( term[0], "");
    
    var data;
    let url=`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${first_letter}`;
    
    return fetch( url ).then( (resp) => resp.json());
    
    
    // async function getStuff(url) {
    //                 const response = await fetch(url);
    //                 const json = await response.json();
    //                 console.log(json)
    //             }

}