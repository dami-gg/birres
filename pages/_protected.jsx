import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

import router from "next/router";

import { AuthContext } from "../src/context";
import Header from "../src/components/header/Header";
import Spinner from "../src/components/spinner/Spinner";

const ProtectedPage = ({ children }) => {
  const [view, setView] = useState(<Spinner />);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      setView(
        <>
          <Header />
          {children}
        </>
      );
    } else {
      router.push("/login");
    }
  }, [user]);

  return view;
};

ProtectedPage.propTypes = {
  children: PropTypes.node.isRequired
};

export default ProtectedPage;
