import React from 'react';

const ProductCard = ({products}) => {
    return(
        products.map(product =>{
        return <div key={product.id}>{product.title}</div>
        })
    )
}

export default ProductCard;