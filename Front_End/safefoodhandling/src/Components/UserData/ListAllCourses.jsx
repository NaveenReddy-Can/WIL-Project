import React, { useState, useEffect, useContext } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { NavLink } from "react-router-dom";
import { adddata, deldata } from "../context/ContextProvider";
import { updatedata } from "../context/ContextProvider";
import "bootstrap/dist/css/bootstrap.min.css";

import "../css/UserData/ListAllCourses.css";
const ListAllCourses = () => {
  const [getAllCourses, setUserdata] = useState([]);
  console.log(getAllCourses);
  console.log("hi");

  const { udata, setUdata } = useContext(adddata);

  const { updata, setUPdata } = useContext(updatedata);

  const { dltdata, setDLTdata } = useContext(deldata);

  const getdata = async () => {
    const res = await fetch("/getallcourses", {
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

  return (
    <div>
      {udata ? (
        <div>
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
        </div>
      ) : (
        ""
      )}
      {updata ? (
        <div>
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
        </div>
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

      <div className="mt-5">
        <div className="container">
          <div className="add_btn mt-2 mb-2">
            <NavLink to="/register" className="btn btn-primary">
              Add data
            </NavLink>
          </div>

          <table class="table">
            <thead>
              <tr className="table-dark">
                <th scope="col">id</th>
                <th scope="col">Course Id</th>
                <th scope="col">Course name</th>
                <th scope="col">Quiz1</th>
                <th scope="col">Quiz2</th>
                <th scope="col">Quiz3</th>
                <th scope="col">Cumilative Quiz</th>
                <th scope="col">Payment</th>
                <th scope="col">Final Result</th>
              </tr>
            </thead>
            <tbody>
              {getAllCourses.map((element, id) => {
                return (
                  <div>
                    <tr>
                      <th>{id + 1}</th>
                      <th>{element.CourseID}</th>
                      <td>{element.CourseName}</td>
                      <td>{element.Quiz1}</td>
                      <td>{element.Quiz2}</td>
                      <td>{element.Quiz3}</td>
                      <td>{element.CummilativeQuiz}</td>
                      <td>{element.Payment}</td>
                      <td>{element.FinalResult}</td>
                      <td></td>
                      <td></td>
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
                  </div>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListAllCourses;
