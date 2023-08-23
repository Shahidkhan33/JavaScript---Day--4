//a) Print odd numbers in an array

//ARROW METHOD
var a = [1,2,3,4,5,6,7,8,9,10];
let oddnum = (arr)=>{
    let odd = [] //an array to push odd numbers
    for(var i =0;i<arr.length;i++){
        if(arr[i]%2!==0){
            odd.push(arr[i])
        }
    }
    console.log(odd)
}
oddnum(a)
//OUTPUT : [1, 3, 5, 7, 9]


//b) Convert all the strings to title caps in a string array

//ARROW METHOD
var a = ['put','moRe','curSe','beHind','it'];
let title_cap = (arr)=>{
    for(var i = 0;i<arr.length;i++){
        arr[i] = arr[i].toLowerCase() //to make sure all characters of string ar of lower case
        arr[i] =  arr[i].charAt(0).toUpperCase() + arr[i].slice(1) //concatinating first uppercase and rest of elements
   }
   console.log(arr.join(' '))
}
title_cap(a)
//OUTPUT :Put More Curse Behind It


//c) Sum of all numbers in an array

//ARROW METHOD
var a = [1,2,3,4,5,6,7,8,9,10];
let total = (arr)=>{
    let sum = 0
    for(var i = 0;i<arr.length;i++){
        sum+=arr[i]
    }
    console.log(sum)
}
total(a)
//OUTPUT :55


//d) Return all the prime numbers in an array

//ARROW METHOD
var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let prime = (arr)=>{
    let primenum = []
   
  for(var i = 0;i<arr.length;i++){
    let t = false  //t is false if it is prime and viceversa
    for(var j = 2;j<arr[i];j++){
        if(arr[i]%j===0){
            t = true;
            break;
        }
    }
    if(!t && arr[i]!=1){
        primenum.push(arr[i]);
    }
  }
  console.log(primenum)
}
prime(a)
//OUTPUT :[2, 3, 5, 7, 11, 13, 17, 19]


//e) Return all the palindromes in an array

//ARROW METHOD
var a =["abc", "mom", "dad", "madam", "teacher",1221,121,989,1234];
let palind = (arr)=>{
    let s = []
    for(var i = 0;i<arr.length;i++){
        let str = ''  //an empty string to create a reverse string
        var temp; 
       temp = arr[i].toString()     //so that number palindromes can also be found   
        for(var j = temp.length-1;j>=0;j--){           
              str+=temp[j]
        }
        if(temp===str){
               s.push(arr[i])
        }
    }
    console.log(s)
}
palind(a)
//OUTPUT :['mom', 'dad', 'madam', 1221, 121, 989]