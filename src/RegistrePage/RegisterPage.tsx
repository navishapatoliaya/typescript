
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../action/auth";
import { Link } from "react-router-dom";
import { Container, Form ,Row,Col} from "react-bootstrap";
import { Button} from "react-bootstrap";



const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [confirmpassword, setConfirmpassword] = useState("");
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
    // const onChangeConfirmpassword = (e: any) => {
    //     const confirmpassword = e.target.value;
    //     setConfirmpassword(confirmpassword);
    // };
    const handleRegister = (e: any) => {
        e.preventDefault();
        setSuccessful(false);
        dispatch(register(email, password))
    };
    return (
        <Container>
            <Form onSubmit={handleRegister}> 
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <h2>Registration</h2>
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
                            <Link to="/login">Login</Link> 
                       </Col>
                   </Row>
                      
                </Form>
        </Container>
         
    );
};
export default Register;