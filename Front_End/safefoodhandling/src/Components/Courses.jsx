import React from 'react';
import './css/Courses.css';
import Quiz1 from './Quizzes/Quiz1';
import Quiz2 from './Quizzes/Quiz2';
import Quiz3 from './Quizzes/Quiz3';
import Quiz4 from './Quizzes/Quiz4';
import React1, { useState } from 'react';
import Buttons from './Quizzes/Buttons';
import CourseDisplay from './CoursesDisplay';
import CourseModule1 from './CourseModule1';


const Courses = () => {
    return (

        <div className='OutGrid'>

            <h2>Courses On Trending </h2>
            <div className="video-grid">



                <div className="video-row">
                    <div className="video-column">
                        <video src="video1.mp4" controls />
                        <p>Video 1 description</p>
                    </div>
                    <div className="video-column">
                        <video src="video2.mp4" controls />
                        <p>Video 2 description</p>
                    </div>
                    <div className="video-column">
                        <video src="video3.mp4" controls />
                        <p>Video 3 description</p>
                    </div>
                    <div className="video-column">
                        <video src="video4.mp4" controls />
                        <p>Video 4 description</p>
                    </div>
                </div>
                <div className="video-row">
                    <div className="video-column">
                        <video src="video5.mp4" controls />
                        <p>Video 5 description</p>
                    </div>
                    <div className="video-column">
                        <video src="video6.mp4" controls />
                        <p>Video 6 description</p>
                    </div>
                    <div className="video-column">
                        <video src="video7.mp4" controls />
                        <p>Video 7 description</p>
                    </div>
                    <div className="video-column">
                        <video src="video8.mp4" controls />
                        <p>Video 8 description</p>
                    </div>
                </div>
                <div className="video-row">
                    <div className="video-column">
                        <video src="video9.mp4" controls />
                        <p>Video 9 description</p>
                    </div>
                    <div className="video-column">
                        <video src="video10.mp4" controls />
                        <p>Video 10 description</p>
                    </div>
                    <div className="video-column">
                        <video src="video11.mp4" controls />
                        <p>Video 11 description</p>
                    </div>
                    <div className="video-column">
                        <video src="video12.mp4" controls />
                        <p>Video 12 description</p>
                    </div>
                </div>
                <div className="video-row">
                    <div className="video-column">
                        <video src="video13.mp4" controls />
                        <p>Video 13 description</p>
                    </div>
                    <div className="video-column">
                        <video src="video14.mp4" controls />
                        <p>Video 14 description</p>
                    </div>
                    <div className="video-column">
                        <video src="video15.mp4" controls />
                        <p>Video 15 description</p>
                    </div>
                    <div className="video-column">
                        <video src="video16.mp4" controls />
                        <p>Video 16 description</p>
                    </div>
                </div>
            </div>

            <Buttons />
            <CourseDisplay />
            <CourseModule1 />
        </div >
    );
};

export default Courses;
