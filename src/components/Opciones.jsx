import React, { useState } from "react";

const Opciones = ({ onChangeDeliveryMethod }) => {
  const [selectedMethod, setSelectedMethod] = useState("");

  // Función para manejar el cambio de opción seleccionada
  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
    onChangeDeliveryMethod(event.target.value); // Llama a la función pasada como prop
  };

  return (
    <div className="block isolate">
      <h4 className="block mt-5 mb-5 font-bold isolate">¿Delivery o retiro en tienda?</h4>
      <form className="flex flex-col mt-[0em] isolate">
        {/* Opción Delivery */}
        <label className="flex items-center justify-between w-auto px-[10px] py-[15px] border border-gray-200 rounded-[5px] bg-white cursor-pointer mt-[15px]">
          <div className="flex items-center isolate cursor-pointer cursor-grab font-bold">
            <img
              className="w-[20px] h-[20px] mr-[10px] [overflow-clip-margin:content-box] overflow-clip cursor-pointer]"
              src="https://cdn-icons-png.flaticon.com/512/711/711251.png"
              alt="Bolsa"
            />
            Delivery
          </div>
          <input
            className="cursor-pointer cursor-grab [accent-color:rgb(201,0,0)] w-[0px] h-[0px] absolute opacity-0"
            type="radio"
            id="delivery"
            name="metodo"
            value="delivery"
            checked={selectedMethod === "delivery"}
            onChange={handleMethodChange}
          />
          <span className="w-[18px] h-[18px] border-red-700 border-2 rounded-[50%] inline-block relative cursor-pointer"></span>
        </label>

        {/* Opción Retiro */}
        <label className="flex items-center justify-between w-auto px-[10px] py-[15px] border border-gray-200 rounded-[5px] bg-white cursor-pointer mt-[15px]">
          <div className="flex items-center isolate cursor-pointer cursor-grab font-bold">
            <img
              className="w-[20px] h-[20px] mr-[10px] [overflow-clip-margin:content-box] overflow-clip cursor-pointer]"
              src="https://cdn-icons-png.flaticon.com/512/711/711251.png"
              alt="Bolsa"
            />
            Retiro
          </div>
          <input
            className="cursor-pointer cursor-grab [accent-color:rgb(201,0,0)] w-[0px] h-[0px] absolute opacity-0"
            type="radio"
            id="retiro"
            name="metodo"
            value="retiro"
            checked={selectedMethod === "retiro"}
            onChange={handleMethodChange}
          />
          <span className="w-[18px] h-[18px] border-red-700 border-2 rounded-[50%] inline-block relative cursor-pointer"></span>
        </label>
      </form>
    </div>
  );
};

export default Opciones;
