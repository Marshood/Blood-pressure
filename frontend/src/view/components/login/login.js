import React, { useEffect, useState, upvotes } from 'react';
import './login.css';
import Register from '../Register/Register';
import MainPage from '../MainPage/MainPage';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom"

 
export default function Login() {
    const [isTest, setIsTest] = useState(false);
    let history = useHistory();
     const [testUseEffect,setTestUseEffect]=useState();
    useEffect(() => {
        // alert("test state useeffect")
       
      }, [testUseEffect]);
    return (
        <body >
            <div className='loginForm'>
                <div className="divh1">LogIn<br></br></div>
                <div className="LoginBox">
                    <form onSubmit={(e) => checkUser(e, isTest, setIsTest)}>
                        <div>
                            <label for="uname"><b>Username:</b></label>
                            <br></br>
                            <input type="text" id="Username" placeholder="Enter Username" name="uname" onChange={ChangeState} required />
                        </div>
                        <div>
                            <label for="psw"><b>Password:</b></label>
                            <br></br>
                            <input type="password" id="Password" placeholder="Enter Password" name="psw" onChange={ChangeState} required />
                        </div>
                        <br></br>
                        <input className="button" type="submit" value="Login"></input>
                        <button className="button" type="" value="Register" onClick={() => {
                            history.push('/Register')
                        }}> Register</button>
                    </form>
                </div>
                {
                    isTest && <div className="AlertBox">
                        Error to login try again...
                                        </div>
                }
            </div>

        </body>
    )
    function ChangeState() {
        setIsTest(false);
     }
    function checkUser(e, isTest, setIsTest) {
        e.preventDefault();
        console.log("isTest",isTest);
        let Username = e.target.uname.value;
        let Password = e.target.psw.value;
        fetch('/checkUserExist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    Username: Username,
                    Password: Password
                })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data[0].success);
                if (data[0].success) {//true
                    localStorage.setItem("UserName", Username);
                    localStorage.setItem("ID", data[1].doc[0]._id);
                    setIsTest(false);
                    // history.push('/Register');
                     history.push('/MainPage');
                }
                else {
                     setIsTest(true);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }



}





