import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layouts/Layout';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import { useState } from "react";
import { ThemeContext } from "./contexts/Theme";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}