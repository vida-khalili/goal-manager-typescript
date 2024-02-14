import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/reset.css";
import "./styles/typography.css";
// import "./styles/index.css";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import theme from "./lib/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
