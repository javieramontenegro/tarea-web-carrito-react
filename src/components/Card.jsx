import { useState } from "react";

const Card = ({ onAddToOrder }) => {
  // Estado local para la cantidad
  const [quantity, setQuantity] = useState(1);

  // Función para aumentar la cantidad
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Función para disminuir la cantidad
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="w-auto h-auto flex border-1 border-gray-200 rounded-[5px] p-[20px]">
      <div className="w-full h-auto flex gap-2">
        <div className="bg-[url(./assets/105.jpg)] w-full h-auto bg-size-[120px] max-w-[120px] min-w-[80px] min-h-[100px] max-h-[100px] bg-no-repeat bg-center rounded-[5px]"></div>
        <div className="flow-root isolate">
          <p className="mb-2 mt-1">100 piezas lux</p>
          <div className="flex items-center gap-[5px] mb-4 isolate">
            {/* Botón para disminuir la cantidad */}
            <button
              onClick={decreaseQuantity}
              className="flex justify-center items-center w-[30px] h-[30px] bg-white border border-gray-300 rounded-[5px] text-center cursor-pointer"
            >
              -
            </button>

            {/* Muestra la cantidad */}
            <span>{quantity}</span>

            {/* Botón para aumentar la cantidad */}
            <button
              onClick={increaseQuantity}
              className="flex justify-center items-center w-[30px] h-[30px] bg-white border border-gray-300 rounded-[5px] text-center cursor-pointer"
            >
              +
            </button>
          </div>
          <p className="mt-1 mb-2 font-sans">$30.000 c/u x {quantity}</p>
          <p className="font-bold font-sans">
            <b>${30000 * quantity}</b>
          </p>
        </div>
      </div>

      {/* Botón Agregar con tamaño ajustado */}
      <button
        onClick={() =>
          onAddToOrder({
            name: "100 piezas lux",
            price: 30000,
            quantity: quantity,
          })
        }
        className="mt-4 px-4 py-1 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-200 text-sm"
      >
        Agregar
      </button>

      <button className="self-start border-0 bg-white cursor-pointer cursor-grab pt-[3px] pr-[5px] pb-[3px] pl-[5px] rounded-[5px]">
        X
      </button>
    </div>
  );
};

export default Card;
