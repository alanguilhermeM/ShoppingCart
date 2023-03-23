import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('se fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  it('chamar fetchProduct com o argumento "MLB1405519561"', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetchProduct com o arg "MLB1405519561" a função utiliza o endpoint', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  });

  it('a estrutura de dados da função fetchProducts com arg é igual product', async () => {
    const result = await fetchProduct('MLB1405519561');
    expect(result).toEqual(product);
  });

  it('a função fetchProduct(), lança um erro "ID não informado"', () => {
    expect(async () => {
      await fetchProduct();
    }).rejects.toThrow('ID não informado');
  });
});
