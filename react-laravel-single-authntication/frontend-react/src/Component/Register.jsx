import React from 'react'
import axios from "axios";
import { useState } from "react";
const Register = () => {
    const [form, setForm] = useState({name: "", email: "", password: ""});

  const handleChange = (e) => {
      setForm({...form, [e.target.name]: e.target.value});
  }

  const register = async () => {
    const res = await axios.post("http://127.0.0.1:8000/api/register", form);
    localStorage.setItem("token", res.data.token);
    alert("Registration Success!");
  }
  return (
    <div className='container'> 

      <input name="name" onChange={handleChange} placeholder="Name" /><br />
      <input name="email" onChange={handleChange} placeholder="Email" /><br />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" /><br /><br />
      <button onClick={register}>Register</button>

    </div>
  )
}

export default Register