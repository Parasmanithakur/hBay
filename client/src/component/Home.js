import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  adddata,
  updatedata,
  deldata,
  logindata,
} from "./context/ContextProvider";
import "./Home.css";
import Front from "./Front/Front";
const Home = () => {
  const { udata, setUdata } = useContext(adddata);
  const { updata, setUPdata } = useContext(updatedata);
  const { dltdata, setDLTdata } = useContext(deldata);
  const { lgdata, setLGData } = useContext(logindata);
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);
  const getdata = async () => {
    const res = await fetch("http://localhost:8003/getitemdata", {
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
      setDLTdata(deldata);
      getdata();
    }
  };
  return (
    <>
      {udata ? (
        <div
          class="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>{udata.name}!</strong> added successfuly.
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
      {lgdata ? (
        <div
          class="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          Welcome <strong>{lgdata.name}!</strong> .
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      ) : (
        <>
          <div className="add_btn mt-2 mb-2">
            <NavLink to="/login" className="btn btn-primary">
              Login
            </NavLink>
          </div>
          <div className="add_btn mt-2 mb-2">
            <NavLink to="/rlogin" className="btn btn-primary">
              SignUp
            </NavLink>
          </div>
        </>
      )}

      {updata ? (
        <div
          class="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>{updata.name}!</strong> Updated successfuly.
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

      {dltdata ? (
        <div
          class="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>{dltdata.name}!</strong> Deleted successfuly.
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

      <div className="mt-5">
        <div className="container">
          <div className="mt-2 mb-2">
            <NavLink to="/register" className="btn btn-primary">
              Add Listing
            </NavLink>
          </div>

          <table className="table">
            <thead>
              <tr className="table-dark">
                <th scope="col">Id</th>
                <th scope="col">Owner</th>
                <th scope="col">image</th>
                <th scope="col">Condition</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {getuserdata.map((element, id) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{id + 1}</th>

                      <td>{element.name}</td>
                      <td>
                        <img
                          src={element.url}
                          class="rounded"
                          alt="Paris"
                        ></img>
                      </td>
                      <td>{element.condition}</td>
                      <td>{element.price}</td>
                      <td className="d-flex  justify-content-between">
                        <NavLink to={`/view/${element._id}`}>
                          <button className="btn btn-success">
                            <i className="fas fa-eye"></i>
                          </button>
                        </NavLink>
                        <NavLink to={`/edit/${element._id}`}>
                          <button className="btn btn-primary">
                            {" "}
                            <i className="fas fa-pen"></i>
                          </button>
                        </NavLink>

                        <button
                          className="btn btn-danger"
                          onClick={() => deleteuser(element._id)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
