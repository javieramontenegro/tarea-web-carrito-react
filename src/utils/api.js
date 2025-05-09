import axios from 'axios';

// Si tu backend está en localhost:5000
const API_URL = 'http://localhost:5000/api';

// Obtener productos
export const getProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        throw error;
    }
};

// Agregar producto
export const addProduct = async (product) => {
    try {
        const response = await axios.post(`${API_URL}/products`, product);
        return response.data;
    } catch (error) {
        console.error('Error al agregar el producto:', error);
        throw error;
    }
};
