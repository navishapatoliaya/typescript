import axios from "axios";
import { Dropdown } from "react-bootstrap";


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
    <div className="dropdown">
                                  <Dropdown>
                                      <Dropdown.Toggle
                                      variant="secondary btn-sm" 
                                      id="dropdown-basic">
                                        To Do Added Successfully
                                        
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu style={{backgroundColor:'#73a47'}}>
                                          <Dropdown.Item href="/home" >cancle</Dropdown.Item>
                                          <Dropdown.Item href="/">English</Dropdown.Item>
                                      </Dropdown.Menu>
                                  </Dropdown>

                                </div> 
}

export default {
  register,
  login,
  logout,
  add
};