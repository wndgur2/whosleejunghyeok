import { FunctionComponent } from "react";
import './HomeCategory.css';
import { IoIosArrowForward } from "react-icons/io";
interface HomeCategoryProps {
    title: string;
    children?: React.ReactNode;
}

const HomeCategory: FunctionComponent<HomeCategoryProps> = ({ title, children }: HomeCategoryProps) => {
    return (
        <div className="home-category">
            <div className="home-category-title">
                <h2>{title}</h2>
                <div className="arrow-wrapper">
                    <IoIosArrowForward className="arrow" size={28} />
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}

export default HomeCategory;