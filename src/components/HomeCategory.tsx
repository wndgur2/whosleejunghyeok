import { FunctionComponent } from "react";
import './HomeCategory.css';
import { IoIosArrowForward } from "react-icons/io";
interface HomeCategoryProps {
    isMain?: boolean;
    title: string;
    children?: React.ReactNode;
}

const HomeCategory: FunctionComponent<HomeCategoryProps> = ({ isMain, title, children }: HomeCategoryProps) => {
    return (
        <div className={isMain ? "home-category main" : "home-category"}>
            <div className="home-category-title link">
                <h2>{title}</h2>
                <div className="arrow-wrapper">
                    <IoIosArrowForward size={28} />
                </div>
            </div>
            <div className="posts-wrapper">
                <div className="posts">
                    {children}
                </div>
            </div>
        </div >
    );
}

export default HomeCategory;