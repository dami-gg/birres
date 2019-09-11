const { getAllBeers } = require("./queries");

const resolver = {
  beers: getAllBeers
};

export default resolver;
