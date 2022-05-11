import { useContext } from "react";
import { SnackbarContext } from "../context/snackbar-context";


export const useSnackbar = () => {
    const { setIsSnackbarOpen, setMessage, setSeverity } =
        useContext(SnackbarContext);

    const showSnackbar = ({ message, severity }) => {
        setIsSnackbarOpen(true);
        setMessage(message);
        setSeverity(severity);
    };

    return {
        showSnackbar,
    };
};
