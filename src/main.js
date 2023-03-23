import { searchCep } from './helpers/cepFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import './style.css';
import { createProductElement } from './helpers/shopFunctions';
import { saveCartID } from './helpers/cartFunctions';

const addText = async () => {
  try {
    const computadores = await fetchProductsList('computador');
    const products = document.querySelector('.products');
    computadores.forEach((computador) => products
      .appendChild(createProductElement(computador)));
    const text = document.createElement('div');
    text.innerText = 'Carregando...';
    text.classList.add('loading');
    document.body.appendChild(text);

    await fetchProductsList('computador');

    const loading = document.querySelector('.loading');
    document.body.removeChild(loading);
  } catch {
    const erro = document.createElement('p');
    erro.classList.add('error');
    erro.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
    document.body.appendChild(erro);
  }
};

addText();

document.querySelector('.cep-button').addEventListener('click', searchCep);
