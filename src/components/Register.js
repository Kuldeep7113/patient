import React, { useEffect, useState } from "react";
import "./comp.css";
import axios from "axios";
const Register = () => {
  const data = {
    Lname: "",
    fname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    disease: "",
    age: "",
  };
  const [info, setInfo] = useState(data);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    console.log("Register");
  }, [flag]);

  const havent = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
    console.log(info);
  };
  function handle(e) {
    e.preventDefault();
    if (
      !info.Lname ||
      !info.fname ||
      !info.email ||
      !info.password ||
      !info.phone ||
      !info.address ||
      !info.disease ||
      !info.age
    ) {
      alert("all feilds are required");
    } else {
        axios.post('http://localhost:5000/patient/register', {
            "LastName": info.Lname,
            "FirstName": info.fname,
            "email": info.email,
              "Password" : info.password,
            "Phone": info.phone,          
            "address": info.address,
            "disease": info.disease,  
            "age": info.age
          })
          .then(function (response) {
            console.log(response);
          })
        
      setFlag(true);
    }
  }
  return (
    <div>
      {/* <pre>{JSON.stringify(info, undefined, 2)}</pre> */}
      <form className="f" onSubmit={handle}>
        <h2>Registration Form</h2>
        <input
          name="Lname"
          type="text"
          placeholder="Last Name"
          value={info.Lname}
          onChange={havent}
        />
        <input
          name="fname"
          type="text"
          placeholder="First Name"
          value={info.fname}
          onChange={havent}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={info.email}
          onChange={havent}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={info.password}
          onChange={havent}
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone"
          value={info.phone}
          onChange={havent}
        />
        <input
          name="address"
          type="text"
          placeholder="Address"
          value={info.address}
          onChange={havent}
        />
        <input
          name="disease"
          type="text"
          placeholder="Disease"
          value={info.disease}
          onChange={havent}
        />
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={info.age}
          onChange={havent}
        />
        <br />
        <button type="submit" className="btn btn-light">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
