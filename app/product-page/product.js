"use client";

import { useEffect, useState } from 'react';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        const filteredProducts = data.filter(product => 
          product.category === "men's clothing" || product.category === "women's clothing"
        );
        const productsWithQuantity = filteredProducts.map(product => ({
          ...product,
          quantity: 0,
        }));
        setProducts(productsWithQuantity);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []); 

  console.log('Products:', products); 

  const handleAddToCart = (productId) => {
    setProducts(prevProducts => 
      prevProducts.map(product =>
        product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!products || products.length === 0) {
    return <div>No products found</div>;
  }

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}> 
        {products.map(product => (
          <div key={product.id} style={{ width: 'calc(25% - 20px)', margin: '10px', padding: '10px'}}> 
            <h2 style={{ fontSize: '16px', marginBottom: '5px' }}>{product.title}</h2> 
            <img src={product.image} alt={product.title} style={{ maxWidth: '60%', height: 'auto' }} /> 
            <p>Price: ${product.price}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '50px'}}>
              <p>Quantity: {product.quantity}</p>
              <button 
                style={{
                  backgroundColor: '#4CAF50', 
                  color: 'white', 
                  padding: '5px 10px', 
                  border: 'none', 
                  borderRadius: '8px', 
                  cursor: 'pointer',
                }}
                onClick={() => handleAddToCart(product.id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;



