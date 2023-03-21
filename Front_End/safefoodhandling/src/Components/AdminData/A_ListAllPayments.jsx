import React, { useState, useEffect, useContext } from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { NavLink } from "react-router-dom";
import { adddata, deldata } from "../context/ContextProvider";
import { updatedata } from "../context/ContextProvider";

const AlistAllPayments = () => {
  const [getAllPayments, setUserdata] = useState([]);
  console.log(getAllPayments);

  const { udata, setUdata } = useContext(adddata);

  const { updata, setUPdata } = useContext(updatedata);

  const { dltdata, setDLTdata } = useContext(deldata);

  const getdata = async () => {
    const res = await fetch("/agetallpayments", {
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
    const res2 = await fetch(`/deletepayment/${id}`, {
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
      console.log("payment deleted");
      setDLTdata(deletedata);
      getdata();
    }
  };

  return (
    <>
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
            <h2>All Payments List </h2>
            <div className="add_btn mt-2 mb-2">
              <NavLink to="/register" className="btn btn-primary">
                Add data
              </NavLink>
            </div>

            <table class="table">
              <thead>
                <tr className="table-dark">
                  <th scope="col">id</th>
                  <th scope="col">Payment Id</th>
                  <th scope="col">User Name</th>
                  <th scope="col">User ID</th>
                  <th scope="col">Course Name</th>
                  <th scope="col">Course ID</th>
                  <th scope="col">Payment Reference Number</th>
                  <th scope="col">Payment Status</th>
                  <th scope="col">Amount</th>
                  <th>controls</th>
                </tr>
              </thead>
              <tbody>
                {getAllPayments.map((element, id) => {
                  return (
                    <tr>
                      <th>{id + 1}</th>
                      <td>{element.id}</td>
                      <td>{element.user_name}</td>
                      <td>{element.user_id}</td>
                      <td>{element.course_name}</td>
                      <td>{element.course_id}</td>
                      <td>{element.payment_reference_number}</td>
                      <td>{element.payment_status}</td>
                      <td>{element.amount}</td>

                      <td className="d-flex justify-content-between">
                        <NavLink to={`paymentedit/${element.id}`}>
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
    </>
  );
};

export default AlistAllPayments;
