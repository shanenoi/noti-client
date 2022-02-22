import firebase from 'firebase/app';
import 'firebase/messaging';

const VAPIDKEY = 'BKzwlp2fB1PYKpOeQAKX8v1e7941TJdPqUaqtcjTQeUwkuTiB3K148qhvQdhWTzN_XiMOpOiJkA63xg17ZoSYZE';
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
export const getCurrentToken = (setTokenFound) => messaging.getToken({vapidKey: VAPIDKEY})
export const getToken = (setTokenFound) => {
  return getCurrentToken().then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      document.getElementById('token').innerText = currentToken
      setTokenFound(true);
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
});
