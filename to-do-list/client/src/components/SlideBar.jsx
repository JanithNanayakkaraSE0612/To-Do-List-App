import React ,{useState} from 'react'
import '../components/sliderBar.css'
import { MDBRadio } from 'mdb-react-ui-kit';

const SlideBar = () => {
  const [topping , setTopping] = useState([])

  const onOptionChange = e => {
    setTopping(e.target.value)
  }
  return (
    <div className="sidebar_menu">
    <div className="inner__sidebar_menu">      
        <ul>
          <li>
              <span>todo</span>
          </li>
          <li>
          <MDBRadio  name='topping' id='inlineRadio1' value='Work' label='work' checked={topping === "Work"} onChange={onOptionChange} />
          </li>
          <li>
          <MDBRadio  name='topping' id='inlineRadio1' value='Work' label='study' checked={topping === "Work"} onChange={onOptionChange}  />
          </li>
          <li>
          <MDBRadio  name='topping' id='inlineRadio1' value='Work' label='entatement' checked={topping === "Work"} onChange={onOptionChange} />
          </li>
          <li>
          <MDBRadio  name='topping' id='inlineRadio1' value='Work' label='family' checked={topping === "Work"} onChange={onOptionChange}  />  
          </li>
          <li>
          <input type='checkbox'  />
           <span>Hide Done Tasks</span>
          </li>
        </ul>
    </div>
</div>

  )
}

export default SlideBar