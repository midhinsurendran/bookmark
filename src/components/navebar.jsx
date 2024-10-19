import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeUser } from '../UserReducer';
import { useDispatch } from 'react-redux';
import { logout } from '../UserReducer';

function BasicExample() {
  const user=useSelector((state)=>state.auth.user)
  const dispatch=useDispatch()

  

  return (
    <>
    <Navbar expand="lg" className="text-light bg-info">
      <Container >
      <Link className='btn btn-primary mx-5' to={'/login'}>Login</Link>
      <Link className='btn btn-success mr-5' to={'/sinup'}>Signup</Link>
        <Navbar.Brand className='text-light mr-5' href="#home">Personal Bookmarking Site</Navbar.Brand>
        <Navbar.Toggle className='bg-white' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-white" >
            <Link className=' btn btn-light text-dark m-3' to={'/'}>Home</Link>
            <Link className='btn btn-light text-dark m-3' to={'/read'}>Listing Page</Link>
            <Link className=' btn btn-light text-dark m-3 ' to={'/create'}>Add URL</Link>
           

          </Nav>
        </Navbar.Collapse>
      </Container>
      {user?
      <>
      <p>welcome < small>{user}</small></p>
      </>:
      null
      }
      {user?
      <>
      <button className='btn btn-danger' onClick={()=>{
        dispatch(removeUser())
        dispatch(logout())

      }}>Logout</button>
      </>:
      <div className='px-5'>


      </div>
      
      }
    </Navbar>



{/* <Create></Create>
<Read></Read> */}

</>

  );
}

export default BasicExample;