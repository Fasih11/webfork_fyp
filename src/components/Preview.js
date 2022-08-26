import React from 'react'
import { useState } from 'react'
import useCartStore from '../store/cartStore/CartStore'
import "../styles/Preview.css"

const Preview = () => {
    const previewData = useCartStore(state => state?.previewState)
    const [preview,setpreview] = useState(previewData)
  return (
    <>
        <img src={preview?.image} alt="" id='prv-img'/>
    </>
  )
}

// const Preview = () =>{
//   return(
//     <>
//       <h1>Hello</h1>
//     </>

//   )
// }

export default Preview