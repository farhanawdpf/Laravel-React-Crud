import { useEffect, useState } from 'react';
import { api } from '../api';

export default function AdminDashboard(){
  const [data,setData] = useState(null);
  useEffect(() => {
    api.get('/admin/dashboard').then(r => setData(r.data)).catch(e => setData(e?.response?.data));
  }, []);
  return <div style={{padding:20}}>
    <h2>Admin Dashboard</h2>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>;
}