// const person = {
//     name: "James",
//     age: 23,
//     location: {
//         city: 'Tonbridge',
//         county: 'Kent',
//         temp: 3
//     }
// };
//
// const {name: firstName = "anonymous", age} = person;
// const {city, temp: temperature} = person.location;
//
// console.log(`${firstName} is ${age}, and it is ${temperature} degrees celcius in their hometown of ${city}`);
//
// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         // name: "Penguin"
//     }
// };
//
// const {title, author} = book;
// const {name: publisherName = "Self Published" } = book.publisher;
//
// console.log(publisherName);
const address = ['32 Ashden Walk', "Tonbridge", "Kent", "TN103RL"];

//adding a comma at the start of array skips to index 1
const [,city ="Fulham", county="London"] = address;

console.log(`You are in ${city}, ${county}`);

const item = ['Coffee (ice)', "$2.20", "$2.80", "$3.20"];
const [drink, , price] = item;

console.log(`A medium ${drink} cost ${price}`);