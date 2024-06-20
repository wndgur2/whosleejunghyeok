import { FunctionComponent, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import './Search.css';
import { _Post, _Project } from "../../types/_Post";
import ListedPost from "../../components/ListedPost";
import useSearchPosts from "../../hooks/useSearchPosts";
import { FaSortAmountUp, FaSortAmountDown } from "react-icons/fa";
import ListedProject from "../../components/ListedProject";
import CATEGORIES from "../../consts/CATEGORIES";
import usePostsByCategory from "../../hooks/usePostsByCategory";
import HomeCategory from "../Home/HomeCategory";
import Loading from "../../components/Loading";

const Search: FunctionComponent = () => {
    const params = useParams();
    const posts = useSearchPosts(params);
    const [recentFirst, setRecentFirst] = useState(true);
    const sortedPosts = useMemo(() => {
        return posts.sort((a, b) => {
            if (recentFirst)
                return a.date_started < b.date_started ? 1 : -1;
            return a.date_started > b.date_started ? 1 : -1;
        });
    }, [posts, recentFirst])

    const postsByCategory = usePostsByCategory(sortedPosts);


    return (
        <main className="search-result">
            <header>
                <h2>Search Result for {params.search_text}</h2>
                <button className="search-options" onClick={() => {
                    setRecentFirst(!recentFirst);
                }}>
                    {recentFirst ?
                        <FaSortAmountDown /> :
                        <FaSortAmountUp />
                    }
                </button>
            </header>
            {
                Object.keys(postsByCategory).length ?
                    Object.keys(postsByCategory)
                        .map((category: any) =>
                            <HomeCategory key={category} category={category}>{
                                postsByCategory[category].map((post: _Post, i: number) =>
                                    category === CATEGORIES.PROJECT ?
                                        <ListedProject key={i} post={post as _Project} />
                                        : <ListedPost key={i} post={post} />
                                )}
                            </HomeCategory>) :
                    <Loading phrase="loading posts" />
            }
        </main>
    );
}

export default Search;