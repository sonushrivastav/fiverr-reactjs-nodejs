import React from 'react'
import "./add.css"
const Add = () => {
  return (
    <div className='add'>
      <div className='addContainer'>
        <h1>Add new Gig</h1>
        <div className='sections'>
          <label htmlFor="">Title</label>
          <input type="text" placeholder="e.g. I will do something I'm really good at" />
          <label htmlFor="">Category</label>
          <select name="cats" id="cats">
            <option value="design">Design</option>
            <option value="web">Web Development</option>
            <option value="animation">Animation</option>
            <option value="music">Music</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Add
