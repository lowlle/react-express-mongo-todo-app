import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

export const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const [severity, setSeverity] = useState("success");
    const [message, setMessage] = useState(null);

    return (
        <SnackbarContext.Provider
            value={{
                setIsSnackbarOpen,
                setMessage,
                setSeverity,
            }}
        >
            {children}
            <Snackbar
                open={isSnackbarOpen}
                onClose={() => setIsSnackbarOpen(false)}
            >
                <Alert
                    onClose={() => setIsSnackbarOpen(false)}
                    severity={severity}
                >
                    {message}
                </Alert>
            </Snackbar>
        </SnackbarContext.Provider>
    );
};

SnackbarProvider.propTypes = {
    children: PropTypes.node.isRequired,
};