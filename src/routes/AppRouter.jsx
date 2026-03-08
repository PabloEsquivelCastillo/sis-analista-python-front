import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={null} />
        {/* Crear cuennta */}
        <Route path="/acount" element={null} />
        {/* Dashboard - home usuario */}
        <Route path="/home" element={null} />
        {/* Admin */}
        <Route path="/admin" element={null} />
        {/* 404 */}
        <Route path="/admin" element={null} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;