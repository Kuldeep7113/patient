import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import "./comp.css";

const Appointment = () => {
const val =useLocation();
const [first, setfirst] = useState([])

useEffect(() => {
 console.log('renderd')
} )


console.log("value ==="+ val.state.doc_id)
 //let query = `select p.Pat_ID , p.LastName , p.FirstName , p.Phone , p.address , p.disease , p.Age , a.Appo_ID , a.Appo_date , d.LastName , d.FirstName , d.Specialization , d.Phone from patient p FULL OUTER JOIN appointment a ON p.Pat_ID=a.Pat_id FULL OUTER JOIN doctor d on d.Doc_id = a.Doc_id`;
 let pat = val.state.pat_id;
 let doc = val.state.doc_id;
axios.get(`http://localhost:5000/Appointment/form/${pat}/${doc}`).then((res)=>{
  console.log(res.data)
  setfirst(res.data.data)
}
)

  return (
    <>
    
    <div>{first.map((data)=>{
           
            const{Pat_ID,LastName,FirstName,Phone,address,disease,Age,Appo_ID,Appo_date,D_LastName,D_FirstName,Specialization,D_Phone} = data
      return<div className='carda'> <h3>Patient Id :{Pat_ID}</h3>
      <hr color='black'/>
      <br/>
      <p style={{position :"absolute" , right : '1cm'}}> Appointment no :{Appo_ID}</p>
      
      <span> Appointment date : 05/02/2022</span>
      <p>Patient Name  : {FirstName} {LastName}</p>
      
      <p> Phone no:  {Phone}</p>
      <p>Address : {address}</p>
      <p> Disease{disease}</p>
      <p> Age : {Age}</p>
      
      <p> Doctor Name :  {D_FirstName} {D_LastName}</p>
      <p>Doctors Specialization :{Specialization}</p>
      <p>Doctors Phone no : {D_Phone}</p>
      
      </div>
    })}</div>

    </>

  )
}

export default Appointment