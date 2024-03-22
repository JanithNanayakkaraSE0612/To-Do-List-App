import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar className="bg-white ">
    <Container>
     
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className='m-2'>
         <Link to='/create' className=''>
            <IoMdAdd size={40}/>
        </Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
