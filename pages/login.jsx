import React, { useContext, useEffect, useState } from "react";
import router from "next/router";

import { AuthContext } from "../src/context";
import Login from "../src/components/login/Login";
import Spinner from "../src/components/spinner/Spinner";

import { isAuthenticating } from "../src/helpers/auth";

const LoginPage = () => {
  const { user } = useContext(AuthContext);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    if (user) {
      router.push("/");
    } else {
      setShowSpinner(isAuthenticating());
    }
  }, [user]);

  return showSpinner ? <Spinner /> : <Login />;
};

export default LoginPage;
