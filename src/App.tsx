import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layouts/Layout';
import Home from './pages/Home/Home';
import NoPage from './pages/NoPage';
import { useEffect, useState } from "react";
import { DeviceContext } from "./contexts/Device";
import usePosts from "./hooks/usePosts";
import Posts from "./types/Posts";
import SearchResult from "./pages/SearchResult/SearchResult";
import { PostsContext } from "./contexts/Posts";

export default function App() {
    let isBrowserDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark' ? true : isBrowserDark);
    const [width, setWidth] = useState(window.innerWidth);
    const posts: Posts = usePosts();

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        });
    }, []);

    return (
        <BrowserRouter>
            <DeviceContext.Provider value={{ isDark, setIsDark, width }}>
                <PostsContext.Provider value={{ posts }}>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="/search/:search_text" element={<SearchResult />} />
                            <Route path="*" element={<NoPage />} />
                        </Route>
                    </Routes>
                </PostsContext.Provider>
            </DeviceContext.Provider>
        </BrowserRouter>
    );
}