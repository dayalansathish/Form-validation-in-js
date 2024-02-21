// const data = {
//     name:'sathish'
// };
// console.log(data);

// Logical operators----------------------------------------
//And(&&)
//Or(||)
//Not(!)

// const a = false
// const b = true

// if(!a==!b){ 
//     console.log('True')
// }
// else{
//     console.log('False')
// }

//javascript variables are--------------------------------------
//var-----global scope
//let-----functional scope
//const--------blocked scope

// const c = [1,2,3,4,5,6]
// console.log(c[2])


//Array----------------------------
//[]--square bracket

const Array = [1, 2, 3, 4, 5, 6]
// console.log(Array[5])

//Objects------------------------

const object = {
    fname: 'sathish',
    lname: 'kumar',
    location: 'crompet',
    job: 'developer',
    object1: {
        pincode: 632515,
        state: 'tamilnadu',
        dist: 'vellore'
    }
}

// console.log(object.job)
// console.log(object.location)
// console.log(object.object1.dist)

//array of object---------------------------------

const students = [
    {
        sname: 'praveen',
        dist: 'erode',
        address1: {
            line1: 'line1',
            line2: 'line2',
            line3: 'line3'
        }
    },
    {
        sname: 'jagan',
        dist: 'chennai',
        address2: {
            line1: 'line1',
            line2: 'line2',
            line3: 'line3'
        }
    },
    {
        sname: 'sangee',
        dist: 'kangeyam',
        address3: {
            line1: 'line1',
            line2: 'line2',
            line3: 'line3'
        }
    },
]

// console.log(students[2].address3.line3)


//Functions----------------------parameter function/parametrelesss function
//3types
//declaration function

//parameter less function---------------------------------------

function declaration() {       //syntax
    console.log('Iam sathish')
    console.log('Iam web Developer')
}
// declaration()

//expression function
const expression = function () {
    console.log('Iam expression')
}
// expression()
//arrow function

const arrow = () => {
    console.log('Iam Arrow function')
}

// arrow()

//parameter function--------------------------------------

const parameter = (a, b) => {
    console.log(a + b)
}

// parameter("11",1)

//Array Methods---------------
//push--------------add to last new element.
const pusharray = ['sathsih', 'praveen', 'jagan', 'nepo']
pusharray.push('jahina')
// console.log(pusharray)

const js = [11, 12, 13, 14, 15, 16]
js.push(17)
// console.log(js)

//unshift---------------------------add to start new element.

const arrayUnshift = [22, 23, 24, 25, 26]
arrayUnshift.unshift(21)
// console.log(arrayunshift)

//pop----------------------remove from last element in the array.
const arrayPop = ['sathsih', 'praveen', 'jagan', 'nepo']
arrayPop.pop()
// console.log(arraypop)

//shift-------------------------remove from first element in the array.
const arrayShift = ['sathsih', 'praveen', 'jagan', 'nepo']
arrayShift.shift()
// console.log(arrayShift)

//splice------------------------remove any element from an array and also add element in removing place.
const arraySplice = ['sathsih', 'praveen', 'jagan', 'nepo']
arraySplice.splice(1, 1, 'kumar', 'js', 'ps')
// console.log(arraySplice)

//reverse ----------------------------------this method reverse the array elements.
const arrayReverse = [9, 8, 7, 6, 5, 4, 3, 2, 1]
arrayReverse.reverse()
// console.log(arrayReverse)

//sort--------------------------------sorting accending to decending or decending to accending
//(a-b)small to large (b-a)large to small                 
const arraySort = [99, 22, 55, 11, 66, 33, 44, 77]
arraySort.sort((a, b) => b - a)
// console.log(arraySort)

//fill------------------------------filling the array with same value.
const arrayFill = [11, 22, 33, 44, 55, 66]
arrayFill.fill(657, 4, 5)
// console.log(arrayFill)

//map --------------------------looping but it will return as array.
function square(x) {
    return x * x;
}
const arrayMap = [1, 2, 3, 4, 5]
const squareMap = arrayMap.map(square);
// console.log(squareMap)

