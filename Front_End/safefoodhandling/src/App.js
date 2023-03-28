import './App.css';
import React from 'react';

import SignUp from './Components/SignUp';
import Profile from './Components/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Courses from './Components/Courses';
import MyLearning from './Components/MyLearning';
import Register from './Components/UserData/AddUser'
import Edit from './Components/UserData/Edit'
import Details from './Components/UserData/Details'
import Quiz3 from './Components/Quizzes/Quiz3';
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
import ALogin from './Components/Login';

import AHomePage from './Components/AdminData/A_HomePage';
import AlistAllPayments from './Components/AdminData/A_ListAllPayments';
import APaymentEdit from './Components/AdminData/A_PaymentEdit';
import A_listUserView from './Components/AdminData/A_ListAllUsersEdit';
import AListUserView from './Components/AdminData/A_ListAllUsersEdit';
import AUserEdit from './Components/AdminData/A_ListAllUserEdit';
import CardComponent from './Components/CourseListCards';
import CheckoutForm from './Components/CheackoutPage';
import ProfileView from './Components/ProfileView';
/* main application in the project */
/* Url navigations are declared here*/

function App() {

  return (

    <BrowserRouter>
      <div className="App">

        <header className="App-header">

        </header>
        <Routes>
          {/** main app routes  routes */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/mylearning" element={<MyLearning />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contactus" element={<ContactForm />} />
          <Route path="/cardcomponent" element={<CardComponent />} />
          <Route path="/createcheckoutsession" element={<CheckoutForm />} />
          {/** module 1  routes */}
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/quiz1" element={<Quiz1 />} />
          <Route path="/quiz2" element={<Quiz2 />} />
          <Route path="/quiz3" element={<Quiz3 />} />
          <Route path="/quiz4" element={<Quiz4 />} />
          <Route path="/finalassesment" element={<Quiz1 />} />

          {/** user  routes */}
          <Route exact path="/userdata" element={<Home1 />} />
          <Route exact path="/AddProfile" element={<Register />} />
          <Route exact path="/edit/:id" element={<Edit />} />
          <Route exact path="/edit" element={<Edit />} />
          <Route exact path="Profile/view/:id" element={<Edit />} />
          <Route exact path="userdata/edit/:id" element={<Details />} />
          <Route exact path="userdata/view/:id" element={<Details />} />
          <Route path="Profile/display/:email" element={<ProfileView />} />

          <Route exact path="/Details" element={<Details />} />
          <Route exact path="/listallcourses" element={<ListAllCourses />} />
          <Route exact path="/autoregister" element={<AutoRegister />} />
          {/** admin routes */}
          <Route path="/alogin" element={<ALogin />} />
          <Route path="/ahomepage" element={<AHomePage />} />
          <Route path="/alistallusers" element={<AListAllUsers />} />
          <Route path="/alistallusers/view/:id" element={<AListUserView />} />
          <Route path="/alistallusers/edit/:id" element={<AUserEdit />} />
          <Route path="/alistallquizzes" element={<AListAllQuizzes />} />
          <Route path="/alistallcourses" element={<AListAllCourses />} />
          <Route path="/alistallcomplaints" element={<AListAllComplaints />} />
          <Route path="/alistallresolvedcomplaints" element={<AListAllComplaintsResolved />} />
          <Route path="/alistallquizattempts" element={<AListAllQuizAttempts />} />
          <Route path="/alistallcomplaintsresolvedyes" element={<AListAllComplaintsResolvedYes />} />
          <Route path="/alistallcomplaintsresolvedall" element={<AListAllComplaintsResolvedAll />} />
          <Route path="/alistallcomplaintsresolvedno" element={<AListAllComplaintsResolvedNo />} />
          <Route path="/alistallpayments" element={<AlistAllPayments />} />
          <Route path="/alistallpayments/paymentedit/:id" element={<APaymentEdit />} />


        </Routes>

        <ContactUsBubble />
      </div>

    </BrowserRouter>

  );
}

export default App;

