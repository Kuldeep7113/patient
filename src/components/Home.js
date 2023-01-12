import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
const Home = () => {

  const val1 =useLocation();
  const navigate = useNavigate()
  const [book, SetBook] = useState(1)
  const [book1, SetBook1] = useState(2)
  const [book3, SetBook3] = useState(3)

  // let query = `select p.Pat_ID , p.LastName , p.FirstName , p.Phone , p.address , p.disease , p.Age , a.Appo_ID , a.Appo_date , d.LastName , d.FirstName , d.Specialization , d.Phone from patient p FULL OUTER JOIN appointment a ON p.Pat_ID=a.Pat_id FULL OUTER JOIN doctor d on d.Doc_id = a.Doc_id`;
 useEffect(() => {
   console.log('rendered')
 },[book,book1] )
 
 function nav(){
 SetBook(book+1)
 console.log(book)
 console.log(val1.state)
 axios.post('http://localhost:5000/Appointment/Book',{
  "appo_date": null,
  "Pat_ID": val1.state,
  "Doc_ID": book
}).then(function (response) {
  console.log(response.data);
})
alert("appointment booked")
 navigate('/Appointment', {state :{doc_id: book , pat_id: val1.state}})
  
 }


 function nav1(){
  SetBook1(book1)
  console.log(book1)
  console.log(val1.state)
  axios.post('http://localhost:5000/Appointment/Book',{
  "appo_date": null,
  "Pat_ID": val1.state,
  "Doc_ID": book1
}).then(function (response) {
  console.log(response.data);
})
alert("appointment booked")
  navigate('/Appointment', {state :{doc_id: book1 , pat_id: val1.state}})
  }

  function nav3(){
    SetBook3(book3)
  console.log(book3)
  axios.post('http://localhost:5000/Appointment/Book',{
  "appo_date": null,
  "Pat_ID": val1.state,
  "Doc_ID": book3
}).then(function (response) {
  console.log(response.data);
})
alert("appointment booked")
  navigate('/Appointment', {state :{doc_id: book3 , pat_id: val1.state}})
    }

    function nav4(){
      toast("Doctor is out of town!")
      }



  return (
    <>
    {/* Hello world */}
    <div className="awesome" style={{ border: "1px solid red" }}>
      
    </div>
{/* style={{height : "1cm", marginLeft : '6px' }} */}
    <div className="container mt-5 mb-5">
    <div className="input-group rounded">
  <div className="form-outline">
    <input type="search" id="form1" class="form-control" />
    <label className="form-label" for="form1">Search</label>
  </div>
 
  <MDBDropdown>
      <MDBDropdownToggle style={{height : "1cm", marginLeft : '6px'}}>Dropdown button</MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link>Patey Cruiser</MDBDropdownItem>
        <MDBDropdownItem link>Mario Speedway</MDBDropdownItem>
        <MDBDropdownItem link>Anna Sthesia</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
</div>
      <div className="d-flex justify-content-between mb-3">
        {" "}
        <h1>Doctors</h1>{" "}
      
      </div>
      <div className="row g-2">
        <div className="col-md-3">
          <div className="card p-2 py-3 text-center">
            <div className="img mb-2">
              {" "}
              <img alt = "doc" src="https://i.imgur.com/LohyFIN.jpg" width={70} className="rounded-circle"/>{" "}
            </div>
            <h5 className="mb-0">Patey Cruiser</h5> <small>Neurosurgeon</small><small>Phone no</small>
            <div className="ratings mt-2">
              {" "}
              <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
              <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
            </div>
            <div className="mt-4 apointment">
              {" "}
              <button className="btn btn-success text-uppercase"  onClick={nav}>
                Book Appointment
              </button>{" "}
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-2 py-3 text-center">
            <div className="img mb-2">
              {" "}
              <img src="https://i.imgur.com/o5uMfKo.jpg" width={70}
                className="rounded-circle"
              /> {" "}
            </div>
            <h5 className="mb-0">Mario Speedway</h5> <small>Cardiologist</small><small>Phone no</small>
            <div className="ratings mt-2">
              {" "}
              <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
              <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
              <i className="fa fa-star" />{" "}
            </div>
            <div className="mt-4 apointment">
              {" "}
               <button className="btn btn-success text-uppercase"  onClick={nav1}>
                Book Appointment
              </button>{" "} 
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-2 py-3 text-center">
            <div className="img mb-2">
              {" "}
              <img
                src="https://i.imgur.com/tmdHXOY.jpg"
                width={70}
                className="rounded-circle"
              />{" "}
            </div>
            <h5 className="mb-0">Anna Sthesia</h5> <small>Surgeon</small> <small>Phone no</small>
            <div className="ratings mt-2">
              {" "}
              <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
              <i className="fa fa-star" />{" "}
            </div>
            <div className="mt-4 apointment">
              {" "}
              <button className="btn btn-success text-uppercase" onClick={nav3}>
                Book Appointment
              </button>{" "}
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-2 py-3 text-center">
            <div className="img mb-2">
              {" "}
              <img
                src="https://i.imgur.com/C4egmYM.jpg"
                style={{width: '70px'}} 
                className="rounded-circle"
              />{" "}
            </div>
            <h5 className="mb-0">Paul Moliv</h5> <small>Dentist</small><small>Phone no</small>
            <div className="ratings mt-2">
              {" "}
              <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
            </div>
            <div className="mt-4 apointment">
              {" "}
              <button className="btn btn-success text-uppercase" onClick={nav4} >
                Book Appointment
              </button>{" "}
            </div>
          </div>
        </div>       
      </div>
      <ToastContainer />
    </div>
    
  </>
  
  )
}

export default Home