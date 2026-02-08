import "@fontsource-variable/roboto/index.css";
import "@fontsource-variable/montserrat/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { ChakraProvider } from "@chakra-ui/react";

import App from "#/app";
import store from "#store/store";
import { system } from "#theme/index";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <Provider store={store}>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </Provider>,
  // </StrictMode>,
);
