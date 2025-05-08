import React, { useState } from "react";
import Card from "./Card";
import Opciones from "./Opciones";

const Resume = () => {
  // Estado para los productos seleccionados
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Función para agregar productos al carrito
  const addProductToOrder = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  return (
    <div className="w-full max-w-[100%] p-[10px]">
      <h3 className="text-xl font-bold">Resumen de tu orden</h3>
      <p className="text-gray-400">
        Revisa los productos seleccionados y selecciona el método de envío
      </p>

      {/* Aquí agregas el producto */}
      <Card onAddToOrder={addProductToOrder} />
      {/* Si hay productos en el carrito, los mostramos */}
      <div className="mt-4">
        {selectedProducts.length > 0 ? (
          <ul>
            {selectedProducts.map((product, index) => (
              <li key={index}>
                {product.name} - ${product.price} x {product.quantity}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay productos en la orden.</p>
        )}
      </div>

      {/* Método de envío */}
      <Opciones />
    </div>
  );
};

export default Resume;