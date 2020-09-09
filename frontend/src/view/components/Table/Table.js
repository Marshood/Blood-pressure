import React, { useEffect, useState, upvotes } from 'react';
import './Table.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom"

export default function Login() {
    let history = useHistory();
    const [DataForTable, setTDataForTable] = useState([]);
    useEffect(() => {
        fetch("/getAllData")
            .then((res) => res.json())
            .then((data) => {
                let doc = data;
                 setTDataForTable(doc[0]);
            });
    }, []);
    return (
        <div>
            <div className='TableForm' >
                <body>
                    <div className="">
                        <br></br>
                        <select name="SelectDadMom" onChange={(e) => getNewData(e)}>
                            <option value="All">All</option>
                            <option value="Dad">Dad</option>
                            <option value="Mom">Mom</option>
                        </select>
                        <button className="button" type="" value="MainPage" onClick={() => {
                            history.push('/MainPage')
                        }}> Back</button>
                    </div>
                    <div className="TableToShow">
                        <table  className="table" >
                            <thead className="header__table">
                                <tr>
                                    <th scope="col"> Dad/Mom </th>
                                    <th scope="col"> systolic </th>
                                    <th scope="col"> diastolic </th>
                                    <th scope="col"> Heart rate </th>
                                    <th scope="col"> Oxygen saturation </th>
                                    <th scope="col"> Date </th>
                                    <th scope="col"> Time </th>
                                </tr>
                            </thead>
                            <tbody className="tbody">
                                {DataForTable.map((data, index) => (
                                    <tr key={index}>
                                        <td> {data.radio} </td>
                                        <td> {data.systolic} </td>
                                        <td> {data.diastolic} </td>
                                        <td> {data.HeartRate} </td>
                                        <td> {data.Oxygensaturation} </td>
                                        <td> {data.Date} </td>
                                        <td> {data.Time} </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>


                    </div>

                </body>
            </div>
        </div>

    );
    function getNewData(e) {
        e.preventDefault();
        var selectElement = e.target;
        var value = selectElement.value;
        fetch('/getNewDataWithFillters', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    value: value,
                 })
        })
            .then(response => response.json())
            .then(data => {
                 setTDataForTable(data[0])
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}