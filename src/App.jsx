import { useState } from 'react';
import Student from './Student';

function App() {
    const [students, setStudents] = useState([
        { name: 'Alice Smith', course: 'B.Tech CSE', college: 'ABC College' },
        { name: 'Bob Johnson', course: 'BCA', college: 'XYZ University' }
    ]);
    const [formData, setFormData] = useState({ name: '', course: '', college: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleAddStudent = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.course || !formData.college) {
            setError('Please fill out all fields.');
            return;
        }
        setStudents([...students, formData]);
        setFormData({ name: '', course: '', college: '' });
    };

    return (
        <div className="app-container">
            <header className="header">
                <h1>Student Profile</h1>
                <p>React Component and Props Practical</p>
            </header>

            <main className="main-content">
                <form className="student-form" onSubmit={handleAddStudent}>
                    <div className="form-group">
                        <label htmlFor="name">Student Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. John Doe"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="course">Course</label>
                        <input
                            type="text"
                            id="course"
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            placeholder="e.g. B.Tech CSE"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="college">College</label>
                        <input
                            type="text"
                            id="college"
                            name="college"
                            value={formData.college}
                            onChange={handleChange}
                            placeholder="e.g. ABC College"
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="add-btn">Add Student</button>
                </form>

                <div className="students-list">
                    {students.length > 0 ? (
                        students.map((student, index) => (
                            <Student
                                key={index}
                                name={student.name}
                                course={student.course}
                                college={student.college}
                            />
                        ))
                    ) : (
                        <p className="no-students">No students added yet.</p>
                    )}
                </div>
            </main>
        </div>
    );
}

export default App;
