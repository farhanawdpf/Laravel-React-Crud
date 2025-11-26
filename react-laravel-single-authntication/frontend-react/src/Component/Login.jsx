import React from "react";
import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submitForm = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://127.0.0.1:8000/api/login", form);

    localStorage.setItem("token", res.data.token);
    alert("Logged in!");
  };

  return (
    <div className="container">
      <div className="row justify-content-center pt-5">
        <div className="col-sm-6">
          <div className="card p-4">
            <h1 className="text-center mb-3">Login </h1>
            <div className="form-group">
              <label>Email address:</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
                onChange={change}
                id="email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
                onChange={change}
                id="pwd"
              />
            </div>
            <button
              type="button"
              onClick={submitForm}
              className="btn btn-primary mt-4"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
