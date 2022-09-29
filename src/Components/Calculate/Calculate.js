import React from 'react';
import "./Calculate.css"

const Calculate = () => {
    return (
        <div className='container text-white'>
            {/* student info */}
            <div className="d-md-flex gap-2 mt-4">
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
                <button className='rounded-pill bg-white p-2 mx-1'></button>
                <button className='rounded-pill bg-white p-2 mx-1'></button>
                <button className='rounded-pill bg-white p-2 mx-1'></button>
                <button className='rounded-pill bg-white p-2 mx-1'></button>
                <button className='rounded-pill bg-white p-2 mx-1'></button>
            </div>

            <div>
                <h4></h4>
                <div className='bg-light p-3 rounded d-flex justify-content-between align-items-center my-3'>

                </div>
            </div>

        </div>
    );
};

export default Calculate;