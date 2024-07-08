Do the below programs in anonymous function & IIFE

A. Print odd numbers in an array
IIFE
var userInput = ["1 2 3 4 5"];
var input = userInput[0].split(' ');

(function(input) {
    for (var x = 0; x < input.length; x++) {
        if (input[x] % 2 !== 0) {
            console.log(input[x]);
        }
    }
})(input);


Anonymous function
var userInput = ["1 2 3 4 5"];
var input = userInput[0].split(' ');

var oddNum = function(input) {
    for (var x = 0; x < input.length; x++) {
        if (input[x] % 2 !== 0) {
            console.log(input[x]);
        }
    }
};

oddNum(input);


Arrow Funtion

var userInput = ["1 2 3 4 5"];
var input = userInput[0].split(' ');

var oddNum = (input) => {
    for (var x = 0; x < input.length; x++) {
        if (input[x] % 2 !== 0) {
            console.log(input[x]);
        }
    }
};

oddNum(input);




B. Convert all the strings to title caps in a string array
Named:
var strings = ["hello world","bye world"];
function titleCaps(strings){
    for(var i=0;i<strings.length;i++){
        var strg = strings[i].toLowerCase().split(" ")
        
        for(var j=0;j<strg.length;j++){
           strg[j] = strg[j].charAt(0).toUpperCase() + strg[j].slice(1);
            
        }
        strings[i]=strg.join(" ")
        }
        console.log(strings)
}
titleCaps(strings)

Ananymous
var strings = ["hello world","bye world"];
var titleCaps=function(strings){
    for(var i=0;i<strings.length;i++){
        var strg = strings[i].toLowerCase().split(" ")
        
        for(var j=0;j<strg.length;j++){
           strg[j] = strg[j].charAt(0).toUpperCase() + strg[j].slice(1);
            
        }
        strings[i]=strg.join(" ")
        }
        console.log(strings)
}
titleCaps(strings)

IIFE

var strings = ["hello world","bye world"];
(function(strings){
    for(var i=0;i<strings.length;i++){
        var strg = strings[i].toLowerCase().split(" ")
        
        for(var j=0;j<strg.length;j++){
           strg[j] = strg[j].charAt(0).toUpperCase() + strg[j].slice(1);
            
        }
        strings[i]=strg.join(" ")
        }
        console.log(strings)
}
)(strings)

Arrow function
var strings = ["hello world","bye world"];
var titleCaps=(strings)=>{
    for(var i=0;i<strings.length;i++){
        var strg = strings[i].toLowerCase().split(" ")
        
        for(var j=0;j<strg.length;j++){
           strg[j] = strg[j].charAt(0).toUpperCase() + strg[j].slice(1);
            
        }
        strings[i]=strg.join(" ")
        }
        console.log(strings)
}
titleCaps(strings)

C. Sum of all numbers in an array

var input = [1,2,3,4,5]
  var total =0
  function sum(){
      for(var x=0;x<input.length;x++){
          total += Number(input[x])
         
      }
       console.log(total)
  }

sum()

Anonymous

  var input = [1,2,3,4,5]
  var total =0
  var sum=function(){
      for(var x=0;x<input.length;x++){
          total += input[x]
         
      }
       console.log(total)
  }

sum()

IIFE

var input = [1, 2, 3, 4, 5];rf
var total = 0;

(function() {
    for (var x = 0; x < input.length; x++) {
        total += Number(input[x]);
    }
    console.log(total);
})();

Arrow function
var input = [1, 2, 3, 4, 5];
var total = 0;

var sum = () => {
    for (var x = 0; x < input.length; x++) {
        total += Number(input[x]);
    }
    console.log(total);
};

sum();

d. Return all the prime numbers in an array

var input = [1, 2, 3, 4, 5];
  let primenumber = []

function isPrimeNum(number){
    
       if(number <=1){
        return false;
        }
    for(var i=2; i<number; i++){
        
        if(number % i ===0){
        return false;
        
         }
    }
    return true;
    
}

function primeNum(input){
    for(let number of input){
        if( isPrimeNum(number)){
            primenumber.push(number)
            
        }
    }
    
}
primeNum(input)
console.log(primenumber)


Anonymous

 var input = [1, 2, 3, 4, 5];
  let primenumber = []

var isPrimeNum=function(number){
    
       if(number <=1){
        return false;
        }
    for(var i=2; i<number; i++){
        
        if(number % i ===0){
        return false;
        
         }
    }
    return true;
    
}

var primeNum=function(input){
    for(let number of input){
        if( isPrimeNum(number)){
            primenumber.push(number)
            
        }
    }
    
}
primeNum(input)
console.log(primenumber)


IIFE

  var input = [1, 2, 3, 4, 5];
  let primenumber = []

function isPrimeNum(number){
    
       if(number <=1){
        return false;
        }
    for(var i=2; i<number; i++){
        
        if(number % i ===0){
        return false;
        
         }
    }
    return true;
    
}

(function(input){
    for(let number of input){
        if( isPrimeNum(number)){
            primenumber.push(number)
            
        }
    }
    
})(input)
console.log(primenumber)



Arrow Function
var isPrimeNum=(number)=>{
    
       if(number <=1){
        return false;
        }
    for(var i=2; i<number; i++){
        
        if(number % i ===0){
        return false;
        
         }
    }
    return true;
    
}

var primeNum=function(input)=>{
    for(let number of input){
        if( isPrimeNum(number)){
            primenumber.push(number)
            
        }
    }
    
}
primeNum(input)
console.log(primenumber)

