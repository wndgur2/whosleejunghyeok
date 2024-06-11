import { FunctionComponent, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './SearchResult.css';
import { PostsContext } from "../../contexts/Posts";
import _Post from "../../types/_Post";
import ListedPost from "../../components/ListedPost";

const SearchResult: FunctionComponent = () => {
    const params = useParams();
    const posts = useContext(PostsContext).posts as _Post[];
    const [result, setResult] = useState<_Post[]>([]);

    useEffect(() => {
        if (!params.search_text) return;

        const search_text = params.search_text.toLowerCase() as string;
        console.log(search_text.slice(1))
        let result;
        if (search_text.startsWith("#")) {
            console.log(posts);
            console.log(search_text.slice(1));
            result = posts.filter((post: _Post) =>
                post.tags.map((tag) => tag.toLowerCase()).includes(search_text.slice(1))
            );
        }
        else if (search_text.startsWith("@")) {
            result = posts.filter((post: _Post) =>
                post.category.toLowerCase() === search_text.slice(1)
            );
        }
        else {
            result = posts.filter((post: _Post) =>
                post.title.toLowerCase().includes(search_text)
            );
        }
        setResult(result);
    }, [params, posts]);

    useEffect(() => {
    }, [result])

    return (
        <div>
            <div className="search-result">
                <h2>Search Result for {params.search_text}</h2>
                {result.map((post: _Post, index) => (
                    <ListedPost title={post.title} tags={post.tags} key={index} />
                ))}

            </div>
        </div>
    );
}

export default SearchResult;