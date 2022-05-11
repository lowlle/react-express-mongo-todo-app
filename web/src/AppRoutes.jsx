import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TodoPage from "./pages/todo-page";
import AboutPage from "./pages/about-page";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<TodoPage />}></Route>
                <Route exact path="/about" element={<AboutPage />}></Route>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
