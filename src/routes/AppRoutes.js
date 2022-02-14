import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Detail } from "../pages";
import { AppProvider } from "../containers";
export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppProvider />}>
                    <Route index element={<Home />} />
                    <Route path="detail" element={<Detail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}