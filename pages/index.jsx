import React from "react";

import { useIdentityContext } from "react-netlify-identity";

import Header from "../src/components/header/Header";
import Login from "../src/components/login/Login";

const IndexPage = () => {
  const { isLoggedIn } = useIdentityContext();

  return (
    <div>
      <Header />

      {isLoggedIn ? <p>Dashboard</p> : <Login />}
    </div>
  );
};

export default IndexPage;
