import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

import {
  firebase,
  auth,
  startAuthentication,
  completeAuthentication,
  removeSessionCookie,
  setSessionCookie,
  getSessionCookie
} from "../helpers";

const AuthContext = createContext();

const Provider = ({ children }) => {
  const [user, setUser] = useState(getSessionCookie());

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async authUser => {
      if (authUser) {
        const token = await auth.currentUser.getIdToken();

        setUser(authUser);
        sessionStorage.setItem("TOKEN", token);
        setSessionCookie(authUser);
        completeAuthentication();
      } else {
        setUser(null);
        removeSessionCookie();
      }
    });

    return () => unsubscribe();
  }, []);

  const signin = async (email, password) => {
    try {
      startAuthentication();
      const response = await auth.signInWithEmailAndPassword(email, password);

      setUser(response.user);
      setSessionCookie(response.user);
    } catch (err) {
      // TODO Handle error
      setUser(null);
      removeSessionCookie();
    }
  };

  const signInWithGoogle = async () => {
    startAuthentication();
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      await auth.signInWithRedirect(provider);
    } catch (err) {
      // TODO Handle error
      setUser(null);
      removeSessionCookie();
    }
  };

  const signup = async (email, password) => {
    try {
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      setUser(response.user);
    } catch (err) {
      // TODO Handle error
      setUser(null);
    }
  };

  const signout = async () => {
    try {
      await auth.signOut();

      setUser(null);
      removeSessionCookie();
      sessionStorage.removeItem("TOKEN");
    } catch (err) {
      // TODO Handle error
    }
  };

  const sendPasswordResetEmail = async email => {
    try {
      await auth.sendPasswordResetEmail(email);
    } catch (err) {
      // TODO Handle error
    }
  };

  const confirmPasswordReset = (code, password) => {
    try {
      auth.confirmPasswordReset(code, password);
    } catch (err) {
      // TODO Handle error
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signin,
        signInWithGoogle,
        signup,
        signout,
        sendPasswordResetEmail,
        confirmPasswordReset
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired
};

const { Consumer } = AuthContext;

export { AuthContext, Provider, Consumer };
