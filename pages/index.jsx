import React from "react";
import Link from "next/link";

import ProtectedPage from "./_protected";

const IndexPage = () => (
  <ProtectedPage>
    <h1>Dashboard</h1>
    <Link href="/beers">List of beers</Link>
  </ProtectedPage>
);

export default IndexPage;
