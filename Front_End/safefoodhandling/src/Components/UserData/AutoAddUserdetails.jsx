import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { adddata } from "../context/ContextProvider";

const AutoRegister = () => {
  const { udata, setUdata } = useContext(adddata);

  const history = useNavigate();

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

  const addinpdata = async (e) => {
    e.preventDefault();

    const { name, email, password } = inpval;

    if (name == "") {
      alert("name is required");
    } else if (email == "") {
      alert("email is required");
    } else if (!email.includes("@")) {
      alert("enter valid email");
    } else if (password == "") {
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
        history.push("/");
        setUdata(data);
        console.log("data added");
      }
    }
  };

  return (
    <div className="container">
      <h1>Create your profile</h1>
      <form className="mt-4">
        <div className="row">
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="text"
              value={inpval.name}
              onChange={setdata}
              name="name"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              email
            </label>
            <input
              type="email"
              value={inpval.email}
              onChange={setdata}
              name="email"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              password
            </label>
            <input
              type="text"
              value={inpval.password}
              onChange={setdata}
              name="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" onClick={addinpdata} class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default AutoRegister;