//filter-------------------------------------filter with conditions.
const arrayFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// console.log(arrayFilter.filter((num)=>num%2===0))------It will give even numbers.

//slice-----------------------------this function give new array of element start and end index value .

const arraySlice = [1, 2, 3, 4, 5, 6]
// console.log(arraySlice.slice(2,5)) // ex: slice of cake piece.

//concat ------------------------------------Merging to or more arrays.
const array1 = [1, 2, 3, 4, 5]
const array2 = [6, 7, 8, 9, 10]
const array3 = [11, 12, 13, 14, 15]

// console.log(array1.concat(array2,array3))

//join---------------------array to string
const arrayJoin = ['sathish', 'kumar', 'dayalan']
const joined = arrayJoin.join('')
// console.log(joined)

// indexof----------------------this function identify the indexof element.
const index = [1, 2, 3, 4, 5]

// console.log(index.indexOf(1))

//find index------------------------------------. If the element is found, it returns the index of that element; otherwise, it returns -1.

const sj = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(sj.findIndex((num)=>num>1))

//flat------------------------------------flat the all child array in single array.
const j = [1, 2, 3, [4, 5, 6], 7, 8, 9, [0, 1, 2, [2, 4, 5, [55, 66, 44]]]]
// console.log(j.flat(3))

//flatmap -----------------------------------method is used in many programming languages, including JavaScript, to both map and flatten an array simultaneously. 
//It applies a function to each element in the array and then flattens the result into a new array.
const fm = [2, 3, 4]
// console.log(fm.flatMap((num) => [num, num * 3]))

//includes------------------------------------it will check whethere the element is present inside the  array or not.(ans-boolean type) 
const arrayIncludes = ['sathish', 'kumar', 'dayalan', 'sakthi']
// console.log(arrayIncludes.includes('sakthi'))

//some------------it will check the array element based on condition.(ans-boolean type). 
// OR - condition
const so = [11, 12, 13, 14, 15]
// console.log(so.every((e)=>e>=11))//every method -it will check the all array element based on condition. AND condition

//reduce -----------------------

const hr = [10 + 20 + 30 + 40 + 50 + 60]
// console.log(hr.reduce((pre,cur)=>pre+cur,0))

//join -------------------------------
const num = ["sathish", "kumar", "dayalan"]
// console.log(num.join().split(','))

//foreach -----------------------------

const r = [1, 2, 3, 4, 5]
const s = []
r.forEach((e) => {
    s.push(e * 2)
})
// console.log(s) -------it also similar to map function but it will give undefined.

//for loop
const loop = [1, 2, 3, 4, 5, 6]
let empty = []
for (i = 0; i < loop.length; i++) {
    empty.push(loop[i] * 2)
}

// console.log(empty)


// ------------------------------------------------------------------------------------------

// const countElement = document.getElementById('count')
// const plusButton = document.getElementById('plus')
// const minusButton = document.getElementById('minus')

// let count = 0;

// function updateCount() {
//     countElement.textContent = count;
// }

// plusButton.addEventListener('click', function () {
//     count++;
//     updateCount();
// })

// minusButton.addEventListener('click', function () {
//     if (count > 0) {
//         count--;
//         updateCount()
//     }

// })


// const toggleButton = document.getElementById('toggleButton')
// const hideElement = document.getElementById('hide')

// toggleButton.addEventListener('click',function(){
//     if(hideElement.style.display==='none'){
//         hideElement.style.display='block'
//         toggleButton.textContent='hide'
//     }else{
//         hideElement.style.display='none'
//         toggleButton.textContent = 'show'
//     }
// })

// (function(){
//     "use strict"

//     window.addEventListener(
//         "load",function(){

//             let forms = document.getElementsByTagName('form')
//             let validation = Array.prototype.filter.call(forms,function(form){
//                 form.addEventListener('submit',function(event){
//                     if(form.checkValidity()===false){
//                         event.preventDefault();
//                         event.stopPropagation();
//                     }
//                     form.classList.add("was-validated")
//                 },false)
//             })
//         },false
//     )
// })();