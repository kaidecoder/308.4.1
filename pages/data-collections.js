//Part 1:  Refactoring Old Code

let csvString =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

let loopedCsvString = "";
for (characters of csvString) {
  loopedCsvString += characters;
}
//Destructure the string values into rows
const [row1, row2, row3, row4, row5] = loopedCsvString
  .toLowerCase()
  .split("\n");

//Destructure the rows into cells
let [ID, Name, Occupation, Age] = row1.split(",");
let [ID2, Name2, Occupation2, Age2] = row2.split(",");
let [ID3, Name3, Occupation3, Age3] = row3.split(",");
let [ID4, Name4, Occupation4, Age4] = row4.split(",");
let [ID5, Name5, Occupation5, Age5] = row5.split(",");

//Create a Person Constructor
function Person(Id, Name, Occupation, Age) {
  (this.ID = Id),
    (this.Name = Name),
    (this.Occupation = Occupation),
    (this.Age = Age);
}

//Create some Person objects
const person1 = new Person(ID2, Name2, Occupation2, Age2);
const person2 = new Person(ID3, Name3, Occupation3, Age3);
const person3 = new Person(ID4, Name4, Occupation4, Age4);
const person4 = new Person(ID5, Name5, Occupation5, Age5);
console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);

//******************************************************* */
//Part 2: Expanding Functionality

let csvArray = [
  row1.split(","),
  row2.split(","),
  row3.split(","),
  row4.split(","),
  row5.split(","),
];
console.log("csvArray\n", csvArray);

//****************************************************** */
//Part 3:  Transforming Data

const obj1 = {};
for (const key in csvArray) {
  obj1[csvArray[0][0]] = csvArray[1][0];
  obj1[csvArray[0][1]] = csvArray[1][1];
  obj1[csvArray[0][2]] = csvArray[1][2];
  obj1[csvArray[0][3]] = csvArray[1][3];
}
const obj2 = {};
for (const key in csvArray) {
  obj2[csvArray[0][0]] = csvArray[2][0];
  obj2[csvArray[0][1]] = csvArray[2][1];
  obj2[csvArray[0][2]] = csvArray[2][2];
  obj2[csvArray[0][3]] = csvArray[2][3];
}
const obj3 = {};
for (const key in csvArray) {
  obj3[csvArray[0][0]] = csvArray[3][0];
  obj3[csvArray[0][1]] = csvArray[3][1];
  obj3[csvArray[0][2]] = csvArray[3][2];
  obj3[csvArray[0][3]] = csvArray[3][3];
}
const obj4 = {};
for (const key in csvArray) {
  obj4[csvArray[0][0]] = csvArray[4][0];
  obj4[csvArray[0][1]] = csvArray[4][1];
  obj4[csvArray[0][2]] = csvArray[4][2];
  obj4[csvArray[0][3]] = csvArray[4][3];
}

let bigCsvArray = [obj1, obj2, obj3, obj4];
console.log("bigCsvArray\n", bigCsvArray);

//************************************************ */
//Part 4:  Sorting and Manipulating Data

let sortedArray = [
  obj1,
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  obj2,
  obj3,
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];
console.log("sortedArray", sortedArray);

let ageSum = 0;
sortedArray.forEach((item) => {
  ageSum += Number(item.age);
});
console.log("Sum of the ages: \n", ageSum);

//Average age of the group
const avgAge = Math.round(ageSum / sortedArray.length);
console.log("Average age of the group:  ", avgAge);

//**************************************** */
//Part 5 - Transform the array back into csv format

let csvStr;
let headerArray = row1.toLowerCase().split(",");
let newArray = [];
sortedArray.forEach((item) => {
  csvStr = "";
  for (c in item) {
    csvStr += item[c] + ",";
  }
});

console.log("The CSV String:\n",csvString);
