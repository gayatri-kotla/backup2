import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
function App() {
  const [userName, setUserName] = useState('');
  const [passWord, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loginLogs, setLoginLogs] = useState([]);
  function handleSubmit(event) {
    event.preventDefault();
    console.log("name ", userName);
    console.log("pwd ", passWord);


    axios.post("http://localhost:3000/login", { userName, passWord }).then((res) => {

      console.log('response from api ', res);
      setMessage("login successful");

    }).catch(err => console.log(err));

    axios.get("http://localhost:3000/logins").then((req, res) => {

      setLoginLogs([...res.data]);
      console.log("logged users are: ", loginLogs);
    }).catch(err => console.log(err));

  }



  useEffect(() => {




  }, [handleSubmit]);




  return (
      <form onSubmit={handleSubmit} className='container'>
        <div className='innercontainer'>
          <div className='headings'>
            <h1>Log in</h1>
            <h5>to start learning</h5>
          </div>
          <div className='fields'>
            <label>User Name:</label>
            <input type='text' id="fieldbox" name='userName' onChange={(e) => setUserName(e.currentTarget.value)} />

          </div>
          <div className='fields'>
            <label>Password:</label>
            <input id="fieldbox" type='text' name='passWord' onChange={(e) => setPassword(e.currentTarget.value)} />

          </div>
         <div className='fields'>
         <input id='btn' type='submit' value='log in' />
         </div>

        </div>
      </form>
  )
}

export default App
