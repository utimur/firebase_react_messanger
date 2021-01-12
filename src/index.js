import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
        apiKey: "AIzaSyBr1JWix2dc-VoBCB7fHVSGS9KUL0X0Wis",
        authDomain: "chat-react-fd366.firebaseapp.com",
        projectId: "chat-react-fd366",
        storageBucket: "chat-react-fd366.appspot.com",
        messagingSenderId: "1097930185910",
        appId: "1:1097930185910:web:206a1158ff7075b6381a17",
        measurementId: "G-Q9W58YQ4XL"
    }
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

