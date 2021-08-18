import React ,{useEffect ,useState} from 'react'
import AddData from './AddData'
import { Button } from 'react-bootstrap';
import userService from "../Services/user-Service";



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
    

    return (
        <div>
            < AddData />
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
                                        <Button variant="primary" onClick={()=>onDelete(post.id) }>Delete</Button>
                                    </tr>
                                )
                            })
                            : 'No data found'
                    }
                </tbody>
            </table>
        </div>
    )
}
