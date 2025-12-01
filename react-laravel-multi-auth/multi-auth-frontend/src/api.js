import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  // If you use Sanctum cookies: withCredentials: true
  // withCredentials: true,
});

// attach token if present
export function setAuthToken(token) {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', token);
  } else {
    delete api.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  }
}

export function saveRole(role) {
  localStorage.setItem('role', role);
}
