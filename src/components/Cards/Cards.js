import React from 'react'
import "./cards.css"
import { handleClick } from '../ShopSlice';
import { useDispatch } from 'react-redux';
const Cards = ({item}) => {
  const dispatch=useDispatch();
  const {title,author,price,img}=item;    
  return (
    <div className='cards'>
        <div className='image_box'>
            <img src={img} alt=""/>
        </div>
        <div className='details'>
            <p>{title}</p>
            <p>{author}</p>
            <p>Narx-{price} so'm</p>
            <button onClick={()=>dispatch(handleClick(item))}>Savatga qo'shish</button>
        </div>
    </div>
  )
}

export default Cards