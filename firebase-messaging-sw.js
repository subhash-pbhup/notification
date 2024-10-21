importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging.js');

const firebaseConfig = {
          apiKey: "AIzaSyAETpT7RzfSU9nhRTsX3dQDxTUOb-1cNV4",
          authDomain: "test-f8ca0.firebaseapp.com",
          projectId: "test-f8ca0",
          storageBucket: "test-f8ca0.appspot.com",
          messagingSenderId: "244259946058",
          appId: "1:244259946058:web:5748847d9a796463da70b3",
          measurementId: "G-BGR4SND4RN"
        };

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
