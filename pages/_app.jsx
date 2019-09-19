import React from "react";
import App from "next/app";

import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ApolloProvider } from "@apollo/react-hooks";

import { AuthContextProvider } from "../src/context";
import apolloClient from "../src/helpers/apollo-client";
import theme from "../src/theme";

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AuthContextProvider>
            <Component {...pageProps} />
          </AuthContextProvider>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default MyApp;
