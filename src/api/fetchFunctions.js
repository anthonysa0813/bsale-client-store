const URL = `https://bsale-rest-production.up.railway.app/api`;

export const getProducts = async (endpoint) => {
  const response = await fetch(`${URL}/${endpoint}`);
  console.log(`${URL}/${endpoint}`);
  const data = await response.json();
  localStorage.setItem("products", JSON.stringify(data));
  return data;
};
