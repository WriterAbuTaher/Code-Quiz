import React, { useEffect, useState } from 'react';
import Calculate from '../Calculate/Calculate';
import Subject from '../Subject/Subject';
import './Subjects.css'

const Subjects = () => {

    const [subjects, setSubjects] = useState([]);
    const [study, setStudy] = useState([]);

    useEffect(() => {
        fetch('study.json')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [])

    const addToStudy = (subject) => {
        const newStudy = [...study, subject];
        setStudy(newStudy);
    }

    return (
        <div className='row'>
            <div className='container col-8 sub-container'>
                {
                    subjects.map(subject => <Subject key={subject.id}
                        subject={subject}
                        addToStudy={addToStudy}
                    ></Subject>)
                }
            </div>
            <div className='col-4 bg-success'>
                <Calculate study={study}></Calculate>
            </div>

        </div>
    );
};

export default Subjects;