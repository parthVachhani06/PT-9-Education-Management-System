import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',
});

export const loginUser = async (credentials) => {
  const response = await api.post('/login', credentials);
  return response.data;
};

export default api;
