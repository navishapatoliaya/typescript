import React ,{useEffect ,useState} from 'react'
import AddData from './AddData'
import { Button ,Table} from 'react-bootstrap';
import userService from "../Services/user-Service";
import BootstrapTable from 'react-bootstrap-table-next';
import { MDBIcon} from "mdbreact";





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
    // const defaultSortedBy = [{
    //     dataField: "data",
    //     order: "asc"  // or desc
    // }];
    return (
        <div>
            < AddData />
             {/* <MDBIcon icon="portrait" /> */}
             <MDBIcon icon="spinner" spin size="3x" fixed />
            <Table striped bordered hover >
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
            </Table>
            {/* < BootstrapTable 

                keyField="id"
                data={posts}
                columns={columns}
                // defaultSortedBy={defaultSortedBy}
                
                
            >

            </BootstrapTable> */}
            
        </div>
    );
}
