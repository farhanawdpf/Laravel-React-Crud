import ProtectedRoute from "./Componens/ProtectedRoute"
import CustomerDashboard from "./pages/CustomerDashboard"
import Login from "./pages/Login"
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import SellerDashboard from './pages/SellerDashboard';
import { setAuthToken } from './api';

const token = localStorage.getItem('token');
if (token) setAuthToken(token);
function App() {



  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin/dashboard" element={
          <ProtectedRoute roles={['admin']}><AdminDashboard/></ProtectedRoute>
        } />
        <Route path="/seller/dashboard" element={
          <ProtectedRoute roles={['seller']}><SellerDashboard/></ProtectedRoute>
        } />
        <Route path="/customer/dashboard" element={
          <ProtectedRoute roles={['customer']}><CustomerDashboard/></ProtectedRoute>
        } />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
