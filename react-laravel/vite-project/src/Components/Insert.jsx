import React, { useState } from "react";
import List from "./List";
import axios from "axios";
const Insert = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const createProduct = async () => {
    await axios.post("http://127.0.0.1:8000/api/products", {
      name,
      price,
      description,
    });

    fetchProducts(); // reload list
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h3>Add Your Product</h3>
          <form>
            <input
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
            />
             <input
              placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={createProduct}>Add Product</button>
          </form>
        </div>
        <div className="col-md-10">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Insert;
