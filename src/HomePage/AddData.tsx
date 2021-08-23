import React, {  useState } from "react";
import { useHistory } from "react-router-dom";
import { Container ,Button,Form ,Col,Modal} from "react-bootstrap";
import { PersonPlusFill } from 'react-bootstrap-icons';



const AddData= ()=>{
const [data, setdata] = useState("");
const [due_date, setdue_date] = useState("");
const [priority, setpriority] = useState("");
const history =useHistory();


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

    const logout = () => {
        localStorage.removeItem('auth_token');
        history.push('/login');
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

const nextpath = (path: any) => {
  history.push(path);
};


const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };
    return(
        
        <Container>
           <Form onSubmit={handleAddData}>
                 
              <div>
                  <div className="row">
                    <Form.Group className="mb-3" controlId="data">
                    <Col md={{ span: 5, offset: 3}}>
                    
                    </Col>
                      <Col md={{ span: 5, offset: 3}}>
                        <PersonPlusFill className="ml-4" color="royalblue" size={50} onClick={()=>nextpath("/home")} />Add New ToDo
                        
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
                      <Button   variant="primary" type="=submit" onClick={showModal}>
                                Create To Do
                               
                      </Button>
                      &nbsp;&nbsp;

                      <Button   variant="primary" type="=submit" onClick={logout}>
                                Logout
                      </Button>
                    </Col>
                </div>
              </div>
                </Form>
                <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header>
                  <Modal.Title>Hi</Modal.Title>
                </Modal.Header>
                <Modal.Body>TODo Addedd successfully</Modal.Body>
                <Modal.Footer>
                  <button onClick={hideModal}>Cancel</button>
                  <button onClick={() => nextpath("/home")}>Back to TODo List</button>
                </Modal.Footer>
              </Modal>
             
            </Container>
            
    )
}

export default AddData;