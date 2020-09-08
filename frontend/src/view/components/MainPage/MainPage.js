import React, { useEffect, useState, upvotes } from 'react';
import './MainPage.css';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom"


export default function Login() {
    let history = useHistory();
    const [testUseEffect, setTestUseEffect] = useState();
    useEffect(() => {
        // alert("test state useeffect")

    }, [testUseEffect]);
    return (
        <body>
            <div className='loginForm'>
                <div className="divh1">Blood pressure<br></br></div>
                <div className="LoginBox">
                    <form onSubmit={(e) => SaveToDB(e)}>
                        <div>
                            <input type="radio" id="male" name="gender" value="Dad" required />
                            <label htmlFor="male">Dad</label>
                            <input type="radio" id="female" name="gender" value="Mom" required />
                            <label htmlFor="female">Mom</label>
                        </div>
                        <div>
                            <label htmlFor="uname"><b>systolic:</b></label>
                            <br></br>
                            <input type="number" id="systolic" placeholder="systolic" name="systolic" required />
                        </div>
                        <div>
                            <label htmlFor="psw"><b>diastolic:</b></label>
                            <br></br>
                            <input type="number" id="diastolic" placeholder="diastolic" name="diastolic" required />
                        </div>
                        <div>
                            <label htmlFor="psw"><b>Heart rate:</b></label>
                            <br></br>
                            <input type="number" id="HeartRate" placeholder="Heart rate" name="HeartRate" required />
                        </div>
                        <br></br>
                        <input className="button" type="submit" value="Send Result"></input>
                        <br></br>
                        <br></br>
                        <button className="button" type="" value="Results" onClick={() => {
                            history.push('/Table')
                        }}> Results</button>
                    </form>
                </div>


            </div>

        </body>
    )

    function SaveToDB(e) {
        e.preventDefault();
        console.log("SaveToDB",);
        let systolic = e.target.systolic.value;
        let diastolic = e.target.diastolic.value;
        let HeartRate = e.target.HeartRate.value;
        let radio = e.target.gender.value;
        console.log(systolic, diastolic, HeartRate, "radio ", radio)
        fetch('/addBloodPressure', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    systolic: systolic,
                    diastolic: diastolic,
                    HeartRate: HeartRate,
                    radio: radio
                })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data[0].success);
                if (data[0].success) {//true
                    alert("hola")
                }
                else {
                    alert("aa")
 
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }



}