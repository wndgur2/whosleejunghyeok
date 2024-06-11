import { FunctionComponent } from "react";
import './HomeCategory.css';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
interface HomeCategoryProps {
    isMain?: boolean;
    category: string;
    children?: React.ReactNode;
}

const HomeCategory: FunctionComponent<HomeCategoryProps> = ({ isMain, category, children }: HomeCategoryProps) => {
    return (
        <section className={isMain ? "home-category main" : "home-category"}>
            <Link className="home-category-category link" to={`search/@${category}`}>
                <h2>{category}</h2>
                <div className="arrow-wrapper">
                    <IoIosArrowForward size={28} />
                </div>
            </Link>
            <div className="posts-wrapper">
                <div className="posts">
                    {children}
                </div>
            </div>
        </section >
    );
}

export default HomeCategory;