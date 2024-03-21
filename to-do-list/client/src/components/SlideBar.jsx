import React from 'react'

const SlideBar = () => {
  return (
    <div className="position-fixed t-65">
    <div className="inner__sidebar_menu">
        
        <ul>
          <li>
            <a href="#">
              <span className="icon">
                  <i className="fas fa-border-all"></i></span>
              <span className="list">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="active">
              <span className="icon"><i class="fas fa-chart-pie"></i></span>
              <span className="list">Charts</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon"><i class="fas fa-address-book"></i></span>
              <span className="list">Contact</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon"><i class="fas fa-address-card"></i></span>
              <span className="list">About</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon"><i class="fab fa-blogger"></i></span>
              <span className="list">Blogs</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon"><i class="fas fa-map-marked-alt"></i></span>
              <span className="list">Maps</span>
            </a>
          </li>
        </ul>

        <div className="hamburger">
            <div className="inner_hamburger">
                <span className="arrow">
                    <i className="fas fa-long-arrow-alt-left"></i>
                    <i className="fas fa-long-arrow-alt-right"></i>
                </span>
            </div>
        </div>

    </div>
</div>

  )
}

export default SlideBar