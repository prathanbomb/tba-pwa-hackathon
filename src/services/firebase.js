import firebase from 'firebase';

var config = {
 apiKey: "AIzaSyAdp49wOpCYozfcsXwr2AEU0FINfGbxonQ",
    authDomain: "tba-pwa-hackathon.firebaseapp.com",
    databaseURL: "https://tba-pwa-hackathon.firebaseio.com",
    projectId: "tba-pwa-hackathon",
    storageBucket: "tba-pwa-hackathon.appspot.com",
    messagingSenderId: "84542174201"
};
firebase.initializeApp(config);

export default {
 database: firebase.database()
}