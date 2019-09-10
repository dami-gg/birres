import React from "react";

import ProtectedPage from "./_protected";

const BeersPage = () => (
  <ProtectedPage>
    <p>You are authorized to see this page</p>
  </ProtectedPage>
);

export default BeersPage;
