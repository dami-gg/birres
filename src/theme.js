import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const colors = {
  primary: "#f16921",
  secondary: "#4a4a4a",
  separator: "#dedede",
  background: "#fcfcfc",
  white: "#ffffff"
};

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#fff"
    }
  },
  colors
});

export default theme;
