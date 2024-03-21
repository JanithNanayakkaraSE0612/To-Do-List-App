import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { IoMdAdd } from "react-icons/io";
import { MDBRadio } from 'mdb-react-ui-kit';
import Box from '@mui/material/Box';
import Item from '@mui/material/ListItem';
import axios from 'axios';
import { CiMenuKebab } from "react-icons/ci";

const Home = () => {
  const [topping , setTopping] = useState([])

  const [list , setList] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3001')
    .then(result => setList(result.data))
    .catch(err => console.log(err))
  },[])

  const onOptionChange = e => {
    setTopping(e.target.value)
  }
  
  return (
  
  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
     <Box className='m-lg-3 ' gridColumn="span 10">
       <Item>
        <h1 className='mb-5 mt-3'> todo</h1>
        </Item>
   </Box>
   <Box className='m-lg-8 h-25  ' gridColumn="span 2">
        <Item> 
          <div>
              <Link to='/create' className='mb-10'>
        <IoMdAdd width={25}   />
        </Link>
       </div></Item>
    </Box>
    <Box className="m-lg-4  h-75 w-15" gridColumn="span 2 "  >
       <Item >
        <nav>
          <div className='mb-5 '>
          <MDBRadio  name='topping' id='inlineRadio1' value='Work' label='work' checked={topping === "Work"} onChange={onOptionChange} />
          <MDBRadio  name='topping' id='inlineRadio1' value='Work' label='study' checked={topping === "Work"} onChange={onOptionChange}  />
          <MDBRadio  name='topping' id='inlineRadio1' value='Work' label='entatement' checked={topping === "Work"} onChange={onOptionChange} />
          <MDBRadio  name='topping' id='inlineRadio1' value='Work' label='family' checked={topping === "Work"} onChange={onOptionChange}  />  
          </div>
       <label>
           <input type='checkbox'  />
           <span>Hide Done Tasks</span>
       </label> 
        </nav>
  
       </Item>
    </Box>
    <Box className="h-75 " gridColumn="span 10 ">
        <Item>
            <div>
              {
                  list.map((list)=>{
                    return <div className='w-50 h-25 bg-light '>
                      <Link to='/selectList'>
                      <CiMenuKebab/>
                      </Link> 
                        {/* <h3>{list.}</h3>
                        <p>{list.}</p>
                        <div>{list.}</div> */}
                          <label>
                               <input type='checkbox'  />
                               <span> Done</span>
                         </label> 
                    </div>
                  })
              }
                
            </div>
        </Item>
      </Box>
    </Box>
  )
}

export default Home