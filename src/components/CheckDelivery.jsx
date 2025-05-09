const CheckDelivery = (props) => {
    return (
        <label className="flex items-center justify-between w-auto px-[10px] py-[15px] border border-gray-200 rounded-[5px] bg-white hover:bg-gray-200 cursor-pointer mt-[15px]">
            <div className="flex items-center isolate cursor-pointer font-bold">
                <img
                    className="w-[20px] h-[20px] mr-[10px] [overflow-clip-margin:content-box] overflow-clip cursor-pointer]"
                    src={props.img}
                    alt="Bolsa"
                />
                {props.name}
            </div>
            <input
                className="cursor-pointer cursor- grab [accent-color:rgb(201,0,0)] w-[0px] h-[0px] absolute opacity-0"
                type="radio"
                id="retiro"
                name="metodo"
            />
            <span className="w-[18px] h-[18px] border-red-700 hover:bg-red-700 border-2 rounded-[50%] inline-block relative cursor-pointer"></span>
        </label>
    );
};

export default CheckDelivery;
