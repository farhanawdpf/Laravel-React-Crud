import React from 'react'
import axios from "axios";
import { useState } from "react";
const Register = () => {
    const [form, setForm] = useState({name: "", email: "", password: ""});

  const handleChange = (e) => {
      setForm({...form, [e.target.name]: e.target.value});
  }

 const submit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://127.0.0.1:8000/api/register", form);
    localStorage.setItem("token", res.data.token);
    alert("Registration Success!");
  };

  return (
    <div className='container'> 
    <form onSubmit={submit}><br />
    Name:
      <input name="name" onChange={handleChange} /><br />
      Email:
      <input name="email" onChange={handleChange} /><br />
      Password:
      <input name="password" type="password" onChange={handleChange} />
      <button>Register</button>
    </form>

    </div>
  )
}

export default Register