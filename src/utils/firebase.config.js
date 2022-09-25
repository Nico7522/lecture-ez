import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp ({

    apiKey: "AIzaSyDxf5qWvj-Xu4s-m2ZVMKBexCD7rV04lzg",
    authDomain: "lecture-ez.firebaseapp.com",
    projectId: "lecture-ez",
    storageBucket: "lecture-ez.appspot.com",
    messagingSenderId: "864504437159",
    appId: "1:864504437159:web:517b232431921944983e82"
});

export const auth = app.auth();
export default app;