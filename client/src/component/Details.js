import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
const Details = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);
  const { id } = useParams("");

  const getdata = async () => {
    const res = await fetch(` http://localhost:8003/getuser/${id}`, {
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
  return (
    <>
      <NavLink to="/">home</NavLink>
      <div className="add_btn">
        <NavLink to={`/edit/${getuserdata._id}`}>
          {" "}
          <button className="btn btn-primary mx-2"></button>
        </NavLink>
      </div>

      <div className="row">
        <div className="left_view col-lg-6 col-md-6 col-12">
          <img src="/profile.png" style={{ width: 50 }} alt="profile" />
          <h3 className="mt-3">
            Item: <span>{getuserdata.name}</span>
          </h3>
          <h3 className="mt-3">
            Price: <span>{getuserdata.price}</span>
          </h3>
          <p className="mt-3">
            Email: <span>{getuserdata.condition}</span>
          </p>
          <p className="mt-3">
            pic: <span><img src={getuserdata.url}/></span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Details;
