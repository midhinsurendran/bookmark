import React from 'react'
import BasicExample from '../navebar'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../../UserReducer'
import checkGuest from '../mainAuth/gustAuth'
import { login } from '../../UserReducer'

const Login = () => {
    const [b,setB]=useState(true)
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [msg,setMsg]=useState()
    const users=useSelector((state)=>state.users)
    const navigate=useNavigate()
    const dispatch=useDispatch()



    const handleSubmit=(event)=>{
        event.preventDefault();

        users.map((user) => {
            if (user.email === email && user.password === password) {
    
              setB(true); 
              dispatch(setUser(user.email))
              console.log('user login')
              dispatch(login())
              navigate('/')
    
            }else{
                setMsg("wrong user name or password")

            }
            return null;
          });
          
    

        

   
        
    }


  return (
    // <div>
    //     <BasicExample/>
    //     <div className='p-5 m-5 text-center'>
    //         <div className='text-center'>
    //     <h3>Login here </h3>
    //     </div>
    //     <p className='text-danger'>{msg}</p>
    //     <form onSubmit={handleSubmit}>
    //             <div>
    //                 <label htmlFor='name'>Email:</label>
    //                 <input type='email' name='name' className='form-control' placeholder='Enter your Email'
    //                 onChange={e=>setEmail(e.target.value)} />
    //             </div>
    //             <div>
    //                 <label htmlFor='email'>Password:</label>
    //                 <input type='password' name='password' className='form-control' placeholder=' password'
    //                 onChange={e=>setPassword(e.target.value)} ></input>
    //             </div>

    //             <br>
    //             </br>
    //             <button className='btn btn-info'>LogIn</button>
    //         </form>

    //         </div>
      
    // </div>

    <div className="container-fluid">
    <BasicExample />
    <div className="row justify-content-center">
        <div className="col-md-6 p-5 m-5 bg-light rounded shadow">
            <h3 className="text-center mb-4">Login Here</h3>
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
                <button className='btn btn-info w-100' type='submit'>Log In</button>
            </form>
        </div>
    </div>
</div>

  );
}

export default checkGuest(Login)
