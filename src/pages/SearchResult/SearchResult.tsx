import { FunctionComponent, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './SearchResult.css';
import Posts from "../../types/Posts";
import { PostsContext } from "../../contexts/Posts";
import Post from "../../types/Post";

const SearchResult: FunctionComponent = () => {
    const params = useParams();
    const posts = useContext(PostsContext).posts as Posts;
    const [result, setResult] = useState<Post[]>([]);

    useEffect(() => {
        if (!params.search_text) return;

        const search_text = params.search_text.toLowerCase() as string;
        const result = Object.values(posts).reduce((acc, cur) => {
            return acc.concat(cur.filter(
                (post: Post) =>
                    post.title.toLowerCase().includes(search_text)
            ));
        }, []);
        setResult(result);
    }, [params]);

    useEffect(() => {
    }, [result])

    return (
        <div>
            <h1>Search Result</h1>
            <div className="search-result">
                {result.map((post: Post, index) => (
                    <div key={index} className="search-result-item">
                        <h2>{post.title}</h2>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default SearchResult;