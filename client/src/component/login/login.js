import React, { useContext, useState } from "react";
import "./login.css";
import { NavLink, useHistory } from "react-router-dom";
import { logindata } from "../context/ContextProvider";
export const Login = ({ setLoginUser }) => {
  const { lgdata, setLGData } = useContext(logindata);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const [udata, setUdata] = useState({
    name: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const getdata = async (id) => {
    const res = await fetch(` http://localhost:8003//login/${id}`, {
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
      alert("Loggedin");
      console.log("get data");
    }
  };

  const login = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    const res = await fetch("http://localhost:8003/logincheck/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (res.status === 422) alert(" error ");
    else {
      setLGData(data);
      history.push("/home");
    }
  };

  return (
    <div class="d-flex justify-content-center">
    <div className="login">
      {udata.name != "" ? (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          Welcome <strong>{udata.name}</strong>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      ) : (
        ""
      )}
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      ></input>
      <div className="button" onClick={login}>
        Login
      </div>
    </div>
    </div>
  );
};
