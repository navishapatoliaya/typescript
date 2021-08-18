import axios from "axios";
import { Dropdown } from "react-bootstrap";
import authHeader from '../Services/auth-Header';

const API_URL= "https://rails-to-do-list-narola.herokuapp.com/v1/";


const register = ( email:string, password:string) => {
  return axios.post(API_URL + "signup", {
    
    email,
    password,
  });
};



const login = (email:string, password:string) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
        localStorage.setItem("auth_token", response.data.data.auth_token);
        
        console.log("data::::", response.data);
        console.log("data::::", response.data.data.auth_token);

      return response.data;
    });
};
const add = (data:any,due_date:any,priority:any) => {
  return axios.post(API_URL + "todos", {
    data,
    due_date,
    priority,
  });
}; 
const logout = () => {
  localStorage.removeItem("user");
};


const PopPop =()=>{
    
}

export default {
  register,
  login,
  logout,
  add,
  PopPop,
  
};