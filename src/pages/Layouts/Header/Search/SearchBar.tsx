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
        <search className="search-bar">
            <FiSearch className="search-icon" size={22} />
            <form
                onSubmit={
                    (e) => {
                        e.preventDefault();
                        if (search) router(`/search/${search}`);
                    }
                }
            >
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
        </search>
    );
}

export default SearchBar;