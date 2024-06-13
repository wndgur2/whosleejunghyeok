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
        const search_words = search_text.split(" ") as string[];

        let result = posts;

        search_words.forEach((word) => {
            if (word.startsWith("#")) {
                result = result.filter((post: _Post) =>
                    post.tags.map((tag) => tag.toLowerCase()).includes(word.slice(1))
                );
            }
            else if (word.startsWith("@")) {
                result = result.filter((post: _Post) =>
                    post.category.toLowerCase() === word.slice(1)
                );
            }
            else {
                result = result.filter((post: _Post) =>
                    post.content.toLowerCase().includes(word) ||
                    post.title.toLowerCase().includes(word)
                );
            }
        });
        setResult(result);
    }, [params, posts]);

    return (
        <div className="search-result">
            <h2>Search Result for {params.search_text}</h2>
            <ul>
                {result.map((post: _Post, index) => (
                    <ListedPost post={post} key={index} />
                ))}
            </ul>
        </div>
    );
}

export default SearchResult;