import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://api.example.com/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;