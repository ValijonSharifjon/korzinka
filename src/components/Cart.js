import React, { useEffect } from 'react'
import { useState } from 'react'
import "../styles/cart.css"
const Cart = ({cart,setCart,handleChange}) => {
  const [price,setPrice]=useState(0)
  
  const handlePrice=()=>{
    let ans=0;
    cart.map((item)=>(
      ans+=item.amount*item.price
    ))
    setPrice(ans)
  }

  const handleRemove=(id)=>{
    const arr=cart.filter(item=>item.id!==id)
    setCart(arr)
    // handlePrice()
  }

  useEffect(()=>{
    handlePrice()
  })


  return (
    <article>
      {
        cart?.map((item)=>(
          <div className='cart_box' key={item.id}>
            <div className='cart_img'>
              <img src={item.img} alt=""/>
              <p>{item.title}</p>
            </div>
            <div>
              <button onClick={()=>handleChange(item,+1)}>+</button>
              <button>{item.amount}</button>
              <button onClick={()=>handleChange(item,-1)}>-</button>
            </div>
            <div>
              <span>{item.price}</span>
              <button onClick={()=>handleRemove(item.id)}>O'chirish</button>
            </div>
          </div>
        ))
      }
      <div className='total'>
        <span>Savatingizning umumiy narxi</span>
        <span>So'm-{price}</span>
      </div>
    </article>
  )
}

export default Cart