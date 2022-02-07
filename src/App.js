import './App.css';

function App() {
  return (
    <div className="App">
      <div className='register-form'>
        <h3>Register user</h3>
        <input placeholder='Enter email' className='input'/>
        <input placeholder='Enter password' className='input' />

        <button>Create user</button>
      </div>

      <div className='login-form'>
        <h3>Login</h3>
        <input placeholder='Enter email' className='input'/>
        <input placeholder='Enter password' className='input' />

        <button>Login</button>
      </div>

      <h4>User logged in</h4>
      <button> Sign out</button>
    </div>
  );
}

export default App;
