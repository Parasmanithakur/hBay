import React, { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { adddata } from "./context/ContextProvider";

const Register = () => {
  const { udata, setUdata } = useContext(adddata);

  const history = useHistory();

  const [inpval, setINP] = useState({
    name: "",
    owner: "",
    url: "",
    condition: "",
    price: "",
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
  const addinpdta = async (e) => {
    e.preventDefault();
    const { owner, url, condition, price, name } = inpval;
    const res = await fetch("http://localhost:8003/itemregister", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        owner,
        url,
        condition,
        price,
        name,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (res.status === 422 || !data) alert(" error ");
    else {
      alert("data added");
      console.log("data added");
      setUdata(data);
      history.push("/home");
    }
  };
  return (
    <div className="container">
      <NavLink to="/">home</NavLink>
      <form className="mt-4">
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" className="form-label">
              Owner
            </label>
            <input
              type="text"
              value={inpval.owner}
              onChange={setdata}
              name="owner"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              url
            </label>
            <input
              type="text"
              value={inpval.url}
              onChange={setdata}
              name="url"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              Price
            </label>
            <input
              type="number"
              value={inpval.price}
              onChange={setdata}
              name="price"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              item
            </label>
            <input
              type="text"
              value={inpval.mobile}
              onChange={setdata}
              name="name"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3 col-lg-12 col-md-12 col-12">
            <label for="exampleInputPassword1" className="form-label">
              Description
            </label>
            <textarea
              name="condition"
              value={inpval.condition}
              onChange={setdata}
              className="form-control"
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>

          <button type="submit" onClick={addinpdta} className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Register;
