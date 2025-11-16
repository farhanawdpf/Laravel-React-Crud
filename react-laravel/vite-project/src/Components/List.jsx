import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
function List() {
     const [products, setProducts] = useState([]);
     // Delete data
const deleteProduct = async (id) => {
  await axios.delete(`http://127.0.0.1:8000/api/products/${id}`);
  fetchProducts();
}
  // Fetch data
  const fetchProducts = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/products");
     console.log(res.data);
    setProducts(res.data);
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
     <div className="container">
        <h3>Products Details</h3>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>S No.</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((p, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{p.name} </td>
                                <td>{p.price} </td>
                                <td>
                                  <button onClick={() => deleteProduct(p.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
 
            </tbody>
        </table>
        </div>
  )
}

export default List