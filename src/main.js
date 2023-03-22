import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import './style.css';
import { createProductElement } from './helpers/shopFunctions';

const computadores = await fetchProductsList('computador');
const products = document.querySelector('.products');

const lista = async () => {
  computadores.forEach((computador) => products
    .appendChild(createProductElement(computador)));
};

lista();

document.querySelector('.cep-button').addEventListener('click', searchCep);
