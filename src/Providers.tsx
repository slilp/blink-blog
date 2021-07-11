import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { THEME } from "./context/theme";

function Providers({ children }: any) {
  return (
    <ThemeProvider theme={THEME}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
}

export default Providers;
