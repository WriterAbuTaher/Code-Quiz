import React from 'react';
import "./Subject.css"

const Subject = (props) => {
    // console.log(props);
    const { sub, img, info, time } = props.subject;
    return (
        <div className='sub-card'>
            <div className='sub-info'>
                <img src={img} alt="" />
                <h1>{sub}</h1>
                <p>{info}</p>
                <p><b>{time} Minute</b></p>
            </div>
            <button>Add to Wishlist</button>
        </div>
    );
};

export default Subject;