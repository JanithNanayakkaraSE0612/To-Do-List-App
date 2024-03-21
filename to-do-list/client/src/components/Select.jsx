import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Select = () => {
    const handleDelete = (id) =>{
        axios.delete('http://localhost:3001/delete/'+id)
        .then(res => {console.log(res)
         window.location.reload()})
        .catch(err => console.log(err))
    }
  return (
        <div className='w-10 h-7 bg-white rounded p-3 '>
            <Link to='/update'>Edit</Link>
            <button className= 'btn btn-danger' onClick={(e)=> handleDelete(list._id)}>Delete</button>
        </div>
    
  )
}

export default Select