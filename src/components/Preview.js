import React from 'react'
import { useState } from 'react'
import useCartStore from '../store/cartStore/CartStore'
import {Link} from "react-router-dom"
import "../styles/Preview.css"

const Preview = () => {
    const previewData = useCartStore(state => state?.previewState)
    const [preview,setpreview] = useState(previewData)
  return (
    <>
        <img src={preview?.preview} alt="" id='prv-img'/>
        <a  id='preview-btn' href={preview?.pdfpath} target={"_blank"}>Add To Cart</a>
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