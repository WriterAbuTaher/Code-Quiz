import React, { useState } from 'react';
import "./Calculate.css"
import Swal from 'sweetalert2'

const Calculate = (props) => {

    const [minute, setminute] = useState(0)
    const break5m = (time) => setminute(time);
    const break10m = (time) => setminute(time);
    const break15m = (time) => setminute(time);
    const break20m = (time) => setminute(time);
    const break30m = (time) => setminute(time);

    const showToast = () => {
        Swal.fire(
            'Good job!',
            'You done with your activity',
            'success'
        )
    }

    const { study } = props

    // console.log(study);

    let TotalTime = 0;
    for (const studytime of study) {
        TotalTime += studytime.time;
    }

    return (
        <div className='container text-white calculate'>
            {/* student info */}
            <div className="d-md-flex gap-2 pt-4">
                <div className="student">
                    <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/yi0wou0N5EsZGDfVejLKR/8e9138369ae3fce8fc552a19db56ffed/Mid_Year_US_Brand_Campaign-headshot_2.png?auto=format%2Ccompress&dpr=1&w=202&h=202&q=40" alt="" />
                </div>

                <div>
                    <h5>Card title</h5>
                    <p><small>Dhaka, Bangladesh</small></p>
                </div>
            </div>

            {/* student more info */}
            <div className='d-md-flex my-4 justify-content-evenly text-center bg-primary p-2 rounded'>
                <div>
                    <h3>75 <small>kg</small></h3>
                    <p>Weight</p>
                </div>
                <div>
                    <h3>6.5</h3>
                    <p>Height</p>
                </div>
                <div>
                    <h3>25 <small>yrs</small></h3>
                    <p>Age</p>
                </div>
            </div>

            {/* add a break */}
            <h4>Take a Break</h4>
            <div className='bg-light p-3 rounded d-flex justify-content-around align-items-center my-3'>
                <button onClick={() => break5m(5)} className='rounded-pill bg-white p-2 mx-1 br-button'>5m</button>
                <button onClick={() => break10m(10)} className='rounded-pill bg-white p-2 mx-1'>10m</button>
                <button onClick={() => break15m(15)} className='rounded-pill bg-white p-2 mx-1'>15m</button>
                <button onClick={() => break20m(20)} className='rounded-pill bg-white p-2 mx-1'>20m</button>
                <button onClick={() => break30m(30)} className='rounded-pill bg-white p-2 mx-1'>30m</button>
            </div>

            {/* study time */}
            <div>
                <div className='bg-light p-3 rounded d-flex justify-content-between align-items-center my-3 text-black'>
                    <h5>Study Time</h5>
                    <h5>{TotalTime} Minute</h5>
                </div>
            </div>

            {/* break time */}
            <div>
                <div className='bg-light p-3 rounded d-flex justify-content-between align-items-center my-3 text-black'>
                    <h5>Break Time</h5>
                    <h5>{minute} Minute</h5>
                </div>
            </div>

            <button onClick={() => showToast()} className='btn btn-primary w-100 p-2'>Activity Complete</button>

        </div>
    );
};

export default Calculate;