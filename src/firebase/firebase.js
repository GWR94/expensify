import * as firebase from 'firebase';

var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID
  };
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { googleAuthProvider, firebase, database as default }

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);        
//     })
//     .catch((e) => {
//         console.log('Failed to get data', e);
//     });

// Get data multiple times by using on
// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     }, (e) => {
//         console.log('Error with data fetching');
//     });

// // Event fires when child element is removed from database
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // Even fires when child element is changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// Push automatically generates ID which can be used for reference
// database.ref('expenses').push({
//     description: 'Rent',
//     amount: 12500,
//     note: '',
//     createdAt: 235423758235
// });

// database.ref('expenses').push({
//     description: '',
//     amount: 12500,
//     note: '',
//     createdAt: 235423758235
// });

// database.ref('expenses').push({
//     description: 'Phone Bill',
//     amount: 12500,
//     note: '',
//     createdAt: 235423758235
// });

//Get data a single time using once
// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('error:', e);
//     });

//Get data multiple times by using on
// const onValueChange = database.ref()
//     .on('value', (snapshot) => {
//         const values = snapshot.val();
//         console.log(`${values.name} is a ${values.job.title} at ${values.job.company}!`);
//     }, (e) => {
//         console.log('Error with data fetching');
//     });

// setTimeout(() => {
//     database.ref('name').set('Bill');
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// database.ref().set({
//     name: 'James Gower',
//     age: 23,
//     stressLevel: 6,
//     job: {
//         title: "Software Developer",
//         company: "Google"   
//     },
//     location: {
//         city: 'Tonbridge',
//         county: 'Kent'
//     },
// }).then(() => {
//     console.log('Data saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref('attributes').set({
//     height: 160,
//     weight: 120
// });


// database.ref()
//     .update({
//         stressLevel: 9,
//         'job/company': "Amazon",
//         'location/city': "London"
//     }).then(() => {
//         console.log("Updated job & stress");
//     }).catch((e) => {
//         console.log("Failed to updated!", e);
//     });

// console.log('I made a request to change the data');