importScripts('https://www.gstatic.com/firebasejs/3.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.4.0/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyAWIc20EP_h1ALQmNYiUmyn-SF5q30zm90",
    authDomain: "watchtower-48dac.firebaseapp.com",
    databaseURL: "https://watchtower-48dac.firebaseio.com",
    projectId: "watchtower-48dac",
    storageBucket: "",
    messagingSenderId: "880783848352"
  };
  firebase.initializeApp(config);
  const messaging = firebase.messaging();