import React,{useState} from 'react' ;
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom' ;
import axios from 'axios';

const Update = () => {
    const {id} = useParams()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate() 

    const [topping , setTopping] = useState([])

    const onOptionChange = e => {
        setTopping(e.target.value)
      }

    useEffect(()=> {
        axios.get('http://localhost:3001/get/' +id)
        .then(result => {console.log(result)
            setTitle(result.data.title)
            setDescription(result.data.description)
        })
        .catch(err => console.log(err))
    }, [])

    const Update = (e) =>{
        e.PreventDefault();
        axios.put("http://localhost:3001/update/"+id, {title,description} )
        .then(result => {
          console.log(result)
          navigate('/')
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex vh-100  bg-primary justify-content-center align-items-center '>
    <div className='w-50 bg-white rounded p-3 '>
        <form onSubmit={Update}>
            <h2>Update List</h2>
            <div className='mb-4'>
                 <Link to='/' className='text-black text-decoration-none  '>Cancel</Link>
                 <button className='btn btn-secondary btn-md float-end   '>Update</button>
                 </div>
                 <div className='mb-2'>
                <label htmlFor="">Title</label>
                <input type="text" placeholder='edit a title' className='form-control ' 
                value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <label htmlFor="">Description</label>
                <input type="text" placeholder='edit Description' className='form-control ' 
                value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div className='mb-4'>
              <label className='m-3' htmlFor="">Tags</label>
                  <div className='mb-6'>
                  <MDBRadio className='m-2' name='topping' id='inlineRadio1' value='Work' label='work' checked={topping === "Work"} onChange={onOptionChange} inline />
                  <MDBRadio className='m-2' name='topping' id='inlineRadio2' value='Study' label='study' checked={topping === "Study"} onChange={onOptionChange}  inline />
                  <MDBRadio className='m-2' name='topping' id='inlineRadio2' value='Entainment' label='entainment'checked={topping === "Entainment"} onChange={onOptionChange} inline />
                  <MDBRadio className='m-2' name='topping' id='inlineRadio3' value='Family' label='family' checked={topping ==="Family"} onChange={onOptionChange} inline />
              </div>    
            </div>
        </form>
    </div>
</div>
  )
}

export default Update