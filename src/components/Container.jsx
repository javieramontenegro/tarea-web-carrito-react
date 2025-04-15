const Container = () => {
return(
<div className="w-full max-w-[100%] p-[10px]">
                <h3 className="mb-[5px] font-bold text-xl">Datos de pago</h3>
                <p className="text-gray-400 mb-4 ms-0 mt-0">Completa tus datos para realizar el pago.</p>
                <form className="flex flex-col"action="">
                  <label className="font-bold">Tu Nombre</label>
                  <input className="border border-gray-300 rounded-[5px] min-h-[30px] mb-[15px] bg-white overflow-clip-margin-[0px] overflow-clip px-[2px] py-[1px]" type="text" />
                  <label className="font-bold">Apelido</label>
                  <input className="border border-gray-300 rounded-[5px] min-h-[30px] mb-[15px] bg-white overflow-clip-margin-[0px] overflow-clip px-[2px] py-[1px]" type="text" />
                  <label className="font-bold">RUT</label>
                  <input className="border border-gray-300 rounded-[5px] min-h-[30px] mb-[15px] bg-white overflow-clip-margin-[0px] overflow-clip px-[2px] py-[1px]" type="number" />
                  <label className="font-bold">Correo electrónico</label>
                  <input className="border border-gray-300 rounded-[5px] min-h-[30px] mb-[15px] bg-white overflow-clip-margin-[0px] overflow-clip px-[2px] py-[1px]" type="email" />
                  <label className="font-bold">Teléfono</label>
                  <input className="border border-gray-300 rounded-[5px] min-h-[30px] mb-[15px] bg-white overflow-clip-margin-[0px] overflow-clip px-[2px] py-[1px]" type="number" />
                  <label className="font-bold">Comentarios</label>
                  <textarea className="border border-gray-300 rounded-[5px] min-h-[100px] mb-[15px] bg-white overflow-clip-margin-[0px] overflow-clip px-[2px] py-[1px]" name="comentarios" id="comentarios"></textarea>
                  <label className="flex items-center justify-between w-auto px-[10px] py-[15px] border border-gray-200 rounded-[5px] bg-white pointer mt-[15px]">
                    <div className="flex items-center font-bold">
                      <div
                        className="bg-[url(./assets/transferencia.svg)] w-[20px] h-[20px] mr-[10px] min-h-[100px] min-w-[100px] bg-no-repeat bg-center rounded-[5px] min-w-[80px] min-h-[100px] bg-size-[100%]">
                      </div>
                      Transferencia bancaria
                    </div>
                    <input className="cursor-pointer cursor-grab [accent-color:rgb(201,0,0)] absolute w-[0] h-[0]" type="radio" id="retiro" name="metodo" />
                    <span className="w-[18px] h-[18px] border-red-700 border-2 rounded-[50%] inline-block relative cursor-pointer"></span>
                  </label>
                  <div className="w-auto h-auto p-[10px] border border-gray-300 mt-[15px]">
                    <div className="w-auto flex justify-between mt-[5px]">
                      <span>Subtotal</span>
                      <span>$30.000</span>
                    </div>
                    <div className="w-auto flex justify-between mt-[5px]">
                      <span>Total delivery</span>
                      <span>$0</span>
                    </div>
                  </div>
                  <div className="w-auto h-auto p-[10px] flex justify-between mt-[5px]">
                    <span>Total delivery</span>
                    <span className="font-bold text-xl">$0</span>
                  </div>
                  <button className="w-auto bg-red-700 rounded-[5px] text-white boder min-h-[50px] font-bold">Confirmar pago</button>
                </form>
              </div>
    )          
}
export default Container