import React ,{useEffect ,useState} from 'react'
import AddData from './AddData'
import { Button ,Table} from 'react-bootstrap';
import userService from "../Services/user-Service";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { PersonPlusFill } from 'react-bootstrap-icons';

export default function HomePage() {
    const [posts, setPosts] = useState([]);
    
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
    const getData = () => {
        userService.getAddData()
            .then((getData) => {
                setPosts(getData.data.data.todos);
            })
    }
    const onDelete = (id: any) => {
        userService.deletedata(id)
            .then(() => {
                getData();
            })
    }
    
    const onSort=()=>{
        userService.Sortdata()
        .then((getData) => {
            setPosts(getData.data.data.todos);
        })
    }

    // const columns=[
    //     {
    //         dataField:'id',
    //         text: "ID"
    //     },
    //     {
    //         dataField:'data',
    //         text: "Data",
    //         sort:true
    //     },
    //     {
    //         dataField:'due_date',
    //         text: "Due_Date",
    //         sort:true
    //     },
    //     {
    //         dataField:'priority',
    //         text: "Priority",
    //         sort:true
    //     },
    //     {
    //         dataField:'priority',
    //         text: "Priority",
    //         sort:true
    //     },
    // ]
    <style type="text/css">
        {`
            .btn-flat{
                backgroung-color:#08c
                color:white
            }
            .btn-xxl{
                padding:1rem 1.5rem;
                font-size:1.5rem;
            }
        `}
    </style>
      function buttonFormatter(id:any){
        return <Button onClick={()=>onDelete(id)}>Delete</Button>;
      }
    return (
        <div>
            
            <div>
             {/* <MDBIcon icon="portrait" /> */}
             
            {/* <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Data</th>
                        <th>Due_Date</th>
                        <th>Priority</th>
                        <th>Delete</th>
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
                                        <td>
                                        <Button variant="primary" onClick={()=>onDelete(post.id) }>Delete</Button>
                                        </td>
                                       
                                    </tr>
                                )
                            })
                            : 'No data found'
                    }
                    
                </tbody>
            </Table> */}
            <div>
            
            <PersonPlusFill className="ml-4" color="royalblue" size={50}/>ToDos List
           
            </div>
           </div>
           <BootstrapTable data={posts} striped={true} hover={true}>
                <TableHeaderColumn dataField='id' dataSort isKey>ID</TableHeaderColumn>
                <TableHeaderColumn dataField='data' dataSort >Data</TableHeaderColumn>
                <TableHeaderColumn dataField='due_date' dataSort>Due_Date</TableHeaderColumn>
                <TableHeaderColumn dataField='priority' dataSort>Priority</TableHeaderColumn>
                <TableHeaderColumn dataField='id' dataFormat={buttonFormatter} >Delete</TableHeaderColumn>
           </BootstrapTable>
        
           </div>
            
    );
}
