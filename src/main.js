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

const addText = async () => {
  const text = document.createElement('div');
  text.innerText = 'Carregando...';
  text.classList.add('loading');
  document.body.appendChild(text);

  await fetchProductsList('computador');
  const loading = document.querySelector('.loading');
  document.body.removeChild(loading);
};
addText();

document.querySelector('.cep-button').addEventListener('click', searchCep);
