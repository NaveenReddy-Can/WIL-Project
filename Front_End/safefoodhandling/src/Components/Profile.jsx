import { useAuth0 } from "@auth0/auth0-react";
import "./css/profile.css";
import Home1 from "./UserData/Home1";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { adddata } from "../Components/context/ContextProvider";
import { deldata } from "../Components/context/ContextProvider";
import { updatedata } from "../Components/context/ContextProvider";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { udata, setUdata } = useContext(adddata);

  const history = useNavigate();

  const [inpval, setINP] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

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

  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const { updata, setUPdata } = useContext(updatedata);

  const { dltdata, setDLTdata } = useContext(deldata);

  const getdata = async (email) => {
    const res = await fetch(`/getuser/${email}`, {
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

  const deleteuser = async (id) => {
    const res2 = await fetch(`/deleteuser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 422 || !deletedata) {
      console.log("error");
    } else {
      console.log("user deleted");
      setDLTdata(deletedata);
      getdata();
    }
  };

  return isAuthenticated ? (
    isAuthenticated && (
      <article className="profilestyle">
        <center>
          {user?.picture && <img src={user.picture} alt={user?.name} />}
        </center>
        <h2>{user?.name}</h2>
        <form action="">
          {(inpval.name = user?.name)}
          {setdata}
          {(inpval.email = user?.email)}
          {setdata}
          {(inpval.password = user?.sub)}
          {setdata}
          {(inpval.confirmpassword = user?.sub)}
          {setdata}
          <button type="submit" onClick={addinpdata} class="btn btn-primary">
            Accept terms and conditions
          </button>
        </form>
        <ul>
          {Object.keys(user).map((objKey, i) => (
            <li key={i}>
              {objKey}: {user[objKey]}
            </li>
          ))}
        </ul>
        <div></div>
        {getdata}
        <table class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">id</th>
              <th scope="col">Username</th>
              <th scope="col">email</th>
              <th scope="col">Password</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {getuserdata.map((element, id) => {
              return (
                <tr>
                  <th scope="row">{id + 1}</th>
                  <td>{element.name}</td>
                  <td>{element.email}</td>
                  <td>{element.password}</td>
                  <td className="d-flex justify-content-between">
                    <NavLink to={`view/${element.id}`}>
                      {" "}
                      <button className="btn btn-success">
                        <RemoveRedEyeIcon />
                      </button>
                    </NavLink>
                    <NavLink to={`edit/${element.id}`}>
                      {" "}
                      <button className="btn btn-primary">
                        <CreateIcon />
                      </button>
                    </NavLink>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteuser(element.id)}
                    >
                      <DeleteOutlineIcon />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </article>
    )
  ) : (
    <artical className="profilestyle1">
      <center>
        <h1>Please login to see your profile Here</h1>
      </center>
    </artical>
  );
};

export default Profile;
