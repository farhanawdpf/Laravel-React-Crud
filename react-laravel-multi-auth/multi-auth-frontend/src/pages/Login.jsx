import { useState } from 'react';
import { api, setAuthToken, saveRole } from '../api';
import { useNavigate } from 'react-router-dom';
const Login = () => {
 
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/login', { email, password });
      const token = res.data.token;
      const role = res.data.user.role;
      setAuthToken(token);
      saveRole(role);

      // redirect based on role
      if (role === 'admin') navigate('/admin/dashboard');
      else if (role === 'seller') navigate('/seller/dashboard');
      else navigate('/customer/dashboard');

    } catch (err) {
      alert(err?.response?.data?.message || 'Login failed');
    }
  };
    return (
  
  <div style={{padding:20}}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div><input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /></div>
        <div><input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} /></div>
        <button type="submit">Login</button>
      </form>
      <p>Demo accounts: admin@example.com / seller@example.com / customer@example.com (password)</p>
    </div>
  )
}

export default Login