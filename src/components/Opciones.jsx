import delivery from "../assets/delivery-de-pizza.png";
import local from "../assets/compra-local.png";
import CheckDelivery from "./CheckDelivery";

const Opciones = (props) => {
    return (
        <div className="block isolate">
            <h4 className="block mt-5 mb-5 font-bold isolate">
                ¿Delivery o retiro en tienda?
            </h4>
            <form className="flex flex-col mt-[0em] isolate">
                <CheckDelivery name="Delivery" img={delivery} />
                <CheckDelivery name="Retiro" img={local} />
            </form>
        </div>
    );
};

export default Opciones;
