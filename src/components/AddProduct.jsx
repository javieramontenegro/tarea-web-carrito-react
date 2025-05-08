import React, { useState } from 'react';
import axios from '../utils/axios';  // Importa tu instancia de Axios

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realiza la petición POST para agregar un producto
    axios.post('products', newProduct)
      .then((response) => {
        console.log('Producto agregado:', response.data);
        // Resetea el formulario o muestra un mensaje de éxito
      })
      .catch((error) => {
        console.error('Error al agregar el producto:', error);
      });
  };

  return (
    <div>
      <h1>Agregar Producto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Precio:</label>
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
};

export default AddProduct;
