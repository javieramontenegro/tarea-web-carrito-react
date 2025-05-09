import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black p-6 text-center mt-4 text-white">
            <div className="flex justify-between items-center max-w-6xl mx-auto flex-wrap gap-6">
                <div className="flex items-center gap-6 justify-between">
                    <div className="bg-[url(./assets/sushi.svg)] w-[60px] h-[60px] bg-no-repeat cursor-pointer"></div>
                    <div className="flex items-center gap-4">
                        <div className="bg-[url(./assets/facebook.png)] w-[40px] h-[40px] bg-no-repeat bg-center rounded-[10px] bg-cover cursor-pointer"></div>
                        <div className="bg-[url(./assets/social.png)] w-[40px] h-[40px] bg-no-repeat bg-center rounded-[10px] bg-cover cursor-pointer"></div>
                    </div>
                </div>

                <ul className="flex justify-center gap-8 font-bold mt-4 mb-4">
                    <li>
                        <a className="text-[20px] cursor-pointer" href="">Home</a>
                    </li>
                    <li>
                        <a className="text-[20px] cursor-pointer" href="">Productos</a>
                    </li>
                    <li>
                        <a className="text-[20px] cursor-pointer" href="">Sucursales</a>
                    </li>
                    <li>
                        <a className="text-[20px] cursor-pointer" href="">Nosotros</a>
                    </li>
                    <li>
                        <a className="text-[20px] cursor-pointer" href="">Contacto</a>
                    </li>
                </ul>
            </div>

            <p className="mt-4 text-sm">
                &copy; {new Date().getFullYear()} Vite + React. Todos los derechos reservados.
            </p>
        </footer>
    );
};

export default Footer;
