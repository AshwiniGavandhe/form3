import React from 'react';
import{ useForm}from "react-hook-form";


function Student(props) {
const {register,formState:{errors},handleSubmit } =useForm();
const onSubmit= data=> console.log(data);
 return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <lable>Firstname</lable>
 <input {...register("firstName",{required:true,maxLength:20})}/>
 {errors.firstName?.type==="required"&&"first name is required"}
 <br></br>
MIDDLE:
 <input {...register("middleName",{required:true,maxLength:20})}/>
 {errors.middleName?.type==="required"&&"middle name is required"}
 <br></br>

LAST:
 <input {...register("lastName",{required:true,maxLength:20 ,pattern: /^[A-Za-z]+$/i})}/>
 {errors.lastName?.type==="required"&&"last name is required"}
<br></br>
phone:
<input {...register("phone",{required:true,maxLength:20})}/>
 {errors.phone?.type==="required"&&"phone no is required"}
<br></br>


<input {...register("Email",{required:true,maxLength:20,})}/>
 {errors.Email?.type==="required"&&"email name is required"}
<br></br>




<select{...register("Availble course")}>
<option value="B.A">B.A</option>
<option value="B.SC">B.SC</option>
<option value="M.SC">M.SC</option>
</select>




 <input type="submit"/>
    </form>
    </>
   
  )
}

export default Student;
