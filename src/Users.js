import React,{useState,Fragment, useEffect} from 'react'
import {Table} from 'react-bootstrap';
function Users(){
    const[user,setUser] = useState([])
    
    useEffect(()=>{
      fetch("http://dummy.restapiexample.com/api/v1/employees").then((data)=>{
     
        data.json().then(result =>{
          console.warn("result", result)
          setUser(result.data)
        })
      })
    },[])

    return(
        <Fragment>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Salary</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    {
      user.map((users,index)=>
        <tr key={index}>
          <td>{users.id}</td>
          <td>{users.employee_name}</td>
          <td>{users.employee_salary}</td>
          <td>{users.employee_age}</td>
        </tr>
      )

    }
   
  </tbody>
</Table>
        </Fragment>
    )
}
export default Users;