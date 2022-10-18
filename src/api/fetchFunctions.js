const URL = `https://bsale-rest-production.up.railway.app/api`;

export const getProducts = async (endpoint) => {
  const response = await fetch(`${URL}/${endpoint}`);
  const data = await response.json();
  return data;
};
