import React from 'react'
import { useForm } from "react-hook-form"

const App = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  async function onSubmit(data){
    // API Call simulation
    await new Promise((resolve)=> setTimeout(resolve,5000));
    console.log("Submitting the form",data);
    
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name:</label>
        <input {...register("firstname")}/>
      </div>

      <div>
        <label>Middle Name:</label>
        <input {...register("middlename")}/>
      </div>

      <div>
        <label>Last Name:</label>
        <input {...register("lastname")}/>
      </div>
      <input type='submit'/>
    </form>
  )
}

export default App