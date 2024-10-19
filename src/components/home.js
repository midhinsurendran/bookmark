import React from 'react'
import BasicExample from './navebar'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <BasicExample></BasicExample>
      <div className='p-5 m-5'>
        <div className='p-5 '>
            <Link className='btn btn-pill btn-success m-2 w-100' to={'/create'}>Add URL</Link>
           
            <Link className='btn btn-pill btn-info m-2 w-100' to={'/read'}>View List</Link>

           

        </div>
      </div>
    </div>
  )
}

export default Home
