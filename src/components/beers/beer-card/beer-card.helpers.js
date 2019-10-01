import { GET_BEER_CATALOG, GET_USER_COLLECTION } from "../../../data/queries";

const updateCatalogCache = (cache, updatedBeer, operation) => {
  const { catalog } = cache.readQuery({ query: GET_BEER_CATALOG });

  const beerPosition = catalog.findIndex(beer => beer.id === updatedBeer.id);

  cache.writeQuery({
    query: GET_BEER_CATALOG,
    data: {
      catalog: [
        ...catalog.slice(0, beerPosition),
        {
          ...catalog[beerPosition],
          collected: operation === "addBeerToCollection"
        },
        ...catalog.slice(beerPosition + 1, catalog.length)
      ]
    }
  });
};

const getCatalogMutationOptions = (initialValue, operation) => ({
  refetchQueries: [{ query: GET_USER_COLLECTION }],
  update(cache, { data }) {
    const updatedBeer = data[operation];
    updateCatalogCache(cache, updatedBeer, operation);
  },
  optimisticResponse: {
    [operation]: {
      ...initialValue,
      collected: operation === "addBeerToCollection",
      isOptimistic: true,
      __typename: "Beer"
    }
  }
});

export { getCatalogMutationOptions };
