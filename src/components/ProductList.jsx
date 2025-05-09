import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';  // Importa tu instancia de Axios

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Realiza la petición GET para obtener los productos
    axios.get('products')
      .then((response) => {
        setProducts(response.data);  // Asigna los productos al estado
      })
      .catch((error) => {
        console.error('Error al obtener los productos:', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
