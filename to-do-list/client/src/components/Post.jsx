import React from 'react'
import '../components/post.css'
import { BsThreeDots } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Post = () => {
  return (
    <div className='container'>
    <div className="item_wrap">
        <div className="item">
            <div>
            <h3>The First task Title</h3>
            <Link to='/select' className='float-end'>
                     <BsThreeDots />
            </Link>
            </div>
           
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quisquam perspiciatis provident, minima aut in eum similique, impedit exercitationem perferendis tempora quibusdam cupiditate laborum earum? Libero placeat incidunt nisi ad.</p>
            <div>
                <div></div>
                <div>
                    <input type='checkbox'  />
                     <span>Done </span></div>
            </div>
        </div>
        <div className="item"><h3>The Second task Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quisquam perspiciatis provident, minima aut in eum similique, impedit exercitationem perferendis tempora quibusdam cupiditate laborum earum? Libero placeat incidunt nisi ad.</p>
            <div>
                <div></div>
                <div>
                    <input type='checkbox'  />
                     <span>Done </span></div>
            </div></div>
    </div>
    <div className="item_wrap">
        <div className="item"><h3>The Third task Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quisquam perspiciatis provident, minima aut in eum similique, impedit exercitationem perferendis tempora quibusdam cupiditate laborum earum? Libero placeat incidunt nisi ad.</p>
            <div>
                <div></div>
                <div>
                    <input type='checkbox'  />
                     <span>Done </span></div>
            </div></div>
        <div className="item"><h3>The Four task Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quisquam perspiciatis provident, minima aut in eum similique, impedit exercitationem perferendis tempora quibusdam cupiditate laborum earum? Libero placeat incidunt nisi ad.</p>
            <div>
                <div></div>
                <div>
                    <input type='checkbox'  />
                     <span>Done </span></div>
            </div></div>
    </div>
</div>
  )
}

export default Post