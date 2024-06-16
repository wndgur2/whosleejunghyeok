import { FunctionComponent } from "react";
import './HomeCategory.css';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import _Category from "../../types/_Category";
interface HomeCategoryProps {
    isMain?: boolean;
    category: _Category;
    children?: (JSX.Element | null)[];
}

const HomeCategory: FunctionComponent<HomeCategoryProps> = ({ isMain, category, children }: HomeCategoryProps) => {
    const plural = (category: _Category): string => {
        switch (category) {
            case 'project':
                return 'Projects';
            case 'algorithm':
                return 'Algorithms';
            case 'career':
                return 'Career';
            case 'study':
                return 'Study';
            case 'other':
                return 'Others';
        }
        return category;
    }
    return (
        <section className={isMain ? "home-category main" : "home-category"}>
            <Link className="home-category-name link" to={`search/@${category}`} state={{ search_text: '@' + category }}>
                <h1>{plural(category)}</h1>
                <div className="arrow-wrapper">
                    <IoIosArrowForward size={28} />
                </div>
            </Link>
            <div className="posts-wrapper">
                <div className="posts">
                    {
                        children && children.length ? children
                            : <div className="no-posts">No posts</div>
                    }
                </div>
            </div>
        </section >
    );
}

export default HomeCategory;