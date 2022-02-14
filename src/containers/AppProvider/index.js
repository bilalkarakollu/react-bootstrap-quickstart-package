import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "..";
export default function AppProvider() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}