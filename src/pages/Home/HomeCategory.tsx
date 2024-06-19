import { FunctionComponent, useRef } from "react";
import './HomeCategory.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import _Category from "../../types/_Category";
interface HomeCategoryProps {
    category: _Category;
    children?: (JSX.Element | null)[];
}

const HomeCategory: FunctionComponent<HomeCategoryProps> = ({ category, children }: HomeCategoryProps) => {
    const plural = (category: _Category): string => {
        switch (category) {
            case 'project':
                return 'Projects';
            case 'algorithm':
                return 'Algorithms';
            case 'life':
                return 'Life';
            case 'study':
                return 'Study';
            case 'other':
                return 'Others';
        }
    }
    const postsRef = useRef<HTMLUListElement>(null);

    const scrollPosts = (direction: "backward" | "forward") => {
        if (postsRef.current) {
            postsRef.current.scrollBy({
                left: direction === "backward" ? -300 : 300,
                behavior: 'smooth'
            });
        }
    }

    return (
        <section className="home-category">
            <header>
                <Link className="link" to={`search/@${category}`} state={{ search_text: '@' + category }}>
                    <h1>{plural(category)}</h1>
                    <IoIosArrowForward className="arrow-wrapper" size={34} />
                </Link>
                <div className="scroll-buttons">
                    <button onClick={() => scrollPosts("backward")}><IoIosArrowBack style={{ marginLeft: "-2px" }} className="icon" size={34} /></button>
                    <button onClick={() => scrollPosts("forward")}><IoIosArrowForward style={{ marginRight: "-2px" }} className="icon" size={34} /></button>
                </div>
            </header>
            <ul className="posts" ref={postsRef}>
                {
                    children && children.length ? children
                        : <div className="no-posts">No posts</div>
                }
            </ul>
        </section >
    );
}

export default HomeCategory;