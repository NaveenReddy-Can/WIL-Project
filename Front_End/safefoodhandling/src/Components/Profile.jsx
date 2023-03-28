import { useAuth0 } from "@auth0/auth0-react";
import "./css/profile.css";
import Home1 from "./UserData/Home1";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { adddata } from "../Components/context/ContextProvider";
import { deldata } from "../Components/context/ContextProvider";
import { updatedata } from "../Components/context/ContextProvider";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { udata, setUdata } = useContext(adddata);
  const [getuserdata, setUserdata] = useState([]);

  const { updata, setUPdata } = useContext(updatedata);

  const { dltdata, setDLTdata } = useContext(deldata);

  const history = useNavigate();

  const [inpval, setINP] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  var email1 = user?.email;

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const addinpdata = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmpassword } = inpval;

    if (name == "") {
      alert("name is required");
    } else if (email == "") {
      alert("email is required");
    } else if (!email.includes("@")) {
      alert("enter valid email");
    } else if (password == "") {
      alert("password is required");
    } else if (confirmpassword == !password) {
      alert("password is required");
    } else {
      const res = await fetch("/autoregister", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 422 || !data) {
        console.log("error ");
        alert("error");
      } else {
        console.log("data added");
      }
    }
  };

  const getdata = async (email1) => {
    const res = await fetch(`/getuser/${email1}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setUserdata(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return isAuthenticated ? (
    isAuthenticated && (
      <>
        {udata ? (
          <>
            <div
              class="alert alert-success alert-dismissible fade show"
              role="alert"
            >
              <strong>{udata.name}</strong> added succesfully!
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          </>
        ) : (
          ""
        )}
        {updata ? (
          <>
            <div
              class="alert alert-success alert-dismissible fade show"
              role="alert"
            >
              <strong>{updata.name}</strong> updated succesfully!
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          </>
        ) : (
          ""
        )}

        {dltdata ? (
          <>
            <div
              class="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              <strong>{dltdata.name}</strong> deleted succesfully!
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          </>
        ) : (
          ""
        )}

        <article className="profilestyle">
          <NavLink to={`display/${user?.email}`}>
            {" "}
            <button
              className="btn btn-danger"
              style={{
                height: "60px",
                width: "80px",
                fontSize: "Large",
                float: "right",
              }}
            >
              <PersonPinIcon />
            </button>
          </NavLink>
          <center>
            {user?.picture && <img src={user.picture} alt={user?.name} />}
          </center>
          <h2>{user?.name}</h2>

          {setdata}
          {addinpdata}

          <ul>
            {Object.keys(user).map((objKey, i) => (
              <li key={i}>
                {objKey}: {user[objKey]}
              </li>
            ))}
          </ul>
          <div></div>

          {/* {getdata(user?.email)}*/}
        </article>
      </>
    )
  ) : (
    <div
      class="jumbotron"
      style={{ marginLeft: "150px", marginRight: "100px" }}
    >
      <h2 class="display-4">Please login... to see Your Profile Here</h2>
      <p class="lead">
        Up on successfull login user will be albe to see the listed below in the
        page.
      </p>
      <hr class="my-4"></hr>
      <p>
        Profile picture: A photo or image that represents the individual or
        entity.
      </p>

      <p>
        Basic information: Name, title or profession, contact information (such
        as email, phone number or social media profiles), and location.
      </p>

      <p>
        About me section: A brief summary of the individual or entity's
        background, experience, skills, interests, and goals.
      </p>

      <p>
        Education and work experience: Details about education and work history,
        including degrees earned, institutions attended, job titles, and
        descriptions of responsibilities and accomplishments.
      </p>

      <p>
        Skills and endorsements: A list of skills that the individual possesses,
        along with endorsements from other professionals.
      </p>

      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </p>
    </div>
  );
};

export default Profile;
