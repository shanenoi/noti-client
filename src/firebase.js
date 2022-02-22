import firebase from 'firebase/app';
import 'firebase/messaging';

var firebaseConfig = {
  apiKey: "AIzaSyDeZBlCzW4hxc48hfFbk8-udUtH1KEPnzk",
  authDomain: "n0f1f7.firebaseapp.com",
  projectId: "n0f1f7",
  storageBucket: "n0f1f7.appspot.com",
  messagingSenderId: "1087397878707",
  appId: "1:1087397878707:web:070e20202b13a6d2d249c6",
  measurementId: "G-N1VTCZF7BX"
};

firebase.initializeApp(firebaseConfig);
export const messaging = firebase.messaging();

messaging.getToken({vapidKey: 'BKzwlp2fB1PYKpOeQAKX8v1e7941TJdPqUaqtcjTQeUwkuTiB3K148qhvQdhWTzN_XiMOpOiJkA63xg17ZoSYZE'}).then((currentToken) => {
    console.log(`---> ${currentToken}`);
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      // shows on the UI that permission is required 
    }
  }).catch(err => console.log(`%% ${err} %%`))

export const getToken = (setTokenFound) => {
  return messaging.getToken({vapidKey: 'BKzwlp2fB1PYKpOeQAKX8v1e7941TJdPqUaqtcjTQeUwkuTiB3K148qhvQdhWTzN_XiMOpOiJkA63xg17ZoSYZE'}).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
});
