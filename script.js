//Task Name Pokemon API

//    How do I process the API data?

//   Create async function with try ,catch
//   fetch the API in which the data are obtained 
//   write the code to call the data that is required
//   and finally the data are printed in the console 


async function getdata(){

    try{
    let res=await fetch (" https://pokeapi.co/api/v2/pokemon/ditto")
    let result= await res .json();     
    // console.log(result)

  // Display around 50 pokemons
  // the data for pokemon are not avaiable in the given API

     // Each pokemon’s ability needs to be listed..
     var abilities =result.abilities;
     console.log(abilities) 
     
  //Display the pokemon’s moves.
     var moves =result.moves;
     console.log(moves) 

  //  Also display the weight of each pokemon.
       var weight =result.weight;
       console.log(weight) 


   
    }    catch (error) {
    }
    }
    getdata()