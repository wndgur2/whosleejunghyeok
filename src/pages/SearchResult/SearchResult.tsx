import { FunctionComponent, useEffect } from "react";
import { useParams } from "react-router-dom";
import './SearchResult.css';

interface SearchResultProps {
}

const SearchResult: FunctionComponent<SearchResultProps> = () => {
    const params = useParams();
    useEffect(() => {
        console.log(params);
    }, [params]);
    return (
        <div>
            <h1>Search Result</h1>
            <div className="search-result">
                <p>SEARCH FOR: {JSON.stringify(params.string)}</p>
            </div>
        </div>
    );
}

export default SearchResult;