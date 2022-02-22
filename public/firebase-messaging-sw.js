// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyDeZBlCzW4hxc48hfFbk8-udUtH1KEPnzk",
  authDomain: "n0f1f7.firebaseapp.com",
  projectId: "n0f1f7",
  storageBucket: "n0f1f7.appspot.com",
  messagingSenderId: "1087397878707",
  appId: "1:1087397878707:web:070e20202b13a6d2d249c6",
  measurementId: "G-N1VTCZF7BX",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
