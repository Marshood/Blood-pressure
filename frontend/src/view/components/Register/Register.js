import React, { useEffect, useState, upvotes } from 'react';
import './Register.css';
import {
    BrowserRouter as Router,
    useHistory
} from "react-router-dom"

export default function Register() {
    let history = useHistory();

    return (
        <div className='RegisterForm'>
            <div className="divh1Register">Register <br></br></div>
            <div className="RegisterBox">
                <form >
                    <div>

                        <label ><b>Username:</b></label>
                        <br></br>
                        <input type="text" id="UserName" placeholder="Enter Username" name="uname" required />
                    </div>
                    <div>
                        <label  ><b>Email:</b></label>
                        <br></br>
                        <input type="text" id="UserMail" placeholder="Enter email" name="umail" required />
                    </div>
                    <div>
                        <label  ><b>Password:</b></label>
                        <br></br>
                        <input type="password" id="Password" placeholder="Enter Password" name="psw" required />
                    </div>
                    <br></br>
                    <input className="button" type="submit" value="Register" onClick={(event) => { addUser(event) }}></input>
                    <button className="button" type="" value="Login" onClick={() => {
                        history.push('/Login')
                    }}>Login</button>

                </form>
            </div>

        </div>

    )

    async function addUser(e) {
        e.preventDefault();
        const UserName =document.getElementById("UserName").value;
        const UserMail =document.getElementById("UserMail").value;
        const Password=document.getElementById("Password").value;
        // console.log(UserName, UserMail, Password)
        await fetch("/AddUser", {
            method: "PUT",
            body: JSON.stringify({
                UserName:UserName ,
                UserMail:UserMail,
                Password:Password
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => response.json())
        .then(data => {
            console.log('SuccessRRRR:', data[0].success);
            if (data[0].success) {//true
                 
                history.push('/Login');

            }
            else {
                alert("User Exist in DB....");
             }
        })
        .catch((error) => {
            console.error('Error:', error);
        });    
    }

}
