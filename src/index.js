import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//Arrow functions are sometimes referred to as the fat arrow.
//It's a shorter way of writing a JS function.

//So wheneer we want to add a function to another function
//we tend to use an anonymous function to make things simpler and
//easier to read.
//So for example:

var numbers = [3, 56, 2, 48, 5];

const newNumbers = numbers.map(function (x) {
  return x * x;
});
//The arrow function let's us deleted the word 'function' abo\/e.
//This 'function' keyword is replaced with '=>'.
//So function becomes  =>
//So the (x) , these are the inputs of our function
//and the bit between the {} is the body of our function.
//And the only thing that denotes that this whole thing is a function
//is that so called fat arrow.
//It will look like ( (x) = >) {body}
//There cannot be a space between the = and >
//We could do more; if we hae two input parameters, so instead of
//(x) we hae (x, y) and it reads 'return x * y', we definitely need a
//set of paranthese around them.
//But if you only hae one input, or one paramter, you can get rid of
//the parantheses. So (x) becomes x.
//Also, if you only a single line statement where you're only
//returning a single expression such as 'x * x', you can actually delete
//the return keyword and the curly braces.
//So (function (x) { return x * x; })
//Becomes  (x => x * x);
//So you end up with inline code that looks like that ^.
//Now our map function is taking each item in our numbers array and
//multiplying it by itself and then creating a new array.
//There are cons; this cleaned ersion could be really hard to understand
//for a beginner of JS.
//Especially when you hae people in your team who are more junior,
//haing code like this isn't great.
//So it depends on the situation for you you to prefer to write in
//'shortened syntax'.
//But be aware because in React map, filter, reduce is used a lot,
//people do hae a tendecy to use the arrow function etc.
//You can literally acheie things in one line.

//You can ha\/e a go at simplifying he functions below.

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })
