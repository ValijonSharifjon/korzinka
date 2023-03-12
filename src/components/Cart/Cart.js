import React, { useEffect } from 'react'
import "./cart.css"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleRemove } from '../ShopSlice'
import { handleChange1,handleChange2 } from '../ShopSlice' 
import Navbar from '../Navbar/Navbar'
const Cart = ({cart}) => {
  const [price,setPrice]=useState(0)
  const dispatch=useDispatch();
  
  const handlePrice=()=>{
    let ans=0;
    cart.map((item)=>(
      ans+=item.amount*item.price
    ))
    setPrice(ans)
  }
  useEffect(()=>{
    handlePrice()
  })


  return (
    <>
      <Navbar size={cart.length}/>
      <article>
      {
        cart?.map((item)=>(
          <div className='cart_box' key={item.id}>
            <div className='cart_img'>
              <img src={item.img} alt=""/>
              <p>{item.title}</p>
            </div>
            <div>
              <button onClick={()=>dispatch(handleChange1(item))}>+</button>
              <button>{item.amount}</button>
              <button onClick={()=>dispatch(handleChange2(item))}>-</button>
            </div>
            <div>
              <span>{item.price}</span>
              <button onClick={()=>dispatch(handleRemove(item))}>O'chirish</button>
            </div>
          </div>
        ))
      }
      <div className='total'>
        <span>Savatingizning umumiy narxi</span>
        <span>So'm-{price}</span>
      </div>
    </article>
    </>
  )
}

export default Cart