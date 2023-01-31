import './App.css';
import NavBar from './Components/Navbar';
import SignUp from './Components/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
/* main application in the project */
/* Url navigations are declared here*/

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <NavBar />
        <header className="App-header">

        </header>
        <Routes>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

        </Routes>
        <h1> SAFE FOOD HANDLING WEBSITE COMMING SOON...</h1>


      </div>


    </BrowserRouter>
  );
}

export default App;
