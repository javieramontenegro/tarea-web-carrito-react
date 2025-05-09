import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Steps from "./components/Steps";
import Resume from "./components/Resume";
import Container from "./components/Container";
import Footer from "./components/Footer";
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';

function App() {
    const [count, setCount] = useState(0);
    const [order, setOrder] = useState([]); // Carrito de productos

    // Función para agregar productos al carrito
    const handleAddToOrder = (product) => {
        setOrder((prevOrder) => {
            // Verificamos si el producto ya está en el carrito
            const existingProduct = prevOrder.find((item) => item.name === product.name);
            if (existingProduct) {
                // Si existe, actualizamos la cantidad
                return prevOrder.map((item) =>
                    item.name === product.name
                        ? { ...item, quantity: item.quantity + product.quantity }
                        : item
                );
            } else {
                // Si no existe, lo agregamos al carrito
                return [...prevOrder, product];
            }
        });
    };

    return (
        <div className="w-full h-full flex flex-col overflow-x-hidden">
            <Header />
            <main className="m-auto w-full flex flex-col justify-center items-center py-6">
                <div className="w-full">
                    <Steps />
                    <section className="w-full h-auto flex justify-center isolate">
                        <div className="w-full h-auto max-w-[1200px] flex gap-4 flex-col md:flex-row">
                            <div className="w-full max-w-full md:max-w-[50%] p-[10px]">
                                <Resume />
                            </div>
                            <div className="w-full max-w-full md:max-w-[50%]  p-[10px] bg-gray-100">
                                <Container />
                            </div>
                        </div>
                    </section>
                    <section className="w-full h-auto flex justify-center">
                        <ProductList onAddToOrder={handleAddToOrder} /> {/* Pasa la función para agregar productos */}
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
