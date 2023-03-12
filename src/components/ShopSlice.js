import { createSlice } from "@reduxjs/toolkit";
import list from "../data";

  const initialState = {
    list: list,
    cart:[],
    warning:false,
  }
  
  export const shopSlice = createSlice({
    name: 'korzinka',
    initialState,
    reducers: {
        handleRemove: (state, { payload }) => {
            state.cart=state.cart.filter(item=>item.id!==payload.id)
            state.list.push(payload)
          },
          handleClick:(state,{payload})=>{
            let isPresent=false;
            state.cart.forEach((product)=>{
              if (payload.id===product.id)
              isPresent=true
             })
            if (isPresent){
              state.warning=true
              setTimeout(()=>{
              state.warning=false
              },2000)
              return;
            }
            state.cart=([...state.cart,payload])
            state.list=state.list.filter(item=>item.id!==payload.id)
          },
        handleChange1:(state,{payload})=>{
          let ind=-1
          state.cart.forEach((data,index)=>{
            if (data.id===payload.id)
            ind=index;
          });
          const tempArr=state.cart;
          tempArr[ind].amount+=1;

          if (tempArr[ind].amount===0)
            tempArr[ind].amount=1;
          state.cart=[...tempArr] 

        },
        handleChange2:(state,{payload})=>{
          let ind=-1
          state.cart.forEach((data,index)=>{
            if (data.id===payload.id)
            ind=index;
          });
          const tempArr=state.cart;
          tempArr[ind].amount-=1;

          if (tempArr[ind].amount===0)
            tempArr[ind].amount=1;
          state.cart=[...tempArr] 

        },
        handleClick1:(state,{payload})=>{
          state.list.push(payload)
        }
        }    
  })
  
  export const {handleRemove}=shopSlice.actions;
  export const {handleClick}=shopSlice.actions;
  export const {handleChange1}=shopSlice.actions
  export const {handleChange2}=shopSlice.actions
  export const {handleClick1}=shopSlice.actions
  export default shopSlice.reducer;