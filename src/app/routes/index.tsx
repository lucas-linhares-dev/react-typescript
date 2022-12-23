import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { Dashboard } from "../pages";

export const RoutesApp = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/pagina-inicial" element={ <Dashboard /> } />
                <Route path="*" element= { <Navigate to="/pagina-inicial" /> } />
            </Routes>
        </BrowserRouter>

    );
}