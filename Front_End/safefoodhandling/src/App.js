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
import ContactForm from './Components/Contactus';
import ContactUsBubble from './Components/ContactUsBubble';
import ListAllCourses from './Components/UserData/ListAllCourses';
import AutoRegister from './Components/UserData/AutoAddUserdetails';
import AListAllUsers from './Components/AdminData/A_ListAllUsers';
import AListAllQuizzes from './Components/AdminData/A_ListAllQuizzes';
import AListAllCourses from './Components/AdminData/A_ListAllCourses';
import AListAllComplaints from './Components/AdminData/A_ListAllComplaints';
import AListAllComplaintsResolved from './Components/AdminData/A_ListAllComplaintsResolved';
import AListAllQuizAttempts from './Components/AdminData/A_ListAllQuizzAttempts';
import AListAllComplaintsResolvedYes from './Components/AdminData/A_ListAllComplaintsResolvedYes';
import AListAllComplaintsResolvedAll from './Components/AdminData/A_ListAllComplaintsResolvedall';
import AListAllComplaintsResolvedNo from './Components/AdminData/A_ListAllComplaintsResolvedNo';
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
          <Route path="/contactus" element={<ContactForm />} />
          <Route exact path="/userdata" element={<Home1 />} />
          <Route exact path="/AddProfile" element={<Register />} />
          <Route exact path="/edit/:id" component={<Edit />} />
          <Route path="Profile/edit/:id" component={<Edit />} />
          <Route exact path="userdata/edit/:id" element={<Details />} />
          <Route exact path="/listallcourses" element={<ListAllCourses />} />
          <Route exact path="/autoregister" element={<AutoRegister />} />
          <Route path="/alistallusers" element={<AListAllUsers />} />
          <Route path="/alistallquizzes" element={<AListAllQuizzes />} />
          <Route path="/alistallcourses" element={<AListAllCourses />} />
          <Route path="/alistallcomplaints" element={<AListAllComplaints />} />
          <Route path="/alistallresolvedcomplaints" element={<AListAllComplaintsResolved />} />
          <Route path="/alistallquizattempts" element={<AListAllQuizAttempts />} />
          <Route path="/alistallcomplaintsresolvedyes" element={<AListAllComplaintsResolvedYes />} />
          <Route path="/alistallcomplaintsresolvedall" element={<AListAllComplaintsResolvedAll />} />
          <Route path="/alistallcomplaintsresolvedno" element={<AListAllComplaintsResolvedNo />} />


          AListAllComplaintsResolvedYes
        </Routes>
        <h1> SAFE FOOD HANDLING WEBSITE COMMING SOON...</h1>
        <ContactUsBubble />
      </div>

    </BrowserRouter>

  );
}

export default App;
