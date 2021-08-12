// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';


// interface RegisterProp{
//     name?: any;
//     value?: any;
//     register?: any;
//     registering: any;
//     submitted:any;
//     user: string

// }
// interface Fields{
//     firstName?: string,
//     lastName?: string,
//     userName?: string,
//     password?: string   
// }
// interface RegisterState{
   
//     submitted :boolean;
//     user?: Fields;

// }

// export class RegisterPage extends Component <RegisterProp,RegisterState>{
//     constructor(props :RegisterProp){
//         super(props);
//         this.state={
//             user:{
//                 firstName : '',
//                 lastName : '',
//                 userName : '',
//                 password : '',
//             },
//             submitted:false
//         };
//     }  
    
//         handleChange = (event: any)=>{
//             this.setState({user: {
//                     ...this.state.user,
//                     [event?.target.name]: event?.target.value
//                 }});
//             // this.setState(Object.assign(this.state,{user,[name]:value}));
//         }

//     // handleSubmit(event:any) {
//     //     event.preventDefault();

//     //     this.setState({ submitted: true });
//     //     const { user } = this.state;
//     //     if (user.firstName && user.lastName && user.username && user.password) {
//     //         this.props.register(user);
//     //     }
//     // }
//     render() {
//         const {registering} =this.props;
//         const {user,submitted} =this.state;
//         return (
//             <div>

//                 <h1>Register</h1>
//                 <form name="form">
//                     <div className={"form-group" + (submitted && !user?.firstName ? ' has-error' : '') }>
//                         <label htmlFor="firstName">First Name</label>
//                         <input type="text" className="form-control" name="firstName" value={user?.firstName} onChange={this.handleChange}  />
//                         {/* {submitted && !user.firstName &&
//                             <div className="help-block">First Name is required</div>
//                         } */}
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="lastname">Last Name:</label>
//                         <input type="text" className="form-control" name="lastname" value={user?.lastName} onChange={this.handleChange} />
//                         {/* {submitted && !user.lastName &&
//                             <div className="help-block">Last Name is required</div>
//                         } */}
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="username">User Name:</label>
//                         <input type="text" className="form-control" name="username" value={user?.userName} onChange={this.handleChange}/>
//                         {/* {submitted && !user.username &&
//                             <div className="help-block">Username is required</div>
//                         } */}
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password">Password:</label>
//                         <input type="text" className="form-control" name="password" value={user?.password} onChange={this.handleChange}/>
//                         {/* {submitted && !user.password &&
//                             <div className="help-block">Password is required</div>
//                         } */}
//                     </div>
//                     <div className="form-group">
//                         <button className="btn btn-primary">Register</button>
//                         <Link to="/login" className="btn btn-link">Cancel</Link>

//                     </div>

//                 </form>
//             </div>
//         )
//     }
// }

// export default RegisterPage;

/* second method */
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function RegisterPage(){

//         const [state, setState] = useState({loading: false});
//         const [email, setEmail] = useState("");
//         const [password, setPassword] = useState("");
//         const [confirmpassword, setConfirmpassword] = useState("");

//         async function submitForm() {
//             setState({ ...state, loading: true});
//             const response = await fetch(`https://rails-to-do-list-narola.herokuapp.com/v1/signup`, {
//               method: 'POST',
//               headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//               },
//               body: JSON.stringify({email:email, password: password,confirmpassword:confirmpassword})
//             });
//             const content = await response.json();
//             setState({ ...state, loading: false});
//           }


//           return (
//             <div>
//                             <h1>Registration</h1>
//                             <div>
//                                 <span>
//                                     <label>Email</label>
//                                     <input type="input" id='email'  value={email}  
//                                     onChange={e => setEmail(e.target.value)}></input>
//                                 </span>
//                             </div>
//                             <div>
//                                 <span>
//                                     <label>Password</label>
//                                     <input type="password" id="password" value={password}
//                                     onChange={e => setPassword(e.target.value)}></input>
//                                 </span>
//                             </div>
//                             <div>
                                
//                             <span>
//                                 <label>ConfirmPassword</label>
//                                 <input type="confimrpassword" id="confimrpassword"  value={confirmpassword}
//                                  onChange={e => setConfirmpassword(e.target.value)}></input>
//                             </span> 
//                             </div> 
                             
//                             <button className="btn-join" onClick={submitForm}>
//                                 {!state.loading ? 'Join Now!' : {/* <img src={loading} alt="loading" /> */}} 
//                             </button>    
//                             <Link to="/login">cancle</Link>
//             </div>
                       
//         );
// }
// export {RegisterPage};


/* third method */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../action/auth";
import { Link } from "react-router-dom";
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const dispatch = useDispatch();
    const onChangeConfirmpassword = (e: any) => {
        const confirmpassword = e.target.value;
        setConfirmpassword(confirmpassword);
    };
    const onChangeEmail = (e: any) => {
        const email = e.target.value;
        setEmail(email);
    };
    const onChangePassword = (e: any) => {
        const password = e.target.value;
        setPassword(password);
    };
    const handleRegister = (e: any) => {
        e.preventDefault();
        setSuccessful(false);
        dispatch(register(email, password, confirmpassword))
    };
    return (
        <div className="col-md-12">
            <div className="card card-container">
                <form onSubmit={handleRegister} >
                    {!successful && (
                        <div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    value={email}
                                    onChange={onChangeEmail}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={password}
                                    onChange={onChangePassword}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">confirm password</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="confirmpassword"
                                    value={confirmpassword}
                                    onChange={onChangeConfirmpassword}
                                />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block">Sign Up</button>
                                <Link to="/login">Login</Link>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};
export default Register;