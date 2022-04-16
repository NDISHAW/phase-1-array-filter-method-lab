const { arrayContaining } = require("expect");

const drivers = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' },
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];
      
function matchName(drivers,string){
  return drivers.filter((drivers)=>drivers.name===string);
}
matchName(drivers,"bobby")
 
function fuzzyMatch(drivers,string){
  drivers.length=0;
 drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');
  return drivers.filter(
     (filtering) =>
       filtering.toLowerCase().indexOf(string.toLowerCase()) === 0
   );
}
console.log(fuzzyMatch(drivers,"sa"));
      
// function filter(collection, cb) {
//   const newCollection = [];

//   for (const drivers of collection) {
//     if (cb(drivers)) {
//       newCollection.push(drivers);
//     }
//   }

//   return newCollection;
// }

// const findMatching = filter(drivers, function (drivers) {
//   return drivers.name === "Bobby";
// });
// console.log(findMatching);
// drivers.filter(function (driver){
// return drivers.name === driver;

// })
// findMatching;

function findMatching(drivers,name){
  return drivers.filter(
    (filtering)=>(filtering.toLowerCase()) === name.toLowerCase()
  );
}

//findMatching(drivers,"BobbY");
//console.log(filter());



// function fuzzyMatch(source, testString) {
//   return source.filter(
//     (possibleMatch) =>
//       possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
//   );
// }
// fuzzyMatch(drivers,"bobby")