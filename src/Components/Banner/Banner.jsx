import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='bannerButtons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptate molestiae ad perferendis, laboriosam ratione dolorem ea fuga dolor ab labore vero velit, recusandae dolores temporibus qui quis facere neque.</h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner