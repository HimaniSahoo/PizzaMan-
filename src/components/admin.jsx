import { useEffect, useState } from "react";
import "../css/styles.css";
import image from "../images/image.png"
import axios from "axios";
import { Link } from "react-router-dom";

let Admin = (props) => {
  //This statement is used to show the footer
  props.funcNav(true);
  //This state holds the error information
  const [errorMessages, setErrorMessages] = useState({});
  //This state holds the form state
  const [isSubmitted, setIsSubmitted] = useState(false);
  //This state holds the data coming from node server
  const [data1, updateData] = useState([]);

  const database = [
    {
      username: "admin",
      password: "admin@123",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" autoComplete="off" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  )

  /* This function is used fetch the data
     from node server */ 
  let refresh = async () => {
     let a = await axios.get("http://localhost:5000/data")
      .then((res) => {
        updateData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  };
  useEffect(() => {
    refresh();
  }, []);

  return (
    <div>
      {
        data1.map((val,idx)=>{
          return <input key={idx} type={'hidden'} value={val.name} data-testid="todo" />
        })
      }
      
      {/* checks whether the form is submitted or not */}
      {!isSubmitted ? (
        <div className="container">
          <div className="row app">
            <div
              className="col-12 col-xl-6 col-xxl-6"
              style={{ display: "block", margin: "0" }}
            >
              <img src={image} height={"300"} width={"300"} alt="image" />
            </div>
            <div className="col-12 col-xl-4 col-xxl-4">
              <div className="login-form">
                <h3 style={{ marginLeft: "10px" }}>Sign In</h3>
                <hr />
                {renderForm}
              </div>
            </div>
          </div>
        </div>
      ) : 
        //If form submitted it will show the below section
          (data1.length != 0 ? (
            <div className="container">
              <h2>Order History</h2>
              <div className="table-responsive">
                <table className="table table-striped table-hover table-fixed">
                  <thead>
                    <tr>
                      <th scope="col">S.NO</th>
                      <th scope="col">ID</th>
                      <th scope="col">NAME</th>
                      <th scope="col">DESCRIPTION</th>
                      <th scope="col">QUANTITY</th>
                      <th scope="col">PRICE</th>
                      <th scope="col">IMAGE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data1.map((val, idx) => {
                      return (
                        <tr key={idx} >
                          <th scope="row">{idx + 1}</th>
                          <td >{val.idd}</td>
                          <td >{val.name}</td>
                          <td>{val.desc}</td>
                          <td>{val.quantity}</td>
                          <td>{val.price}</td>
                          <td>
                            <img height="150" width="200" src={val.img} />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* If there is no order placed it will
               ask to go back */
            <div className="container">
              <h1>No order placed</h1>
                <Link className="goback" to={"/"}>
              <button className="btn btn-primary">
                  Go back
              </button>
                </Link>
            </div>
          ))
      }
      </div>
  );
};
export default Admin;
