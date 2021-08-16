import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login} from "../action/auth";
import { Link } from "react-router-dom";
import { Container, Form ,Row,Col} from "react-bootstrap";
import { FormGroup,FormCheck,Button} from "react-bootstrap";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const dispatch = useDispatch();
   
    const onChangeEmail = (e: any) => {
        const email = e.target.value;
        setEmail(email);
    };
    const onChangePassword = (e: any) => {
        const password = e.target.value;
        setPassword(password);
    };
    const handleLogin = (e: any) => {
        e.preventDefault();
        setSuccessful(false);
        dispatch(login(email, password))
    };
    return (
        // <div className="col-md-12">
        //     <div className="card card-container">
        //         <form onSubmit={handleRegister} >
        //             {!successful && (
        //                 <div>
        //                     <div className="form-group">
        //                         <label htmlFor="email">Email</label>
        //                         <input
        //                             type="email"
        //                             className="form-control"
        //                             name="email"
        //                             value={email}
        //                             onChange={onChangeEmail}
        //                         />
        //                     </div>
        //                     <div className="form-group">
        //                         <label htmlFor="password">Password</label>
        //                         <input
        //                             type="password"
        //                             className="form-control"
        //                             name="password"
        //                             value={password}
        //                             onChange={onChangePassword}
        //                         />
        //                     </div>
                            
        //                     <div className="form-group">
        //                         <button className="btn btn-primary btn-block">Sign Up</button>
        //                         <Link to="/register">Registration</Link>
        //                     </div>
        //                 </div>
        //             )}
        //         </form>
        //     </div>
        // </div>
        <Container>
            <Form onSubmit={handleLogin}> 

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <h2>Login</h2>
                                    <Col md={{ span: 3, offset: 2 }}>
                                    <Form.Label> Email </Form.Label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={{ span: 6, offset: 3 }}>
                                    <Form.Control type="email" placeholder="Email" value={email}  onChange={onChangeEmail}/>
                                    </Col>
                                </Row>
                    </Form.Group>  
                  
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                               <Row>
                                   <Col md={{ span: 3, offset: 2 }}>
                                   <Form.Label> Password </Form.Label>
                                   </Col>
                               </Row>
                               <Row>
                                   <Col md={{ span: 6, offset: 3 }}>
                                   <Form.Control type="password" placeholder="Password" value={password}  onChange={onChangePassword}/>
                                   </Col>
                               </Row>
                    </Form.Group> 
                                 
                    <Row>
                       <Col md={{ span: 6, offset: 3 }}>
                            <Button   variant="primary" type="signup">
                            Sign up
                            </Button>
                            &nbsp;&nbsp;
                            <Link to="/register">Registration</Link> 
                       </Col>
                   </Row>
                      
                </Form>
        </Container>
    );
};
export default LoginPage;