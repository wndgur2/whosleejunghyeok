import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layouts/Layout';
import Home from './pages/Home/Home';
import NoPage from './pages/NoPage';
import { useState } from "react";
import { ThemeContext } from "./contexts/Theme";
import usePosts from "./hooks/usePosts";
import Posts from "./types/Posts";
import SearchResult from "./pages/SearchResult/SearchResult";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const posts: Posts = usePosts();
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home posts={posts} />} />
            <Route path="/search/:string" element={<SearchResult />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}