e. Return all the palindromes in an array

Named:
var strings=["hello","madam","racecar","world","malayalam"]
var palindromed=[]
var words = []
var reversed =[]
function findPalindrome(){
    for(var x=0; x<strings.length ;x++){
       words[x] = strings[x].split("")
       reversed[x]= words[x].reverse().join("") 
        if(reversed[x]===strings[x]){
            palindromed.push(reversed[x])
                            }
    }
}
findPalindrome()

console.log(palindromed)

Ananymous

var strings=["hello","madam","racecar","world","malayalam"]
var palindromed=[]
var words = []
var reversed =[]
var findPalindrome = function(){
    for(var x=0; x<strings.length ;x++){
       words[x] = strings[x].split("")
       reversed[x]= words[x].reverse().join("") 
        if(reversed[x]===strings[x]){
            palindromed.push(reversed[x])
                            }
    }
}
findPalindrome()

console.log(palindromed)



IIFE

var strings=["hello","madam","racecar","world","malayalam"];
var palindromed=[];
var words = [];
var reversed =[];
(function(strings){
    for(var x=0; x<strings.length ;x++){
       words[x] = strings[x].split("");
       reversed[x]= words[x].reverse().join("") ;
        if(reversed[x]===strings[x]){
            palindromed.push(reversed[x]);
                            }
    }
}
)(strings)
console.log(palindromed)



Arrow function
var strings=["hello","madam","racecar","world","malayalam"]
var palindromed=[]
var words = []
var reversed =[]
var findPalindrome = () => {
    for(var x=0; x<strings.length ;x++){
       words[x] = strings[x].split("")
       reversed[x]= words[x].reverse().join("") 
        if(reversed[x]===strings[x]){
            palindromed.push(reversed[x])
                            }
    }
}
findPalindrome()

console.log(palindromed)

F. Return median of two sorted arrays of the same size
const arr1=[1,2,3,4];
const arr2=[4,5,6,7];

var sortedarr=[];
const median=0;
function mediann(arr1,arr2){
   let n = arr1.length;
   var sortedarr=[];
   var median=0;
    sortedarr=[...arr1,...arr2];
    var sort=sortedarr.sort();
    median = (sortedarr[n-1]+ sortedarr[n]) /2
    console.log(median)
}
mediann(arr1,arr2)

Ananymous
const arr1=[1,2,3,4];
const arr2=[4,5,6,7];
var sortedarr=[];
const median=0;
var mediann=function(arr1,arr2){
   let n = arr1.length;
   var sortedarr=[];
   var median=0;
    sortedarr=[...arr1,...arr2];
    var sort=sortedarr.sort();
    median = (sortedarr[n-1]+ sortedarr[n]) /2
    console.log(median)
}
mediann(arr1,arr2)

IIEF
const arr1=[1,2,3,4];
const arr2=[4,5,6,7];
var sortedarr=[];
const median=0;
(function(arr1,arr2){
   let n = arr1.length;
   var sortedarr=[];
   var median=0;
    sortedarr=[...arr1,...arr2];
    var sort=sortedarr.sort();
    median = (sortedarr[n-1]+ sortedarr[n]) /2
    console.log(median)
}
)(arr1,arr2)



G.Remove duplicates from an array
var number = [1,2,3,2,4,5,4]
var dup= []
function removeDupe(number){
    for(var x=0; x<number.length; x++){
        if(dup.indexOf(number[x]) == -1){
            dup.push(number[x])
        } 
    }
         
     console.log(dup)
}

removeDupe(number)

Ananymous
var number = [1,2,3,2,4,5,4]
var dup= []
var removeDupe= function(number){
    for(var x=0; x<number.length; x++){
        if(dup.indexOf(number[x]) == -1){
            dup.push(number[x])
        } 
    }
         
     console.log(dup)
}

removeDupe(number)

IIEF
var number = [1,2,3,2,4,5,4];
var dup= [];
(function(number){
    for(var x=0; x<number.length; x++){
        if(dup.indexOf(number[x]) == -1){
            dup.push(number[x]);
        } 
    }
         
     console.log(dup)
}
)(number)


Arrow Function
var number = [1,2,3,2,4,5,4]
var dup= []
var removeDupe=(number) => {
    for(var x=0; x<number.length; x++){
        if(dup.indexOf(number[x]) == -1){
            dup.push(number[x])
        } 
    }
         
     console.log(dup)
}
removeDupe(number)

H.Rotate an array by k times
const arr=[3,4,5,2,6,4]
let k = 3
function rotate(arr){
    var rotatedarr = [];
    var arr1 = arr.slice(3) //[2,6,4]
    var arr2 = arr.slice(0,3)
    rotatedarr = [...arr1,...arr2]
    console.log(rotatedarr)
}
rotate(arr)

Anonymous
const arr=[3,4,5,2,6,4]
let k = 3
var rotate=function(arr){
    var rotatedarr = [];
    var arr1 = arr.slice(3) //[2,6,4]
    var arr2 = arr.slice(0,3)
    rotatedarr = [...arr1,...arr2]
    console.log(rotatedarr)
}
rotate(arr)

IIFE
const arr=[3,4,5,2,6,4];
let k = 3;
(function(arr){
    var rotatedarr = [];
    var arr1 = arr.slice(3) //[2,6,4]
    var arr2 = arr.slice(0,3)
    rotatedarr = [...arr1,...arr2]
    console.log(rotatedarr)
}
)(arr)



