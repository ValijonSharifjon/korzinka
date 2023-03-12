import React from 'react'
import "./amazon.css"
import Cards from '../Cards/Cards'
// import list from '../data'
import { useSelector } from 'react-redux'
import Navbar from '../Navbar/Navbar'
const Amazon = () => {
  const {list}=useSelector(state=>state.shopSlice)
  const {cart}=useSelector(state=>state.shopSlice)
  return (
    <>
      <Navbar size={cart.length}/>
      <section>
        {
            list.map((item)=>(
                <Cards item={item} key={item.id}/>
            ))
        }
    </section>
    </>
  )
}

export default Amazon