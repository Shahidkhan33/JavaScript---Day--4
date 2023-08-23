//a) Print odd numbers in an array

//IIFE METHOD
var a = [1,2,3,4,5,6,7,8,9,10];
(
    function(arr){
        let odd = []  //an array to push odd numbers
        for(var i =0;i<arr.length;i++){
            if(arr[i]%2!==0){
                odd.push(arr[i])
            }
        }
        console.log(odd)
    }
)(a)
//OUTPUT : [1, 3, 5, 7, 9]


//ANONYMOUS METHOD
var a = [1,2,3,4,5,6,7,8,9,10];
let oddfun = function(arr){
    let odd = []
    for(var i =0;i<arr.length;i++){
        if(arr[i]%2!==0){
            odd.push(arr[i])
        }
    }
    console.log(odd)
}
oddfun(a)
//OUTPUT : [1, 3, 5, 7, 9]



//b) Convert all the strings to title caps in a string array

//IIFE METHOD
var a = ['put','moRe','curSe','beHind','it'];
(
    function(arr){
        for(var i = 0;i<arr.length;i++){
            arr[i] = arr[i].toLowerCase() //to make sure all characters of string ar of lower case
            arr[i] =  arr[i].charAt(0).toUpperCase() + arr[i].slice(1) //concatinating first uppercase and rest of elements
       }
       console.log(arr.join(' '))
    }
)(a)
//OUTPUT :Put More Curse Behind It


//ANONYMOUS METHOD
var a = ['put','moRe','curSe','beHind','it'];

var str = function(arr){
    for(var i = 0;i<arr.length;i++){
        arr[i] = arr[i].toLowerCase()
        arr[i] =  arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
   }
   console.log(arr.join(' '))
}
str(a)
//OUTPUT :Put More Curse Behind It



//c) Sum of all numbers in an array

//IIFE METHOD
var a = [1,2,3,4,5,6,7,8,9,10];
(
    function(arr){
        let sum = 0
        for(var i = 0;i<arr.length;i++){
            sum+=arr[i]
        }
        console.log(sum)
    }
)(a)
//OUTPUT :55


//ANONYMOUS METHOD
var a = [1,2,3,4,5,6,7,8,9,10];
let total = function(arr){
    let sum = 0
    for(var i = 0;i<arr.length;i++){
        sum+=arr[i]
    }
    console.log(sum)
}
total(a)
//OUTPUT :55


//d) Return all the prime numbers in an array

//IIFE METHOD
var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
(
    function(arr){
        let primenum = []
   
  for(var i = 0;i<arr.length;i++){
    let t = false //t is false if it is prime and viceversa
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
)(a)
//OUTPUT :[2, 3, 5, 7, 11, 13, 17, 19]


//ANONYMOUS METHOD
var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let prime = function(arr){
    let primenum = []
   
  for(var i = 0;i<arr.length;i++){
    let t = false
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

//IIFE METHOD
var a =["abc", "mom", "dad", "madam", "teacher",1221,121,989,1234];
(
   function(arr){
    let s = []
    for(var i = 0;i<arr.length;i++){
        let str = '' //an empty string to create a reverse string
        var temp; 
       temp = arr[i].toString()  //so that number palindromes can also be found    
        for(var j = temp.length-1;j>=0;j--){           
              str+=temp[j]
        }
        if(temp===str){
               s.push(arr[i])
        }
    }
    console.log(s)
   }
)(a)
//OUTPUT :['mom', 'dad', 'madam', 1221, 121, 989]


//ANONYMOUS METHOD
var a =["abc", "mom", "dad", "madam", "teacher",1221,121,989,1234];
let palind = function(arr){
    let s = []
    for(var i = 0;i<arr.length;i++){
        let str = ''
        var temp; 
       temp = arr[i].toString()      
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


//f) Return median of two sorted arrays of the same size

//IIFE METHOD
var a = [3,2,1,4,5];
var b = [8,6,7,9,10];
(
    function(arr1,arr2){
            var arr3 = arr1.concat(arr2);  //concatinating two arrays
            arr3.sort((a,b)=>a-b);         //sorting two arrays
            let z = Math.floor(arr3.length/2);   //rounding up z one of median point
             var median;
            if(arr3.length%2===0){
                median = (arr3[z]+arr3[z-1])/2;
            }else{
                median = arr3[z]
            }
            console.log(median)
    }
)(a,b)
//OUTPUT :5.5


//ANONYMOUS METHOD
var a = [3,2,1,4,5];
var b = [8,6,7,9,10];

let med = function(arr1,arr2){
    var arr3 = arr1.concat(arr2);
    arr3.sort((a,b)=>a-b);
    let z = Math.floor(arr3.length/2);
     var median;
    if(arr3.length%2===0){
        median = (arr3[z]+arr3[z-1])/2;
    }else{
        median = arr3[z]
    }
    console.log(median)
}
med(a,b)
//OUTPUT :5.5


//g) Remove duplicates from an array

//IIFE METHOD
var a = [1,2,2,3,'ram',4,4,4,5,5,'ram','khan','guvi','khan'];
(
    function(arr){
        let s = []
        for(var i = 0;i<arr.length-1;i++){
            if(s.includes(arr[i])){   //to keep pushing unique element that way we will be able to remove duplicates
                continue;
            }
           s.push(arr[i])
        }
        console.log(s)
    }
)(a)
//OUTPUT :[1, 2, 3, 'ram', 4, 5, 'khan', 'guvi']


//ANONYMOUS METHOD
var a = [1,2,2,3,'ram',4,4,4,5,5,'ram','khan','guvi','khan'];
let nodup = function(arr){
    let s = []
    for(var i = 0;i<arr.length-1;i++){
        if(s.includes(arr[i])){
            continue;
        }
       s.push(arr[i])
    }
    console.log(s)
}
nodup(a)
//OUTPUT :[1, 2, 3, 'ram', 4, 5, 'khan', 'guvi']


//h) Rotate an array by k times

//IIFE METHOD
var a = [1,2,3,4,5,6,7,8,9,10];
var k = 1;
(
    function(arr,rot){
       for(var j = 0;j<rot;j++){
           for(var i = arr.length-1;i>0;i--){//I have moved last element by one element each iteration to create clockwise rotation
              let temp = arr[i]   
               arr[i] = arr[i-1]
               arr[i-1] = temp
            }
        }
        console.log(arr)
    }
)(a,k)
//OUTPUT :[10, 1, 2, 3, 4, 5, 6, 7, 8, 9]


//ANONYMOUS METHOD
var a = [1,2,3,4,5,6,7,8,9,10];
var k =1;
let rotate = function(arr,rot){
    for(var j = 0;j<rot;j++){
        for(var i = arr.length-1;i>0;i--){
           let temp = arr[i]
            arr[i] = arr[i-1]
            arr[i-1] = temp
         }
     }
     console.log(arr)
}
rotate(a,k)
//OUTPUT :[10, 1, 2, 3, 4, 5, 6, 7, 8, 9]











