import React from 'react';

const Resume = () => {
    return (
        <div className="resume-page">
            <h1>My Resume</h1>
            <section>
                <h2>Education</h2>
                <ul>
                    <li>
                        <strong>Degree:</strong> Your Degree<br />
                        <strong>Institution:</strong> Your University<br />
                        <strong>Year:</strong> YYYY - YYYY
                    </li>
                </ul>
            </section>
            <section>
                <h2>Experience</h2>
                <ul>
                    <li>
                        <strong>Position:</strong> Your Job Title<br />
                        <strong>Company:</strong> Company Name<br />
                        <strong>Duration:</strong> YYYY - YYYY<br />
                        <strong>Description:</strong> Brief description of your role and achievements.
                    </li>
                </ul>
            </section>
            <section>
                <h2>Skills</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>CSS</li>
                    {/* Add more skills as needed */}
                </ul>
            </section>
        </div>
    );
};

export default Resume;