import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black p-6 text-center mt-4 text-white">
            <p>
                &copy; {new Date().getFullYear()} Vite + React. Todos los
                derechos reservados.
            </p>
        </footer>
    );
};

export default Footer;
