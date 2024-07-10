var todosAPi = "https://restcountries.com/v3.1/all";
var todoRequest = new XMLHttpRequest();

todoRequest.onreadystatechange = function () {
  var data = JSON.parse(this.response);
  console.log(data);

 
 //console.log(todoRequest);

//Get all the countries from Asia continent /region using Filter method
let asiancountries = data.filter((element) => {
    return(element.region == "Asia" || element.continent == "Asia")
      
});
console.log(asiancountries);

asiancountries.forEach((elements) => {
console.log(elements.name.common);
});
//console.log(todoRequest);

//Get all the countries with a population of less than 2 lakhs using Filter method
let populations = data.filter((countries) => {
  return countries.population < 200000;
});
console.log("countries with a population of less than 2 lakhs ", populations);

//Print the following details name, capital, flag, using forEach method

let nameCapital = data.forEach((elementss)=>{
  console.log (elementss.name, elementss.capital, elementss.flags);
 });
//Print the total population of countries using reduce method

let totalpopulation = data.reduce((carry,totalPopul)=>{
  console.log("total population")
  return carry + totalPopul.population
},0);
console.log(totalpopulation);
//Print the country that uses US dollars as currency.
let countryUSD = data.filter((element)=>{
  return element.currencies && element.currencies.USD;
});
console.log("country that uses US dollars as currency",countryUSD)
};
todoRequest.open("GET", todosAPi); // GET, POST, PUT, DELETE, PATCH
 todoRequest.send();


 
