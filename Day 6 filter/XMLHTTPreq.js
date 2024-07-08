var todosAPi = "https://restcountries.com/v3.1/all";
var todoRequest = new XMLHttpRequest();

todoRequest.onreadystatechange = function () {
  var data = JSON.parse(this.response);
  console.log(data);
 
  
};

todoRequest.open("GET", todosAPi); // GET, POST, PUT, DELETE, PATCH
todoRequest.send();

console.log(todoRequest);

function filterAsianCountries(data = []) {
if(data.continents === "Asia" || data.region === "Asia"){
    return data.country;
}
}
var output= data.filter(filterAsianCountries(data));
 console.log(output);

function filterPopulation(data = [], population = 0) {
    if(population < 200000){
        return data.country;
    }
}
var populationOutput = data.filter(filterPopulation(data, 200000));
console.log(populationOutput);



data.forEach((data=[]))=>{
    console.log(data.name);
    console.log(data.capital);
    console.log(data.flag);
}

function totalPopulation(carry,population){
    return carry + population;
}
var totalpopulationOutput= data.reduce(totalPopulation(data,population));
console.log(totalpopulationOutput);



function usdCountry(data=[], USD){
    if(currencies === "USD"){
        return data.country;
    }
}
var usdCountryoutput = data.filter(usdCountry);
console.log(usdCountryoutput);

}