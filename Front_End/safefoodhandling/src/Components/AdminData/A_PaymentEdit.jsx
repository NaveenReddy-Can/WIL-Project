import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { updatedata } from "../context/ContextProvider";

const APaymentEdit = () => {
  // const [getuserdata, setUserdata] = useState([]);
  // console.log(getuserdata);

  const { updata, setUPdata } = useContext(updatedata);

  const history = useNavigate("");

  const [inpval, setINP] = useState({
    id: "",

    user_id: "",
    course_id: "",
    payment_reference_number: "",
    payment_status: "",
    amount: "",
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
    const res = await fetch(`/paymentup/${id}`, {
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

    const {
      id,
      user_id,
      course_id,
      payment_reference_number,
      payment_status,
      amount,
    } = inpval;

    const res2 = await fetch(`/updatepayment/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id,

        course_id,
        payment_reference_number,
        payment_status,
        amount,
      }),
    });

    const data2 = await res2.json();
    console.log(data2);

    if (res2.status === 422 || !data2) {
      alert("fill the data");
    } else {
      history("/alistallpayments");
      setUPdata(data2);
    }
  };

  return (
    <div classNameName="container">
      <NavLink to="/alistallpayments">home</NavLink>
      <form classNameName="mt-4">
        <div classNameName="row">
          <div classNameName="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" classNameName="form-label">
              user_id
            </label>
            <input
              type="number"
              value={inpval.user_id}
              onChange={setdata}
              name="user_id"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              course ID
            </label>
            <input
              type="number"
              value={inpval.course_id}
              onChange={setdata}
              name="course_id"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              payment_reference_number
            </label>
            <input
              type="text"
              value={inpval.payment_reference_number}
              onChange={setdata}
              name="payment_reference_number"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              payment_status
            </label>
            <input
              type="text"
              value={inpval.payment_status}
              onChange={setdata}
              name="payment_status"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-12 col-md-12 col-12">
            <label for="exampleInputPassword1" className="form-label">
              amount
            </label>
            <input
              type="text"
              value={inpval.amount}
              onChange={setdata}
              name="amount"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button
            type="submit"
            onClick={updateuser}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default APaymentEdit;
