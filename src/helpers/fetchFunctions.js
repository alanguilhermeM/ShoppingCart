export const fetchProduct = async (id) => {
  // seu código aqui
  if (!id) {
    throw new Error('ID não informado');
  }
  const endpoint = `https://api.mercadolibre.com/items/${id}`;
  return fetch(endpoint)
    .then((res) => res.json())
    .then((data) => data);
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
