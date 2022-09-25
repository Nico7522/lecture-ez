import React from 'react';
import './style/style.css';
import Connection from "./components/Connection"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./utils/firebase.config";
import { useState } from 'react';
import BG from "./images/titre.png"
import Lecture from './components/Lecture';
function App() {

  const [user, setUser] = useState(null);

 onAuthStateChanged(auth, (utilisateur) => {
  setUser(utilisateur);
 })

 const Logout =async() => {
  await signOut(auth);
}

  return (
    <div >
      <h1><img src={BG} alt="" /></h1>
      
      { user ?  
        
        <div className='all-pages'>
          <button onClick={() => Logout()} className='logout-bouton'>Déconnection</button> 
          <Lecture />
        </div>
        
      
      : <Connection />};
    </div>
  );
};

export default App;
