import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container ,Button,Form ,FormGroup,Row,Col,Dropdown} from "react-bootstrap";
import userService from "../Services/user-Service";



const AddData= ()=>{
const [data, setdata] = useState("");
const [due_date, setdue_date] = useState("");
const [priority, setpriority] = useState("");
const [successful, setSuccessful] = useState(false);



const onChangedata = (e: any) => {
  const data = e.target.value;
  setdata(data);
};
const onChangedue_date = (e: any) => {
  const due_date = e.target.value;
  setdue_date(due_date);
};
const onChangepriority = (e: any) => {
  const priority = e.target.value;
  setpriority(priority);
};
const history =useHistory();
    const logout = () => {
        localStorage.removeItem('auth_token');
        history.push('/login');
      }

      const PopPop = () => {
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
const handleAddData = (e: any) => {
    e.preventDefault();
    
   const store={data:data,due_date:due_date,priority:priority}
   fetch('https://rails-to-do-list-narola.herokuapp.com/v1/todos',{
    method:'POST',
    headers:{
        'Content-Type':'application/json',
        'access-token': localStorage.getItem("auth_token") || '',
    },
        body:JSON.stringify(store),
    })
    .then(response => response.json())
    .then(data =>{
        console.log('Success:',data);
        console.log('token:',data.auth_token);
       
    })
    .catch((error)=>{
        console.error('Error:',error);
    });   
};

const [posts, setPosts] = useState([]);

  
      userService.getAddData().then(
        (response) => {
          const { data = [] } = response;
          setPosts(data.data.todos);
          console.log("show data:::::::::::::",response.data.data)
        },
        (error) => {
          const _data1 =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
            setPosts(_data1);
        }
      );
  


    return(
        
        <Container>
           <Form onSubmit={handleAddData}>
                 
              <div>
                  <div className="row">
                    <Form.Group className="mb-3" controlId="data">
                      <Col md={{ span: 5, offset: 3}}>
                        <h3>Add New ToDo</h3>
                      <Form.Control
                        type="data"
                        placeholder="selectData"
                        value={data}
                        onChange={onChangedata}
                      />
                      </Col>
                     </Form.Group>
         
                    <Form.Group className="mb-3" controlId="duedate">
                      <Col md={{ span: 5, offset: 3}}>
                      <Form.Control
                        type="date"
                        value={due_date}
                        placeholder="Due date"
                        onChange={onChangedue_date}
                      />
                      </Col>
                     </Form.Group>

                    <Form.Group className="mb-3" controlId="priority">
                      <Col md={{ span: 5, offset: 3}}>
                      <Form.Control
                        type="number"
                        placeholder="priority"
                        onChange={onChangepriority}
                      />
                      </Col>
                     </Form.Group>
                    
                    <Col md={{ span: 3, offset: 4 }}>
                      <Button   variant="primary" type="=submit" onClick={PopPop}>
                                Create To Do
                               
                      </Button>

                      <Button   variant="primary" type="=submit" onClick={logout}>
                                Logout
                      </Button>
                    </Col>
                    <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Data</th>
                        <th>Due_Date</th>
                        <th>Priority</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.length !== 0 ?
                            posts.map((post:any, index:any) => {
                                return (
                                    <tr key={index}>
                                        <td>{post.id}</td>
                                        <td>{post.data}</td>
                                        <td>{post.due_date}</td>
                                        <td>{post.priority}</td>
                                    </tr>
                                )
                            })
                            : 'No data found'
                    }
                </tbody>
            </table>

                 </div>
                </div>

               
                
              
              </Form>
             
            </Container>
            
    )
}

export default AddData;