import { useState } from 'react';
import { 
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import './App.css';
import { auth } from './firebaseConfig';

function App() {
  const [resgiterEmail, setResgiterEmail] = useState('');
  const [registerPassword , setRegisterPassword] = useState('');
  const [loginrEmail, setLoginEmail] = useState('');
  const [loginPassword , setLoginPassword] = useState('');
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, resgiterEmail, registerPassword);
      console.log(user);

    } catch (error) {
      console.log(error.message);
    }
  }

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginrEmail, loginPassword);
      console.log(user);

    } catch (error) {
      console.log(error.message);
    }
  }

  const logout = async () => {
    await signOut(auth)
  }

  const handleOnChangeRegisterEmail = (e) => {
    setResgiterEmail(e.target.value);
  }

  const handleOnChangeRegisterPassword = (e) => {
    setRegisterPassword(e.target.value);
  }

  const handleOnChangeLoginEmail = (e) => {
    setLoginEmail(e.target.value);
  }

  const handleOnChangeLoginPassword = (e) => {
    setLoginPassword(e.target.value);
  }

  return (
    <div className="App">
      <div className='register-form'>
        <h3>Register user</h3>
        <input placeholder='Enter email' className='input'
          type='email' 
          onChange={(e) => handleOnChangeRegisterEmail(e)}
        />
        <input placeholder='Enter password' className='input' 
          type='password'
          onChange={(e) => handleOnChangeRegisterPassword(e)}
        />

        <button onClick={register}>Create user</button>
      </div>

      <div className='login-form'>
        <h3>Login</h3>
        <input placeholder='Enter email' className='input'
          type='email' 
          onChange={(e) => handleOnChangeLoginEmail(e)}
        />
        <input placeholder='Enter password' className='input' 
          type='password'
          onChange={(e) => handleOnChangeLoginPassword(e)}
        />

        <button onClick={login}>Login</button>
      </div>

      <h4>User logged in</h4>
      {user && user.email}

      <button onClick={logout}> Sign out</button>
    </div>
  );
}

export default App;
