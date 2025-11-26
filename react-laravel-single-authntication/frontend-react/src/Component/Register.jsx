import React from "react";
import axios from "axios";
import { useState } from "react";
const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://127.0.0.1:8000/api/register", form);
    localStorage.setItem("token", res.data.token);
    alert("Registration Success!");
  };

  return (
    <div className="container">
      <div className="row justify-content-center pt-5">
        <div className="col-sm-6">
          <div className="card p-4">
            <h1 className="text-center mb-3">Register Form </h1>
            <form onSubmit={submit}>
              <br />
              <div className="form-group">
                <label>Name:</label>
                <input
                  name="name"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email Address:</label>
                <input
                  name="email"
                  className="form-control"
                  onChange={handleChange}
                />
                <br />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  name="password"
                  className="form-control"
                  type="password"
                  onChange={handleChange}
                />
              </div>
              <button className="btn btn-primary mt-4">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
