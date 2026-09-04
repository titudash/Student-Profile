import React from 'react';

function Student({ name, course, college }) {
    return (
        <div className="student-card">
            <h2>Student Name: {name}</h2>
            <p><strong>Course:</strong> {course}</p>
            <p><strong>College:</strong> {college}</p>
        </div>
    );
}

export default Student;
