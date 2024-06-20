import { FunctionComponent, useContext, useEffect } from "react";
import './Home.css';
import HomeCategory from "./HomeCategory";
import Profile from "../../components/Profile/Profile";
import { PostsContext } from "../../contexts/Posts";
import { _Post, _Project } from "../../types/_Post";
import { useNavigate, useSearchParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import ListedPost from "../../components/ListedPost";
import Loading from "../../components/Loading";
import ListedProject from "../../components/ListedProject";
import usePostsByCategory from "../../hooks/usePostsByCategory";
import CATEGORIES from "../../consts/CATEGORIES";

const Home: FunctionComponent = () => {
    const posts = useContext(PostsContext).posts as _Post[];
    const postsByCategory = usePostsByCategory(posts);

    const router = useNavigate();
    const searchParams = useSearchParams()[0];
    const lost_url = searchParams.get("lost_url");

    useEffect(() => {
        if (lost_url) router(lost_url);
    }, [lost_url, router]);

    return (
        <div id="home">

            <Profile />

            <div className="marquee-container">
                <Marquee className="marquee">
                    <span className="in-marquee">
                        {"who's leejunghyeok ".repeat(5)}
                    </span>
                </Marquee>
            </div>

            <main>
                {
                    postsByCategory[CATEGORIES.PROJECT] &&
                    <HomeCategory category={CATEGORIES.PROJECT}>{
                        postsByCategory[CATEGORIES.PROJECT].map((project: _Project, i: number) =>
                            <ListedProject key={i} post={project} />
                        )}
                    </HomeCategory>
                }
                {
                    Object.keys(postsByCategory).length ?
                        Object.keys(postsByCategory)
                            .filter((key) => key !== CATEGORIES.PROJECT)
                            .map((category: any) =>
                                <HomeCategory key={category} category={category}>
                                    {
                                        postsByCategory[category].map((post: _Post, i: number) => {
                                            return <ListedPost key={i} post={post} />
                                        })
                                    }
                                </HomeCategory>) :
                        <Loading phrase="loading posts" />
                }
            </main>
        </div>
    );
}

export default Home;