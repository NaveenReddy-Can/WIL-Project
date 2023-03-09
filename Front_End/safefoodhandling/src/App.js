import './App.css';
import React from 'react';

import SignUp from './Components/SignUp';
import Profile from './Components/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Courses from './Components/Courses';
import Register from './Components/UserData/AddUser'
import Edit from './Components/UserData/Edit'
import Details from './Components/UserData/Details'
import Quiz3 from './Components/Quizzes/Quiz3';
import CourseDisplay from './Components/CoursesDisplay';
import CourseModule1 from './Components/CourseModule1';
import Home1 from './Components/UserData/Home1';
import Certificate from './Components/Certificate';
import Quiz1 from './Components/Quizzes/Quiz1';
import Quiz2 from './Components/Quizzes/Quiz2';
import Quiz4 from './Components/Quizzes/Quiz4';
/* main application in the project */
/* Url navigations are declared here*/

function App() {
  return (

    <BrowserRouter>
      <div className="App">

        <header className="App-header">

        </header>
        <Routes>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/home" element={<Home />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/quiz1" element={<Quiz1 />} />
          <Route path="/quiz2" element={<Quiz2 />} />
          <Route path="/quiz3" element={<Quiz3 />} />
          <Route path="/quiz4" element={<Quiz4 />} />
          <Route path="/finalassesment" element={<Quiz1 />} />

          <Route exact path="/userdata" element={<Home1 />} />
          <Route exact path="/AddProfile" element={<Register />} />
          <Route exact path="/edit/:id" component={Edit} />
          <Route exact path="userdata/view/:id" element={<Details />} />

        </Routes>
        <h1> SAFE FOOD HANDLING WEBSITE COMMING SOON...</h1>

      </div>

    </BrowserRouter>

  );
}

export default App;
