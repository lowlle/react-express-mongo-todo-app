import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TodoPage from "./pages/todo-page";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<TodoPage />}></Route>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
