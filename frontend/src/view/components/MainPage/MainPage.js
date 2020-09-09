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
    const [systolic,setSystolic]=useState();
    useEffect(() => {
 
    }, [testUseEffect]);
    return (
        <body className="body">
            <div className='MainPageForm'>
                <div className="divh1">Blood pressure<br></br></div>
                <div className="LoginBox">
                    <form onSubmit={(e) => SaveToDB(e)}>
                        <div>
                            <div>
                            <input type="radio" id="male" name="gender" value="Dad" required />
                            <label htmlFor="male">حنا</label>
                            </div>
                            <div>
                            <input type="radio" id="female" name="gender" value="Mom" required />
                            <label htmlFor="female">مريم</label>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="uname"><b>الضغط العالي</b></label>
                            <br></br>
                            <input type="number" id="systolic" placeholder="systolic" name="systolic"  value={systolic} required />
                        </div>
                        <div>
                            <label htmlFor="psw"><b>الضغط الواطي</b></label>
                            <br></br>
                            <input type="number" id="diastolic" placeholder="diastolic" name="diastolic"  value={systolic}  required />
                        </div>
                        <div>
                            <label htmlFor="psw"><b>دقات القلب</b></label>
                            <br></br>
                            <input type="number" id="HeartRate" placeholder="Heart rate" name="HeartRate"  value={systolic}  required />
                        </div>
                        <div>
                            <label htmlFor="psw"><b>نسبه الأكسجين </b></label>
                            <br></br>
                            <input type="number" id="Oxygensaturation " placeholder="Oxygensaturation" name="Oxygensaturation"  value={systolic}  required />
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
         let systolic = e.target.systolic.value;
        let diastolic = e.target.diastolic.value;
        let HeartRate = e.target.HeartRate.value;
        let radio = e.target.gender.value;
        let Oxygensaturation=e.target.Oxygensaturation.value;
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
                    radio: radio,
                    Oxygensaturation:Oxygensaturation
                })
        })
            .then(response => response.json())
            .then(data => {
                 setSystolic('');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }



}