import React from "react";

import ProtectedPage from "./_protected";
import Dashboard from "../src/components/dashboard/Dashboard";

const IndexPage = () => (
  <ProtectedPage>
    <Dashboard />
  </ProtectedPage>
);

export default IndexPage;
