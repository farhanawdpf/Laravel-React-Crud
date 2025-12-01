import { useEffect, useState } from 'react';
import { api } from '../api';

export default function CustomerDashboard(){
  const [data,setData]=useState(null);
  useEffect(()=> {
    api.get('/customer/dashboard').then(r => setData(r.data)).catch(e => setData(e?.response?.data));
  }, []);
  return <div style={{padding:20}}>
    <h2>Customer Dashboard</h2>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>;
}