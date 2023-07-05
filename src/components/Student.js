import  React,{useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container,Paper,Button } from '@mui/material';

export default function Student() {
const paperstyle={padding:'50px 20px' ,width:600,margin:'20px auto'}

const [name,setName]=useState('')
const [address,setAddress]=useState('')
const [student,setStudent]=useState([])



const handleClick=(e)=>{
  e.preventDefault()
  const student={name,address}
  console.log(student)
  fetch("http://localhost:8080/student/add",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(student)

}).then(()=>{
  console.log("New Student added")
})
}

useEffect(()=>{fetch("http://localhost:8080/student/getAll")
.then(res=>res.json())
.then(result=>{
  setStudent(result);
})
})

  return (
    <Container >
    <Paper elevation={3} style={paperstyle}>
    <h1 style={{color:'blue'}}>Add Student</h1>

   
     <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth style={{marginBottom:'5px'}} value={name}
      onChange={(e)=>setName(e.target.value)}
     />
      <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth style={{marginBottom:'8px'}}
        value={address}
   onChange={(e)=>setAddress(e.target.value)}
      />
  


<Button variant="contained" color="success" onClick={handleClick}>
  Submit
</Button>
   </Paper> 

{/* asagidaki kisim databaseden data almak icin yukaridada var */}
   {student.map(student=>
   ( <Paper elavation={3} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={student.id}>
  ID:{student.id}
  Name:{student.name}
  Address:{student.address}
   </Paper>))}
  
    
     
    </Container>
    
  );
}
