import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { Dashboard, Login } from "../pages";

export const RoutesApp = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/pagina-inicial" element={ <Dashboard /> } />
                <Route path="/entrar" element={ <Login /> } />
                <Route path="*" element= { <Navigate to="/pagina-inicial" /> } />
            </Routes>
        </BrowserRouter>

    );
}