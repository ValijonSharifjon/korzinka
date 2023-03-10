import React from 'react'
import "../styles/cards.css"

const Cards = ({item,handleClick}) => {
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
            <button onClick={()=>handleClick(item)}>Savatga qo'shish</button>
        </div>
    </div>
  )
}

export default Cards