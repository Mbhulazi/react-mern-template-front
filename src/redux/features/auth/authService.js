import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API_URL = `${BACKEND_URL}/api/users/`;

// login with google
const logInWithGoogle = async (userToken) => {
  const response = await axios.post(API_URL + 
    "google/callback", userToken, {
    withCredentials: true,
  });
  return response.data;
};

// login status
const getLoginStatus = async () => {
  const response = await axios.get(API_URL + "loginStatus");
  return response.data;
};

// logout
const logout = async () => {
  const response = await axios.get(API_URL + "logout");
  return response.data.message;
};

// getUser profile
const getUser = async () => {
  const response = await axios.get(API_URL + "getUser");
  return response.data;
};

// Update profile
const updateUser = async (userData) => {
  const response = await axios.patch(API_URL + "updateUser", userData);
  return response.data;
};

// Update photo
const updatePhoto = async (userData) => {
  const response = await axios.patch(API_URL + "updatePhoto", userData);
  return response.data;
};

// getUsers
const getUsers = async () => {
  const response = await axios.get(API_URL + "getUsers");
  return response.data;
};

// delete Users
const deleteUser = async (id) => {
  const response = await axios.get(API_URL + id);
  return response.data.message;
};

// Change Usr Role
const changeUserRole = async (userData) => {
  const response = await axios.get(API_URL + "changeUserRole", userData);
  return response.data.message;
};

const authService = {
  logInWithGoogle,
  getLoginStatus,
  logout,
  getUser,
  updateUser,
  updatePhoto,
  getUsers,
  deleteUser,
  changeUserRole,
};

export default authService;
