import React from 'react'
import "./order.css"
import Message from "../../assets/message.png"

const Orders = () => {
  
  const currentUser = {
    id: 1,
    usernam: "John Doe",
    isSeller:true,
  }

  return (
    <div className='Orders'>
      <div className='ordersContainer'>
        <div className='ordersTitle'>
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer":"Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img className='imgee' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>
              Gig1
            </td>
            <td>88</td>
            <td>123</td>
            <td>
              <img src={Message} className="delete" alt="" />
            </td>
            
          </tr>
          <tr>
            <td>
              <img className='imgee' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>
              Gig1
            </td>
            <td>88</td>
            <td>123</td>
            <td>
              <img src={Message} className="delete" alt="" />
            </td>
            
          </tr>
          <tr>
            <td>
              <img className='imgee' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>
              Gig1
            </td>
            <td>88</td>
            <td>123</td>
            <td>
              <img src={Message} className="delete" alt="" />
            </td>
            
          </tr>
          <tr>
            <td>
              <img className='imgee' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>
              Gig1
            </td>
            <td>88</td>
            <td>123</td>
            <td>
              <img src={Message} className="delete" alt="" />
            </td>
            
          </tr>
          <tr>
            <td>
              <img className='imgee' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>
              Gig1
            </td>
            <td>88</td>
            <td>123</td>
            <td>
              <img src={Message} className="delete" alt="" />
            </td>
            
          </tr>
          <tr>
            <td>
              <img className='imgee' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>
              Gig1
            </td>
            <td>88</td>
            <td>123</td>
            <td>
              <img src={Message} className="delete" alt="" />
            </td>
            
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Orders
