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
