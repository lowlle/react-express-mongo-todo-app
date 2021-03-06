import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DialogContextProvider } from "./context/dialog-context";
import { BrowserRouter } from "react-router-dom";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import AppHeader from "./components/AppHeaders";
import AppRoutes from "./AppRoutes";
import AppDialog from "./components/AppDialog";

import "./App.css";

function App() {
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DialogContextProvider>
                    <BrowserRouter>
                        <AppHeader />
                        <AppRoutes />
                        <AppDialog />
                    </BrowserRouter>
                </DialogContextProvider>
            </LocalizationProvider>
        </ThemeProvider>
    );
}

export default App;
