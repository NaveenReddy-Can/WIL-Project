import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WorkIcon from "@mui/icons-material/Work";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { NavLink, useParams, useNavigate } from "react-router-dom";

const ProfileView = () => {
  const { user, isAuthenticated } = useAuth0();
  const [getuserdata, setUserdata] = useState([]);

  const { email } = useParams("");
  console.log(email);

  const getdata = async () => {
    const res = await fetch(`/getusers/${email}`, {
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
      setUserdata(data[0]);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <center>
        <h1 style={{ fontWeight: 400 }}>Welcome to safefood Handling</h1>{" "}
        <Card sx={{ maxWidth: 800 }}>
          <CardContent>
            <div className="add_btn">
              <h2>Profile</h2>
              <NavLink to={`/edit/${getuserdata.id}`}>
                {" "}
                <button className="btn btn-primary mx-2">
                  <CreateIcon />
                </button>
              </NavLink>
            </div>
            <div className="row">
              <center>
                <div className="left_view col-lg-6 col-md-6 col-12">
                  {user?.picture && <img src={user.picture} alt={user?.name} />}
                  {/*  <img src="/profile.png" style={{ width: 50 }} alt="profile" /> */}
                  <h3 className="mt-3">
                    Name: <span>{getuserdata.name}</span>
                  </h3>
                  <h3 className="mt-3">
                    ID: <span>{getuserdata.id}</span>
                  </h3>
                  <p className="mt-3">
                    <MailOutlineIcon />
                    Email: <span>{getuserdata.email}</span>
                  </p>
                  <p className="mt-3">
                    <WorkIcon />
                    Password: <span>{getuserdata.password}</span>
                  </p>
                </div>
              </center>
            </div>
          </CardContent>
        </Card>
      </center>
    </div>
  );
};

export default ProfileView;
