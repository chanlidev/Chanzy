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
        setProducts(filteredProducts);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []); 

  console.log('Products:', products); 

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;



