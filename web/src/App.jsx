import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DialogContextProvider } from "./context/dialog-context";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import AppHeader from "./components/AppHeaders";
import TodoPage from "./pages/todo-page";
import AppDialog from "./components/AppDialog";

import "./App.css";

function App() {
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DialogContextProvider>
                    <AppHeader />
                    <TodoPage />
                    <AppDialog />
                </DialogContextProvider>
            </LocalizationProvider>
        </ThemeProvider>
    );
}

export default App;
