import React from 'react'

const Product = ({ product, handleAddToCart }) => (
        <div className="Products-item">
            <img src={product.image} alt={product.title}/>
            <div className="Product-item-info">
                <h2>
                    <p>{product.sku}</p>
                    <p>{product.product_name}</p>
                    <br/>
                    <span>
                        $
                        {' '} 
                        {product.price}
                    </span>
                </h2>
                <p>{product.brand}</p>
                <p>{product.category}</p>
            </div>
            <button type="button" onClick={handleAddToCart(product)}>Add to Cart</button>
        </div>
    )

export default Product