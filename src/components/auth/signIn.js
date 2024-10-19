import React from 'react'
import BasicExample from '../navebar'
import { useState } from 'react'
import { addUser } from '../../UserReducer'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const navigate=useNavigate()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [cpassword,setCpassword]=useState()
    const [msg,setMsg]=useState()
    const users=useSelector((state)=>state.users)
    const dispatch = useDispatch();

  

    const handleSubmit=(event)=>{
        event.preventDefault();
        if (password !== cpassword){
            setMsg('password do not match')
            
        }
        else{
        dispatch(addUser({id: users[users.length-1].id+1 ,email,password}))
        navigate('/')
        }
    }

  return (
//     <>
//  <BasicExample/>
//  <div className='p-5 m-5'>
// <div className='text-center'>
//      <h3>Sign Up</h3>

// </div>

 
//  <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor='name'>Email:</label>
//                     <input type='email' name='name' className='form-control' placeholder='Enter your Email'
//                     onChange={e=>setEmail(e.target.value)} />
//                 </div>
//                 <div>
//                     <label htmlFor='email'>Password:</label>
//                     <input type='password' name='password' className='form-control' placeholder=' Password'
//                     onChange={e=>setPassword(e.target.value)} ></input>
//                 </div>
//                 <div>
//                     <label htmlFor='email'>Confirm Passoword :</label>
//                     <input type='password' name='Cpassword' className='form-control' placeholder='Confirm Password'
//                     onChange={e=>setCpassword(e.target.value)} ></input>
//                 </div>
//                 <br>
//                 </br>
//                 <div className='text-center'>
//             <button className='btn btn-info'>Submit</button>
 
//                 </div>
//             </form>
//             </div>
      
//     </>
<div className="container-fluid">
<BasicExample />
<div className="row justify-content-center">
    <div className="col-md-6 p-5 m-5 bg-light rounded shadow">
        <h3 className="text-center mb-4">SignUp Here</h3>
        <p className="text-danger text-center">{msg}</p>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor='email' className='form-label'>Email:</label>
                <input
                    type='email'
                    id='email'
                    className='form-control'
                    placeholder='Enter your Email'
                    onChange={e => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor='password' className='form-label'>Password:</label>
                <input
                    type='password'
                    id='password'
                    className='form-control'
                    placeholder='Enter your Password'
                    onChange={e => setPassword(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor='password' className='form-label'>Password:</label>
                <input
                    type='password'
                    id='password'
                    className='form-control'
                    placeholder='Confirm your Password'
                    onChange={e => setCpassword(e.target.value)}
                    required
                />
            </div>
            <button className='btn btn-info w-100' type='submit'>SignUp</button>
        </form>
    </div>
</div>
</div>
  );
}

export default Signin
