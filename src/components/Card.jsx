const Card = () => {
    return (
        <div className="w-auto h-auto flex border-1 border-gray-200 rounded-[5px] p-[20px]">
            <div className="w-full h-auto flex gap-2">
                <div className="bg-[url(./assets/105.jpg)] w-full h-auto bg-size-[120px] max-w-[120px] min-w-[80px] min-h-[100px] max-h-[100px] bg-no-repeat bg-center rounded-[5px]"></div>
                <div className="flow-root isolate">
                    <p className="mb-2 mt-1">100 piezas lux</p>
                    <div className="flex items-center gap-[5px] mb-4 isolate">
                        <button className="flex justify-center items-center w-[30px] h-[30px] bg-white hover:bg-gray-200 border border-gray-300 rounded-[5px] text-center cursor-pointer ">
                            -
                        </button>
                        <span>1</span>
                        <button className="flex justify-center items-center w-[30px] h-[30px] bg-white hover:bg-gray-200 border border-gray-300 rounded-[5px] text-center cursor-pointer ">
                            +
                        </button>
                    </div>
                    <p className="mt-1 mb-2 font-sans">$30.000 c/u x 1</p>
                    <p className="font-bold font-sans">
                        <b>$30.000</b>
                    </p>
                </div>
            </div>
            <button className="self-start border-0 bg-white cursor-pointer pt-[3px] pr-[5px] pb-[3px] pl-[5px] rounded-[5px]">
                X
            </button>
        </div>
    );
};
export default Card;
