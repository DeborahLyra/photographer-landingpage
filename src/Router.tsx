import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { GaleryPage } from "./pages/GaleryPage";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/galeria" element={<GaleryPage />} />
            </Routes>
        </BrowserRouter>
    )
}

