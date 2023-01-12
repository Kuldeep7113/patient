import React, { useState, useEffect } from "react";
import { json, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const data = { email: "", password: "" };
  const [formValues, setformValues] = useState(data);
  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate()
  


  function handleData(e) {
    console.log(e.target);
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
    console.log(formValues);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));
    setIsSubmit(true);

    axios
      .get(
        `http://localhost:5000/patient/signin/${formValues.email}/${formValues.password}`
      )
      .then((resp) => {
        console.log(resp.data.data.length);
        console.log("Pat_ID"+resp.data.data[0].Pat_ID)
        if(resp.data.data.length === 0){
       toast.error("invalid user")
        }
        else{
         
          navigate('/', {state : resp.data.data[0].Pat_ID})
        
        }
      });

  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(formValues)
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\. [^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  return (
    <div>
      {/* <pre>{JSON.stringify(formValues,undefined, 2)}</pre> */}
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login Form</h2>

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formValues.email}
          onChange={handleData}
        />
        <p style={{ color: "red" }}>{formErrors.email}</p>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formValues.password}
          onChange={handleData}
        />
        <p style={{ color: "red" }}>{formErrors.password}</p>
        <br />
        <button type="submit" className="btn btn-light">
          Login
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
