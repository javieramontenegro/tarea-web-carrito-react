import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f1f1f1', padding: '1rem', textAlign: 'center', marginTop: '2rem' }}>
      <p>&copy; {new Date().getFullYear()} Vite + React. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;