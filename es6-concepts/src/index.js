//0. Named imports and default imports
import defaultExportFn, { namedExportFn} from "./App";

defaultExportFn();
namedExportFn();
//------------------------------------------------------------------------
//1. Arrow Functions
const square = (number) => {
  return number * number;
}
console.log(square(5));
//------------------------------------------------------------------------
//2. Map to iterate
const colors = ['red','yellow','green'];
console.log(colors.map(color => color));
//------------------------------------------------------------------------
//3. String template or String interpolation
console.log(colors.map(color => `The color is ${color}`));
//------------------------------------------------------------------------
//4. Filter predicate and arrow function
const jobs = [
  {id:1, isActive:true, isNew: true},
  {id:2, isActive:true, isNew:false},
  {id:3, isActive:false, isNew:false},
  {id:4, isActive:true, isNew:false},
  {id:5, isActive:false, isNew:false}
]

//Now filter the array and iterate through each object in the array

const activeJobs = jobs.filter(job => job.isActive)

console.log("Active jobs : " + activeJobs.map(job => job.id));

console.log("Inactive Jobs: " + jobs.filter(job => !job.isActive).map(job => job.id));

console.log("Active and new jobs: " + 
jobs.filter(job => {return job.isActive && job.isNew}).map(job => job.id));
//------------------------------------------------------------------------
//5. Object Destructuring
const address = {
  street: 'haskell',
  city: 'frisco',
  country:'usa'
}
//We can do below code instead of this
const street1 = address.street;
const city1 = address.city;
const country1 = address.country;

//Use this instead in one single line
const {street, city, country} = address;

//If we want to assign just one variable with a different name

const {street:st} = address;
console.log(`Street: ${st}`);
//------------------------------------------------------------------------
//6. Spread operator
const first = [1,2,3];
const second = [4,5,6];

const combined = [...first, ...second]; //...first represents all the elements of the array
const combined2 = [...first,'9',...second,'19']; //Can add new elements in between
const clone = [...first];

console.log("combined: " + combined);
console.log("combined2: " + combined2);
console.log("clone: " + clone);

const nameObj = {firstName: 'Divya',
lastName: 'Priya'};

//How to use spread operator for Objects
const job = {title: 'vetti', location: 'home'};

//This will combine the properties of both the objects
const nameJob = {...nameObj, ...job}

//This will combine the properties of both objects and add a new property called hobby
const nameJobHobby = {...nameObj, ...job, hobby: 'Sleeping'}
//------------------------------------------------------------------------
//7. Print properties of an object using Object.keys
const printObj = (objToPrint) => {
  console.log(Object.keys(objToPrint).map(key => `${key}:${objToPrint[key]}`));
}
console.log('nameJob: ' + printObj(nameJob));
console.log('nameJobHobby: ' + printObj(nameJobHobby));









