import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
getDatabase,
ref,
set,
push,
update,
onValue,
onChildAdded
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
apiKey: "AIzaSyDaMvAQ6O5yc_LTqZ0cdatwFDinHtIkSdI",
authDomain: "teckyaaryan.firebaseapp.com",
databaseURL: "https://teckyaaryan-default-rtdb.firebaseio.com",
projectId: "teckyaaryan",
storageBucket: "teckyaaryan.appspot.com",
messagingSenderId: "555366075402",
appId: "1:555366075402:web:a7557c06301f5da01263f3",
measurementId: "G-VPQ922NC60"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {db,ref,set,push,update,onValue,onChildAdded}
