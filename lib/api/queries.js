const getAllBeers = async () => {
  const response = await fetch("/.netlify/functions/beers-read-all");

  return response.json();
};

export { getAllBeers };
