//string
/*/
let username = "Edwina";
let favcolor = "brown";
let slogan ="making a difference, my life, my code";
let constance = "he said 'he does not like food' ";
console.log(`my name is` + username + `and my favorite color is ` +favcolor);
console.log(`my name is $(username) and my fav color is $(favcolor)`);

//logical operator
let passmark = 50;
let markkate = 80;
let markjes = 45;
let markdarell = 50;
console.log(passmark == markkate);//false
console.log(passmark == markjes);//false
console.log(passmark == markdarell);//true


console.log(passmark > markkate);//false
console.log(passmark > markjes);//true
console.log(passmark > markdarell);//false

console.log(passmark < markkate);//true
console.log(passmark < markjes);//false
console.log(passmark < markdarell);//true

console.log(passmark != markkate);//true
console.log(passmark != markjes);//false
console.log(passmark != markdarell);//true

//if statement
let mark = prompt("enter the number?")
if (mark >= 80) {
    console.log("A grade")
}

else if (mark >= 70 && mark < 80){
    console.log("B+ grade")
}

else if (mark >= 60 && mark < 70){
console.log("B grade")
}

else if (mark >= 55 && mark < 60){
    console.log("C+ grade")
 }
    
 else if (mark >= 50 && mark < 55){
    console.log("C grade")
}
else if (mark >= 45 && mark < 50){
    console.log("D+ grade")
}
 else if (mark >= 40 && mark < 45){
    console.log("D grade")
 }

 //if-else statement
  let age = prompt("enter your age")
 if (age >= 20){
    console.log("you can use the app")
 } else{
    if (age < 20)
    console.log("enjoy your self")
 }
 
//if...else statement
 let number = prompt("enter a number:")
    if (number > 0){
        console.log("the number is positive")
 }
 else if (number == 0){
        console.log("the number is 0")
}else{
    console.log("the number is negative")
 }

    
let number3= prompt("enter a number")
if(number3 % 2 == 0){
    console.log("number  is even")
} else{
    console.log("number is odd")
}

for(let i = 0; i<=100; i++){
    console.log(i)
}
for(let i =1; i<=5; i++){
    console.log("my name is selma")
}
for(let i = 5; i<=100; i+=5){
    console.log(i)
}
for (let i = 10; i <= 50; i++) {
    if(i % 2 != 0)
    console.log(i)
}

//comperison 
let f = 7
let g = 6
console.log(f == g)
console.log(f > g)
console.log(f < g)
console.log(f != g)
console.log(f >= g)
console.log(f <= g)
console.log(f === g)

//logical operation
let a = 5
let b = 10
let z = 4

console.log(a % 2 == 0)
console.log(b % 2 == 0)
console.log(z % 2 == 0)

//function
function greet () {
let yourName = prompt("enter your name :")
    alert("welcome dear ${your name}")
}
greet()

function grade () {
    let mark = prompt("enter your mark")
    if(mark >= 80)
    console.log("A grade")
    else if (mark >= 70 & mark < 80){
        console.log("B+ grade")
    }
     else if (mark >= 60 & mark < 70){
        console.log("B grade") 
     }
     else if (mark >= 55 & mark < 60){
        console.log("C+ grade")
     } 
    else if (mark >= 50 & mark < 55){
        console.log("C grade")
    } 
     else if (mark >= 45 & mark < 50){
        console.log("D+ grade")
     } 
    else if (mark >= 40 & mark < 45){
        console.log("D grade")
    } 

}
grade()

function add (x, y, z){
alert(x+y+z)
}
add(10,20,20)//50


function add (a,b){
alert(a+b)
}
add (2,3)//5

let gender = prompt("what is your gender").toLowerCase();
console.log(gender)
if(gender == "female"){
console.log(`yay, you are ${gender}`)
} else if (gender == "male"){
    console.log(`yay you are ${gender}`)
    console.log("yikes, we don't have information for that gender")
}

function numberBelowTen(number){
    console.log(number)
     let newnumber = number - 1
    if (newnumber > 0){
        numberBelowTen(newnumber)
    }
}
numberBelowTen(10)

//object
const besong = {
    fistName: "Besong",
    age: 38,
    maingoal: "to become a good woman in tech",
    fav_color: "pink",
    country: "Japan",
    favmeal: "rice",
    bestfriend: "Betty",
    techie: "yes",
}
console.log(besong);

const student = {
    name: "john",
    age: 20,
    marks: {
        science: 70,
        math: 75,
    }
}
 console.log(student.marks.science);

 const person = {
    name: "sam",
    age: "30",
    greet: function () {
        return("hellow").toUpperCase()
    },
 }
 console.log(`${person.greet()} ${person.name}, welcome to ${person.age}`);

 person.height = "1.67m"
console.log(person)
function factorial(number) {
    if (number === 0)
    return 1;
}else{
        return x *factorial(3 - 1);
    }
}

//Array's
let colorList=["black","red", "blue", "oskblood","pink","purple","skyblue","green","lightgreen",
"brown","coffebrown","yellow","gray","orange","voilet","white"]
let item=colorList.length
console.log(item)
console.log( colorList[item - 1]);

colorList.push("olive")
console.log(colorList)


const cars = {
    brand: 'Toyota',
    make: 'corollas',
    year: 2013,
    colors: ['black', 'white', 'green'],
    slogan: function (){
        return("Drive Responsibly")
    }
}
console.log(`${cars.slogan ()} in a white ${cars.make}`)
cars.colors.push('red','blue')
console.log(cars.colors)
cars.wheeldrive='4wheel'
console.log(cars)

let pokemon = {
    abilities:[
    {
        ability:{name:"limbe"},
        is_hidden:false,
        slot:1,
    },
    {
        ability:{
            name:"imposter",
        },
    },
],
base_experience:101,
height:3,
id:132,
moves:[
    {
        move:{name:"transform"},
    },
],
name:"ditto",
weight:40,
};

console.log(`my name is ${pokemon.name} i weigh ${pokemon.weight} pounds. i ${pokemon.moves[0].move.name}
when i move becouse i am ${pokemon.abilities[0].ability.name} and an ${pokemon.abilities [1].ability.name}`);

//arrays
const groceries =['milk','eggs']
groceries.unshift('sugar')
console.log(groceries)

const ingredients = ['maggi', 'red oil', 'canda', 'meat', 'sault', 'waterleaf','crayfish']
ingredients.push('snails')
console.log(ingredients)
 ingredients.unshift('eru', 'dry fish')
 console.log(ingredients)
 ingredients[11]='perpper';
 console.log(ingredients)
console.log(ingredients.pop())
console.log(ingredients)
ingredients.splice(8.3)
console.log(ingredients)

const data = [[1,2,3], [1,3,4],[4,5,6], {new: 'carine'}]
console.log(data[3].new)
/*/
let studentsData = [['jack', 24],['sara', 23],]
studentsData.push(["kate", 30],[60, true]);
console.log(studentsData)
studentsData[1] = (["hyzel", 0]);
studentsData[1][1] = 2
console.log(studentsData)
