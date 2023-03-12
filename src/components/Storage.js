import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { handleClick1 } from './ShopSlice'
const Storage = () => {
    const {cart}=useSelector(state=>state.shopSlice)
    const [id,setId]=useState()
    const [title,setTitle]=useState()
    const [author,setAuthor]=useState()
    const [price,setPrice]=useState()
    const [img,setImg]=useState()
    const [amount,setAmount]=useState()

    const dispatch=useDispatch()

    
    const handleClick=()=>{
      dispatch(handleClick1({
        id:Number(id),
        title:title,
        author:author,
        price: Number(price),
        img: img,
        amount: Number(amount),
      }))
    }
  return (
    <>
      <Navbar size={cart.length}/>
      <div>
      <div class="input-group input-group-sm mb-3 mt-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">Id</span>
        <input type="number"
         class="form-control"
         aria-label="Sizing example input"
         aria-describedby="inputGroup-sizing-sm"
         value={id} 
         onChange={e=>setId(e.target.value)}
         />
      </div>

      <div class="input-group input-group-sm mb-3 mt-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">Title</span>
        <input class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
        value={title}
        onChange={e=>setTitle(e.target.value)}
        />
      </div>

      <div class="input-group input-group-sm mb-3 mt-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">Author</span>
        <input type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
        value={author}
        onChange={e=>setAuthor(e.target.value)}/>
      </div>

      <div class="input-group input-group-sm mb-3 mt-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">Price</span>
        <input type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
        value={price}
        onChange={e=>setPrice(e.target.value)}/>
      </div>

      <div class="input-group input-group-sm mb-3 mt-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">Img</span>
        <input type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
        value={img}
        onChange={e=>setImg(e.target.value)}/>
      </div>

      <div class="input-group input-group-sm mb-3 mt-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">Amount</span>
        <input type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
        value={amount}
        onChange={e=>setAmount(e.target.value)}/>
      </div>
      <input class="btn btn-primary" type="submit" value="Submit" onClick={handleClick}></input>
      </div>
    </>
  )
}

export default Storage