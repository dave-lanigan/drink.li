/*
possible units:

*cl*, parts, part, splash, splash dash tsp tbsp shots shot "twist of" wedge

70ml/2fl

*/


export function digitizeUnits(measure) {

//gives back as oz

 let units;
 let digits;

 if ( measure!=null ){

    //get form 2 oz or 0.75 oz
    if (measure.search(/\//)==-1){

        digits = parseFloat( measure.slice(0,measure.search(" ")-1) );
        units = measure.slice( measure.search(" ") );
    }

     //get form 1/2 oz
    if (measure.search(/^\d\/\d/)!=-1){
        let out = measure.match(/^\d\/\d/)[0];
        let split_out = out.split("/");

        digits = parseFloat( split_out[0] ) / parseFloat( split_out[1] );
        digits.toFixed(1);
        units = measure.replace(/^\d\/\d\s/, "");

    }

     //get form 1 1/2 oz

    else if (measure.search(/\d\s\d\/\d\s/)!=-1){
        
        let out = measure.match(/\d\s\d\/\d/)[0];
        let split_out = out.split(" ");

        digits = parseFloat(split_out[0]) + parseFloat(split_out[1].split("/")[0]) / parseFloat( split_out[1].split("/")[1] )
        units = measure.replace(/\d\s\d\/\d\s/, "");
    }

    else{

        digits = 1;
        units = "oz";

    }


    ///
    /// change units
    ///
    if (units=="cl"){
        digits = digits*0.33
        digits = digits.toFixed(1)
    }

    if (units=="splash" || units=="dash" || units=="tsp" || units=="tbsp"){
        digits = digits*0.1
        digits = digits.toFixed(1)
    }
    
    return digits;

    }

  else{ return null;}

}


// let d={};
// d["ingreds"]=itemm;
// d["amount"]= itemm1;
// d["key"]=index;
// data.push( d );


// export function createList(tokens,DATA){
// /*
// Returns sum total of ingrediants based on drink tokens
// */

// let ingred=[];
// let amount=[];
// for (let i=0;i<tokens.length;i++){
    
//     let partial_ingreds = DATA[ tokens[i] ]["ingredients"];

//     console.log(partial_ingreds)

//     for (let j=0;j<partial_ingreds.length;j++){
//         if (partial_ingreds[j]["garnish"]==null){
//             ingred.push( partial_ingreds[j]["que"] )
//             amount.push( partial_ingreds[j]["amount"] )
//         }
//     }
// }

// let s = new Set( ingred );
// let uniq_ingred = Array.from(s);
// let uniq_amount = [];


// console.log( uniq_ingred )


// for (let i =0;i<uniq_ingred.length;i++){
//     let sum=0;
//     for (let j=0;j<ingred.length;j++){
//         if (uniq_ingred[i]==ingred[j]){
//             sum=sum+amount[j];
//         }
//     }
//     uniq_amount.push(sum.toString());
// }

// //let D=[{ingred: "ITEM:",amount:"QTY (OZ):",key:"0"}];
// let D=[];
// for (let i =0;i<uniq_ingred.length;i++){
//     D.push( {ingred: uniq_ingred[i], amount: uniq_amount[i], key: i.toString() } )
// }

// return D
// }