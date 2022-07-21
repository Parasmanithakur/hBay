import React, { useState } from "react";
import "./register.css";

export const RegisterLogin = () => {
  //const history = useHistory()

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const addinpdta = async (e) => {
    e.preventDefault();
    const { name, email, password, reEnterPassword } = user;
    if (password === reEnterPassword) {
      const res = await fetch("http://localhost:8003/rlogin", {
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
      if (res.status === 422 || !data) alert(" error ");
      else {
        alert("data added");
        console.log("data added");
      }
    } else {
      alert("password not matching");
    }
  };
  return (
    <div className="register">
      {console.log("User", user)}
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Your Password"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter Password"
        onChange={handleChange}
      ></input>
      <div className="button" onClick={addinpdta}>
        Register
      </div>
    </div>
  );
};
