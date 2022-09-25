import React from 'react';
import { useRef } from 'react';
import { auth } from "../utils/firebase.config";
import { signInWithEmailAndPassword } from 'firebase/auth';
import '../style/style.css';

const Connection = () => {

    const Email = useRef();
    const Password = useRef();

    const tryLogin = async (e) => {
        e.preventDefault();

        try {
            
            const userConnect = await signInWithEmailAndPassword(auth, Email.current.value, Password.current.value);
            


        } catch (error) {
           
            console.log(error.message);
        }

    }
    return (
        <div className="login-container">
        <div className="login">
            <form className='form-login' onSubmit={e => tryLogin(e)}>
            <h3>CONNECTION</h3>
                <input type="email" placeholder='Email' required ref={Email} />
                <input type="password" placeholder='Mot de passe' required ref={Password} />
                <input type="submit" value="Se connecter" />
            </form>
        </div>
     </div>
    );
};

export default Connection;