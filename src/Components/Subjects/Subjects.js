import React, { useEffect, useState } from 'react';
import Subject from '../Subject/Subject';
import './Subjects.css'

const Subjects = () => {

    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        fetch('study.json')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [])

    return (
        <div className='study-container'>
            <div className='sub-container'>
                {
                    subjects.map(subject => <Subject key={subject.id} subject={subject}></Subject>)
                }
            </div>
            <div className='calculate-container'>

            </div>

        </div>
    );
};

export default Subjects;