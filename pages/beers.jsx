import React from "react";

import ProtectedPage from "./_protected";

import Beers from "../src/components/beers/Beers";

const BeersPage = () => (
  <ProtectedPage>
    <Beers />
  </ProtectedPage>
);

export default BeersPage;
