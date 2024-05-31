import { FunctionComponent } from "react";
import './Home.css';
import HomeCategory from "../components/HomeCategory";
import PostLink from "../components/PostLink";
import HomePost from "../components/HomePost";

const Home: FunctionComponent = () => {
    return (
        <div id="home">
            <HomeCategory title="Project">
                <HomePost title="Portfolio website" description="My personal website" image="https://via.placeholder.com/150" github="https://github.com" tags={["react", "website"]} date="2021-10-01" />
                <HomePost title="Portfolio website" description="My personal website" image="https://via.placeholder.com/150" github="https://github.com" tags={["react", "website"]} date="2021-10-01" />
                <HomePost title="Portfolio website" description="My personal website" image="https://via.placeholder.com/150" github="https://github.com" tags={["react", "website"]} date="2021-10-01" />
                <HomePost title="Portfolio website" description="My personal website" image="https://via.placeholder.com/150" github="https://github.com" tags={["react", "website"]} date="2021-10-01" />
            </HomeCategory>
            <HomeCategory title="Career">
                <PostLink title="How to write a resume" tags={["resume", "career"]} />
                <PostLink title="How to prepare for an interview" tags={["interview", "career"]} />
            </HomeCategory>
            <HomeCategory title="Algorithm study">
                <PostLink title="How to sort an array" tags={["sort", "algorithm"]} />
                <PostLink title="How to implement a binary search" tags={["binary search", "algorithm"]} />
            </HomeCategory>
            <HomeCategory title="Talk">
                <PostLink title="How to communicate effectively" tags={["communication", "talk"]} />
                <PostLink title="How to make a good presentation" tags={["presentation", "talk"]} />
            </HomeCategory>
        </div>
    );
}

export default Home;