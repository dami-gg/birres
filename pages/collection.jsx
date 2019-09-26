import React from "react";

import ProtectedPage from "./_protected";

import Collection from "../src/components/collection/Collection";

const CollectionPage = () => (
  <ProtectedPage>
    <Collection />
  </ProtectedPage>
);

export default CollectionPage;
