import { FunctionComponent, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './SearchResult.css';
import Posts from "../../types/Posts";
import { PostsContext } from "../../contexts/Posts";
import Post from "../../types/Post";
import ListedPost from "../../components/ListedPost";

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
    }, [params, posts]);

    useEffect(() => {
    }, [result])

    return (
        <div>
            <div className="search-result">
                <h2>Search Result for {params.search_text}</h2>
                {result.map((post: Post, index) => (
                    <ListedPost title={post.title} tags={post.tags} key={index} />
                ))}

            </div>
        </div>
    );
}

export default SearchResult;