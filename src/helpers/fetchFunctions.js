export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = (search) => {
  // seu código aqui
  if (!search) {
    throw new Error('Termo de busca não informado');
  }
  const busca = `https://api.mercadolibre.com/sites/MLB/search?q=${search}`;
  return fetch(busca)
    .then((res) => res.json())
    .then((data) => data.results);
};
