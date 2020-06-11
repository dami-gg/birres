import React from "react";

import ProtectedPage from "./_protected";

import BeerCreation from "../src/components/beer-creation";

const AddBeerPage = () => (
  <ProtectedPage>
    <BeerCreation />
  </ProtectedPage>
);

export default AddBeerPage;
