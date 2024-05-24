import { FunctionComponent } from "react";
import { FiSearch } from "react-icons/fi";

import './Search.css';

interface SearchProps {

}

const Search: FunctionComponent<SearchProps> = () => {
    return (
        <div className="search-box">
            <FiSearch className="search-icon" size={24} />
            <input />
        </div>
    );
}

export default Search;