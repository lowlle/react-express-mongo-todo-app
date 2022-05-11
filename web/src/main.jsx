import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./store";

import { SnackbarProvider } from "./context/snackbar-context";

ReactDOM.createRoot(document.getElementById("root")).render(
    <SnackbarProvider>
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    </SnackbarProvider>
);
