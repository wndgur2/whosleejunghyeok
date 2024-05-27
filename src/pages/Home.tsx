import { FunctionComponent } from "react";
import './Home.css';
import HomeCategory from "../components/HomeCategory";
import PostLink from "../components/PostLink";

const Home: FunctionComponent = () => {
    return (
        <div id="home">
            <HomeCategory title="Career">
                <PostLink title="How to write a resume" tags={["resume", "career"]} />
                <PostLink title="How to prepare for an interview" tags={["interview", "career"]} />
            </HomeCategory>
            <HomeCategory title="Project">
                <PostLink title="How to create a React app" tags={["react", "project"]} />
                <PostLink title="How to deploy a website" tags={["deployment", "project"]} />
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