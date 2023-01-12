import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand"><h1>Appointment</h1></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href='/' style={{background: 'gray' }}>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href='/Login' style={{background: 'green' , margin: '3px', position: "absolute", right:'1%'}}>Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style={{background: 'red', margin: '3px',position: "absolute", right:'5%'}} href="/Register">Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link "  href="/Appointment" style={{position: "absolute", right:'10%'}}>Appointment</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar