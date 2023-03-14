import React, { useState, useEffect, useContext } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { NavLink } from "react-router-dom";
import { adddata, deldata } from "../context/ContextProvider";
import { updatedata } from "../context/ContextProvider";
import "bootstrap/dist/css/bootstrap.min.css";

const AListAllComplaints = () => {
  const [getAllComplaints, setUserdata] = useState([]);
  console.log(getAllComplaints);

  const { udata, setUdata } = useContext(adddata);

  const { updata, setUPdata } = useContext(updatedata);

  const { dltdata, setDLTdata } = useContext(deldata);

  const getdata = async () => {
    const res = await fetch("/agetallcomplaints", {
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
          <h2>All Complaints List </h2>
          <div className="add_btn mt-2 mb-2">
            <NavLink to="/register" className="btn btn-primary">
              Add data
            </NavLink>
          </div>

          <table class="table">
            <thead>
              <tr className=" table-dark">
                <th scope="col">id</th>
                <th className="d-flex justify-content-between" scope="col">
                  Complaint ID
                </th>
                <th scope="col">User ID</th>
                <th scope="col">User Name</th>
                <th scope="col">Complaint Description</th>
                <th scope="col">Complaint_Status</th>
                <th scope="col">User Email addres</th>
                <th scope="col">User Mobile Number </th>
                <th scope="col">Complaint Raised Date & Time </th>
                <th>controls</th>
              </tr>
            </thead>
            <tbody>
              {getAllComplaints.map((element, id) => {
                return (
                  <tr>
                    <th>{id + 1}</th>
                    <th>{element.complaint_id}</th>
                    <td>{element.user_id}</td>
                    <td>{element.user_name}</td>
                    <td>{element.complaint_desc}</td>
                    <td>{element.complaint_status}</td>
                    <td>{element.user_email}</td>
                    <td>{element.user_mobile}</td>
                    <td>{element.complaint_date_time}</td>

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
        </div>
      </div>
    </div>
  );
};

export default AListAllComplaints;
