import React ,{useEffect ,useState} from 'react'
import { Button,Modal} from 'react-bootstrap';
import userService from "../Services/user-Service";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { PersonPlusFill } from 'react-bootstrap-icons';
import { useHistory } from "react-router-dom";
import CustomModel from './CustomModel';
import Module from 'module';

export default function HomePage() {
    const [posts, setPosts] = useState([]);
    const[id,setId]=useState(null);
    const history =useHistory();
    const[direction, setDirection] = useState('asc');
    
    useEffect(()=>{
  
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
  
    },[])

    useEffect(() => {
        
        return () => {
                
    userService.SortData('id', direction)
        .then((getData) => {
            setPosts(getData.data.data.todos);
        })
        }
    }, [direction]);

    const getData = () => {
        userService.getAddData()
            .then((getData) => {
                setPosts(getData.data.data.todos);
            })

    }
    const onDelete = (id: any) => {

        userService.DeleteData(id)
            .then(() => {
                getData();
            })
            setIsOpen(false);
    }
   
    const nextpath = (path: any) => {
        history.push(path);
      };
 
      function buttonFormatter(id:any){
          console.log(id);
        return <Button onClick={()=>showModal(id)} >Delete</Button>;
      }

    const getCaret = (order: any) => {
    console.log(order);
    setDirection(order)
      
    if (order === 'asc') {
      return (
        <span> up</span>
      );
    }
    if (order === 'desc') {
      return (
        <span> down</span>
      );
    }
    return (
      <span> up/down</span>
    );
  }
    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = (id:any) => {
        setId(id);
        setIsOpen(true);
      };
    
    const hideModal = () => {
        setIsOpen(false);
      };
    
    return (
        <div>
            
            <PersonPlusFill className="ml-4" color="royalblue" size={50} onClick={()=>nextpath("/adddata")}/>ToDos List
        
           <BootstrapTable data={posts} striped={true} hover={true} tableStyle={ { background: '#e6e6e6' }  } headerStyle={ { background: '#b3b3b3' } }>
                
                <TableHeaderColumn dataField='id' dataSort isKey  caretRender={(sort) => getCaret(sort)}>ID</TableHeaderColumn>
                <TableHeaderColumn dataField='data' dataSort  >Data</TableHeaderColumn>
                <TableHeaderColumn dataField='due_date' dataSort>Due_Date</TableHeaderColumn>
                <TableHeaderColumn dataField='priority' dataSort>Priority</TableHeaderColumn>
                <TableHeaderColumn dataField='id' dataFormat={buttonFormatter}>Delete</TableHeaderColumn>
          
           </BootstrapTable>

            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header>
                  <Modal.Title>Hi</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are You Sure..?</Modal.Body>
                <Modal.Footer>
                  <button  onClick={hideModal}>Cancel</button>
                  <button  onClick={() => onDelete(id)}>Ok</button>
                  
                </Modal.Footer>
            </Modal>
             {/* <CustomModel show={isOpen} onHide={hideModal}>
                <Modal.Header>
                  <Modal.Title> hii</Modal.Title>
                </Modal.Header> 
                <Modal.Body>Are You Sure..?</Modal.Body>
                <Modal.Footer>
                  <button  onClick={hideModal}>Cancel</button>
                  <button  onClick={() => onDelete(id)}>Ok</button>
                  
                </Modal.Footer>
            </CustomModel> */}
        
           </div>
           
            
    );
}
