import { FunctionComponent, useState } from "react";
import { FiSearch } from "react-icons/fi";

import './SearchBar.css';
import { useNavigate } from "react-router-dom";

interface SearchBarProps {

}

const SearchBar: FunctionComponent<SearchBarProps> = () => {
    const router = useNavigate();
    const [search, setSearch] = useState<string>('');
    return (
        <div className="search-box">
            <FiSearch className="search-icon" size={22} />
            <form
                onSubmit={
                    (e) => {
                        e.preventDefault();
                        router(`/search/${search}`);
                    }
                }
            >
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
        </div>
    );
}

export default SearchBar;