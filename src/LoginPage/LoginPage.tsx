// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// interface LoginProp{
//     name?: any;
//     value?: any;
//     register?: any;
//     registering: any;
//     submitted:any;
//     user: string

// }
// interface Fields{
   
//     userName?: string,
//     password?: string   
// }
// interface LoginState{
   
//     submitted :boolean;
//     user?: Fields;

// }

// export class LoginPage extends Component {
//     constructor(props :LoginProp){
//         super(props);
//         this.state={
//             user:{
          
               
//                 userName : '',
//                 password : '',
//             },
//             submitted:false
//         };
//     }  
//     handleChange = (event: any)=>{
//         this.setState({user: {
//                 ...this.state.user,
//                 [event?.target.name]: event?.target.value
//             }});
//         // this.setState(Object.assign(this.state,{user,[name]:value}));
//     }
//     render() {
//         const {user,submitted} =this.state;
//         return (
//             <div className="col-md-6 col-md-offset-3"> 
//                 <h2>Login</h2>
//                 <form name="form">
//                     <div className={"form-group" + (submitted && !user?.firstName ? ' has-error' : '')}>
//                         <label htmlFor="username">UserName</label>
//                         <input type="text" className="form-control" name="username"  value={user?.userName} onChange={this.handleChange}/> 

//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password">Password</label>
//                         <input type="text" className="form-control" name="password"  value={user?.password} onChange={this.handleChange} />

//                     </div>
//                     <div className="form-group">
                        
//                         <button className="btn btn-primary">Login</button>
//                         <Link to="/register" className="btn btn-link">Register</Link>

//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }

// export default LoginPage;

import React ,{useState}from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {

    const [state, setState] = useState({loading: false});
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

    async function submitForm() {
        setState({ ...state, loading: true});
        const response = await fetch(`https://rails-to-do-list-narola.herokuapp.com/v1/login`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email:email, password: password})
        });
        const content = await response.json();
        setState({ ...state, loading: false});
      }

    return (
        <div>
            <h1>Login</h1>
            <div>
                                <span>
                                    <label>Email</label>
                                    <input type="input" id='email'  value={email}  
                                    onChange={e => setEmail(e.target.value)}></input>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <label>Password</label>
                                    <input type="password" id="password" value={password}
                                    onChange={e => setPassword(e.target.value)}></input>
                                </span>
                            </div>
                            <button className="btn-join" onClick={submitForm}>
                                {!state.loading ? 'Join Now!' : {/* <img src={loading} alt="loading" /> */}} 
                            </button>  
                            <Link to="/login">Register</Link> 

        </div>
    )
}
