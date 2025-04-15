import Card from "./Card"
import Opciones from "./Opciones"

const Resume = () => {
    return(
        <div className= "w-full max-w-[100%] p-[10px]">
                <h3 className= "text-xl font-bold">Resumen de tu orden</h3>
                <p className="text-gray-400">
                  Revisa los productos seleccionados y selecciona el metodo de
                  envio
                </p>
                {/* CARD SUSHI */}
                    <Card/> 
                {/* DELIVERY O RETIRO */}
                    <Opciones/>
              </div>
    )
}
export default Resume 