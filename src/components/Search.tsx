import { FunctionComponent } from "react";
import { FiSearch } from "react-icons/fi";

import './Search.css';

interface SearchProps {

}

const Search: FunctionComponent<SearchProps> = () => {
    return (
        <div className="search-box">
            <FiSearch className="search-icon" size={22} />
            <input onSubmit={
                (e) => {
                    e.preventDefault();
                    console.log(e);
                }
            } />
        </div>
    );
}

export default Search;