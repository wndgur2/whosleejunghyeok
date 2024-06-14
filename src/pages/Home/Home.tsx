import { FunctionComponent, useContext } from "react";
import './Home.css';
import HomeCategory from "./HomeCategory";
import HomePost from "../../components/ListedPost";
import ListedProject from "../../components/ListedProject";
import Profile from "../../components/Profile/Profile";
import { PostsContext } from "../../contexts/Posts";
import _Post from "../../types/_Post";
import Loading from "../../components/Loading";

const Home: FunctionComponent = () => {
    const posts = useContext(PostsContext).posts as _Post[];
    const categories = ["Project", "Career", "Algorithm", "Theory"];

    const renderCategory = (category: string) => {
        let count = 0;
        return (
            <HomeCategory key={category} isMain={category === "Project"} category={category}>
                {
                    posts.map((post: _Post, idx) => {
                        if (post.category !== category.toLowerCase() || count >= 5)
                            return <div key={idx}></div>;
                        count += 1;

                        if (category === "Project")
                            return <ListedProject
                                key={idx}
                                post={post}
                            />
                        return <HomePost
                            key={idx}
                            post={post}
                        />
                    })
                }
            </HomeCategory>
        );
    }

    return (
        <div id="home">

            <Profile />

            <main>
                {posts.length ?
                    categories.map(renderCategory) :
                    <Loading phrase="Fetching data" />
                }
            </main>
        </div>
    );
}

export default Home;