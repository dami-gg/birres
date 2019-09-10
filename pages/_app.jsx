import React from "react";
import App from "next/app";

import { IdentityContextProvider } from "react-netlify-identity";

import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import theme from "../src/theme";

const URL = "https://birres.netlify.com/";

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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <IdentityContextProvider url={URL}>
          <Component {...pageProps} />
        </IdentityContextProvider>
      </ThemeProvider>
    );
  }
}

export default MyApp;
