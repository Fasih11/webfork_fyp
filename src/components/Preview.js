import React from 'react'
import { useState } from 'react'
import useCartStore from '../store/cartStore/CartStore'

const Preview = () => {
    const previewData = useCartStore(state => state?.previewState)
    const [preview,setpreview] = useState(previewData)
  return (
    <>
        <img src={preview?.image} alt="" />
    </>
  )
}

export default Preview