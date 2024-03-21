import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { MDBRadio } from 'mdb-react-ui-kit';

const Create = () => {
  const [title , setTitle] = useState();
  const [Description , setDescription] = useState(); 
  const [topping , setTopping] = useState([])

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }

  const onOptionChange = e => {
    setTopping(e.target.value)
  }
  const navigate = useNavigate()
  const Add =(e)=>{
    e.PreventDefault();
    axios.post("http://localhost:3001/create",{title,Description})
    .then(result =>{
      console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err))
  }

  const [currentDate, setCurrentDate] = useState(getDate());
  return (
    <div className='d-flex vh-100 bg-secondary  justify-content-center align-items-center  '>
        <div className='w-48 bg-white rounded p-3'>
          <form onSubmit={Add}>
            <div className='mb-4'>
            <Link to='/' className='text-black text-decoration-none  '>Cancel</Link>
          <button className='btn btn-secondary btn-md float-end   '>Add</button>
          
            </div>
          <div className=' p-2 '>
               <h6>Today's Date : {currentDate}</h6>
          </div>
          <div className='mb-2'>
              <label htmlFor=''>Title</label>
              <input type='text' placeholder='add a title' className='form-control ' onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className='mb-2'>
              <label htmlFor=''>Description</label>
              <input type='text' placeholder='add a description' className='form-control 'onChange={(e)=> setDescription(e.target.value)}/>
          </div>
          <div className='mb-4'>
              <label className='m-3' htmlFor="">Tags</label>
                  <div className='mb-6'>
                  <MDBRadio className='m-2' name='topping' id='inlineRadio1' value='Work' label='work' checked={topping === "Work"} onChange={onOptionChange} inline />
                  <MDBRadio className='m-2' name='topping' id='inlineRadio2' value='Study' label='study' checked={topping === "Study"} onChange={onOptionChange}  inline />
                  <MDBRadio className='m-2' name='topping' id='inlineRadio3' value='Entainment' label='entainment'checked={topping === "Entainment"} onChange={onOptionChange} inline />
                  <MDBRadio className='m-2' name='topping' id='inlineRadio4' value='Family' label='family' checked={topping ==="Family"} onChange={onOptionChange} inline />
              </div>    
            </div>
          </form> 
        </div>
    </div>
  )
}

export default Create