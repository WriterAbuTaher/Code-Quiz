import React, { useEffect, useState } from 'react';
import Calculate from '../Calculate/Calculate';
import Subject from '../Subject/Subject';
import './Subjects.css'

const Subjects = () => {

    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        fetch('study.json')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [])

    const addToExercise = (subject) => {
        console.log(subject);
    }

    return (
        <div className='row'>
            <div className='container col-8 sub-container'>
                {
                    subjects.map(subject => <Subject key={subject.id}
                        subject={subject}
                        addToExercise={addToExercise}
                    ></Subject>)
                }
            </div>
            <div className='col-4 bg-success'>
                <Calculate></Calculate>
            </div>

        </div>
    );
};

export default Subjects;