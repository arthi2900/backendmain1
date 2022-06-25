import React from 'react'
import { Api } from '../Api/Api';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useHistory } from 'react-router-dom';
import {useFormik} from "formik";
import *as yup from "yup";
export const UserValidationSchema=yup.object({
  name: yup.string().required("why not fill this name???"),
password: yup.string().required("why not fill u password?").min(8).max(12,"maxium length of password"),
  email: yup.string().required("why not fill this email???"),

})
export function Signup() {
       const history=useHistory();
    const formik = useFormik({
      initialValues: { name: "",email:"",password:"" },
    validationSchema:UserValidationSchema, 
    onSubmit:(newUser)=>{
      addUser(newUser);
        },
  });
   const addUser= (newUser)=>{
               console.log("onSubmit",newUser);
                fetch(`${Api}/User`,{method:"POST",
              body:JSON.stringify(newUser),
            headers:{
              'accept': 'application/json',
                          },
            }).then(()=>history.push("/User/Home"));
            };
                  
       return (
      <form onSubmit={formik.handleSubmit} className="add-movie-form">
        <TextField label="User Name" id="name" type="text" error={formik.touched.name && formik.errors.name} helperText={formik.touched.name && formik.errors.name?formik.errors.name :"" }
        onBlur={formik.handleChange} onChange={formik.handleChange}  value={formik.values.name} />
        <TextField label="Email" id="email"type="text" onBlur={formik.handleChange} onChange={formik.handleChange}  value={formik.values.email} error={formik.touched.email && formik.errors.email} 
        helperText={formik.touched.email && formik.errors.email?formik.errors.email :"" }/>
         <TextField label="password" id="password" type="password" 
         onBlur={formik.handleChange} onChange={formik.handleChange}  
         value={formik.values.password} 
         error={formik.touched.password && formik.errors.password} 
         helperText={formik.touched.password && formik.errors.password?formik.errors.password :"" }/>
         <Button type="submit" variant="contained" >signup</Button>
      </form>
    );
  
  }