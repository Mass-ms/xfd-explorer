import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Home from '../pages/Home';
import SearchResults from '../pages/SearchResults';
import XfdDetail from '../pages/XfdDetail';
import XfdEdit from '../pages/XfdEdit';
import LoginCallback from '../pages/LoginCallback';

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/xfd/:id" element={<XfdDetail />} />
                <Route path="/xfd/edit/:id" element={<XfdEdit />} />
                <Route path="/login" element={<LoginCallback />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;