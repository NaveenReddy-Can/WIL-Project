import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { updatedata } from "../context/ContextProvider";

const Edit = () => {
  // const [getuserdata, setUserdata] = useState([]);
  // console.log(getuserdata);

  const { updata, setUPdata } = useContext(updatedata);

  const history = useNavigate("");

  const [inpval, setINP] = useState({
    name: "",
    email: "",
    password: "",
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

  const { id } = useParams("");
  console.log(id);

  const getdata = async () => {
    const res = await fetch(`/induser/${id}`, {
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
      setINP(data[0]);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const updateuser = async (e) => {
    e.preventDefault();

    const { name, email, password } = inpval;

    const res2 = await fetch(`/updateuser/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data2 = await res2.json();
    console.log(data2);

    if (res2.status === 422 || !data2) {
      alert("fill the data");
    } else {
      history("/Profile");
      setUPdata(data2);
    }
  };

  return (
    <div classNameName="container">
      <NavLink to="/profile">home2</NavLink>
      <form classNameName="mt-4">
        <div classNameName="row">
          <div classNameName="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              value={inpval.name}
              onChange={setdata}
              name="name"
              classNameName="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div classNameName="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" classNameName="form-label">
              email
            </label>
            <input
              type="email"
              value={inpval.email}
              onChange={setdata}
              name="email"
              className="form-control"
              id="exampleInputPassword1"
              disabled
            />
          </div>
          <label for="exampleInputPassword1" classNameName="form-label">
            Password
          </label>
          <input
            type="text"
            value={inpval.password}
            onChange={setdata}
            name="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" onClick={updateuser} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Edit;
