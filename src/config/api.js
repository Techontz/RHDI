const BASE_URL = import.meta.env.VITE_APP_API_URL;
import Cookies from 'js-cookie';
const token = Cookies.get('token');

const API = {
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },

  // Auth Links
  login: `${BASE_URL}/api/login`,
  register: `${BASE_URL}/api/register`,
  account: `${BASE_URL}/api/account`,
  staffCustomers: `${BASE_URL}/staff/customers`,
  staffexpenses: `${BASE_URL}/staff/expenses`,
  staffsales: `${BASE_URL}/staff/sales`,
};

export default API;
