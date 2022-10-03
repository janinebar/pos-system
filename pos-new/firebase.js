// // Import the functions you need from the SDKs you need
// // https://firebase.google.com/docs/web/setup#available-libraries
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
// import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js";


// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // REPLACE WITH ENV
// const firebaseConfig = {
// apiKey: "AIzaSyBTrkvtjmgh4whP4ToAf2lYJaWKczjg3Sc",
// authDomain: "anthos-edge-pos.firebaseapp.com",
// projectId: "anthos-edge-pos",
// storageBucket: "anthos-edge-pos.appspot.com",
// messagingSenderId: "347869596319",
// appId: "1:347869596319:web:a818cbc9f60bd24fd670aa",
// measurementId: "G-5BSWVWXQ0P"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Read data from Firestore
// const querySnapshot = await getDocs(collection(db, "orders"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

// // Add simple order to Firestore
// // Add a second document with a generated ID.
// // try {
// //   const docRef = await addDoc(collection(db, "orders"), {
// //     items: "Alan",
// //     paidFor: true,
// //     totalPrice: 5,
// //   });

// //   console.log("Document written with ID: ", docRef.id);
// // } catch (e) {
// //   console.error("Error adding document: ", e);
// // }