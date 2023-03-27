import { searchCep } from './helpers/cepFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import './style.css';
import { createProductElement, createCartProductElement,
  somandoValores } from './helpers/shopFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';

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

// requisito 9
// criar uma função que utiliza a função getSavedCartIDs, essa função retorna um array de IDs
// utilizar a função fetchProduct para CADA UM desses ids e recuperar as informações de cada produto(que é o que fetchProduct faz)
// Utilizar o metodo promisse.all para aguardar a resposta de todas as requisições(as funções acima) e só então add os produtos ao carrinho
const localStor = async () => {
  const carrinho = document.querySelector('.cart__products');
  const savedIds = getSavedCartIDs();
  const mapeando = savedIds.map((id) => fetchProduct(id));
  const products = await Promise.all(mapeando);
  products.forEach((product) => {
    const productElement = createCartProductElement(product);
    carrinho.appendChild(productElement);
    somandoValores(product.price);
  });
};

window.onload = () => {
  localStor();
};

document.querySelector('.cep-button').addEventListener('click', searchCep);
