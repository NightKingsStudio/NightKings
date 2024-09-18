import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
            import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
            import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";

            const firebaseConfig = {
                apiKey: "AIzaSyCJF2ziaPmIDnQF1sB9fx1uScw7JmRuZZU",
                authDomain: "nightkingsweb.firebaseapp.com",
                projectId: "nightkingsweb",
                storageBucket: "nightkingsweb.appspot.com",
                messagingSenderId: "100491352939",
                appId: "1:100491352939:web:880d2a1754b502ce83ca2e",
                measurementId: "G-FKZMTZX97S"
            };

            // Initialize Firebase
            const app = initializeApp(firebaseConfig);
            const analytics = getAnalytics(app); // Correctly initialize analytics