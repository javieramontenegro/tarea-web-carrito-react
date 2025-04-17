const Steps = (props) => {
    const signo = ">";
    return (
        <section class="w-full border-b-2 border-b-gray-200 flex justify-center">
            <div class="flex justify-between pb-6 px-8 content-center items-center w-full max-w-[1200px] flex-col md:flex-row ">
                <h2 className="text-2xl font-bold">Confirmar Pedido</h2>
                <div class="flex gap-4 flex-col sm:flex-row mt-4 md:mt-0 ">
                    <div class="flex content-center items-center gap-2">
                        <span class="bg-red-600 rounded-full w-[30px] h-[30px] justify-center items-center content-center text-center text-white">
                            1
                        </span>
                        <p>Productos</p>
                        <p>{signo}</p>
                    </div>
                    <div class="flex content-center items-center gap-2">
                        <span class="bg-red-600 rounded-full w-[30px] h-[30px] justify-center items-center content-center text-center text-white border-2 border-black">
                            2
                        </span>
                        <p>Confimación</p>
                        <p>{signo}</p>
                    </div>

                    <div class="flex content-center items-center gap-2">
                        <span class="bg-gray-500 rounded-full w-[30px] h-[30px] justify-center items-center content-center text-center text-white ">
                            3
                        </span>
                        <p>Pago</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Steps;
