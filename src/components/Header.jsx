import logo from "../assets/sushi.svg";
const Header = (props) => {
    return (
        <header>
            <nav className="w-auto h-auto bg-black px-6 py-2 flex justify-between items-center flex-col md:flex-row">
                <a href="">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-full h-auto max-w-[60px]"
                    />
                </a>
                <ul className=" text-white flex justify-between w-[70%] flex-col sm:flex-row md:w-[50%]  items-center ">
                    <li>
                        <a href=""> Home </a>
                    </li>
                    <li>
                        <a href=""> Productos </a>
                    </li>
                    <li>
                        <a href=""> Sucursales </a>
                    </li>
                    <li>
                        <a href=""> Nosotros </a>
                    </li>
                    <li>
                        <a href=""> Contacto </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;
