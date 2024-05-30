import React from 'react'
import { useParams } from 'react-router-dom'
import { product } from '../../../assets/Product'
import Parts from './Parts'
const Products = () => {
    
    const productId = useParams();
    const singleProduct = product.find((e)=> e.id===Number(productId));

  return (
    <div>
        <Parts productss = {singleProduct} />
    </div>
  )
}

export default Products