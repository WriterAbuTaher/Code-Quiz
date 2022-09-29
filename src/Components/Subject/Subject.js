import React from 'react';
import "./Subject.css"

const Subject = (props) => {

    // console.log(props);

    const { addToStudy, subject } = props

    const { sub, img, info, time } = subject;

    return (
        <div className='card m-3'>
            <img className='card-img-top' src={img} alt="" />
            <div className='card-body'>
                <h3 className='card-title'>{sub}</h3>
                <p className='card-text text-secondary'>{info}</p>
                <p><b>{time} Minute</b></p>
                <button onClick={() => addToStudy(subject)} className='btn btn-success'>Add to Wishlist</button>
            </div>
        </div>
    );
};

export default Subject;