import { FunctionComponent } from "react";
import './Home.css';
import HomeCategory from "../components/HomeCategory";
import HomePost from "../components/HomePost";
import HomeProject from "../components/HomeProject";

const Home: FunctionComponent = () => {
    return (
        <div id="home">
            <HomeCategory isMain title="Projects">
                <HomeProject title="Portfolio website" description="My personal website" image="https://via.placeholder.com/150" github="https://github.com" tags={["react", "website"]} date="2021-10-01" />
                <HomeProject title="Portfolio website" description="My personal website" image="https://via.placeholder.com/150" github="https://github.com" tags={["react", "website"]} date="2021-10-01" />
                <HomeProject title="Portfolio website" description="My personal website" image="https://via.placeholder.com/150" github="https://github.com" tags={["react", "website"]} date="2021-10-01" />
                <HomeProject title="Portfolio website" description="My personal website" image="https://via.placeholder.com/150" github="https://github.com" tags={["react", "website"]} date="2021-10-01" />
                <HomeProject title="Portfolio website" description="My personal website" image="https://via.placeholder.com/150" github="https://github.com" tags={["react", "website"]} date="2021-10-01" />
                <HomeProject title="Portfolio website" description="My personal website" image="https://via.placeholder.com/150" github="https://github.com" tags={["react", "website"]} date="2021-10-01" />
                <HomeProject title="Portfolio website" description="My personal website" image="https://via.placeholder.com/150" github="https://github.com" tags={["react", "website"]} date="2021-10-01" />
            </HomeCategory>
            <HomeCategory title="Career">
                <HomePost title="How to write a resume" tags={["resume", "career"]} />
                <HomePost title="How to prepare for an interview" tags={["interview", "career"]} />
                <HomePost title="How to write a resume" tags={["resume", "career"]} />
                <HomePost title="How to prepare for an interview" tags={["interview", "career"]} />
            </HomeCategory>
            <HomeCategory title="Algorithm solve">
                <HomePost title="How to sort an array" tags={["sort", "algorithm"]} />
                <HomePost title="How to implement a binary search" tags={["binary search", "algorithm"]} />
                <HomePost title="How to sort an array" tags={["sort", "algorithm"]} />
                <HomePost title="How to implement a binary search" tags={["binary search", "algorithm"]} />
            </HomeCategory>
            <HomeCategory title="Theories">
                <HomePost title="How to communicate effectively" tags={["communication", "talk"]} />
                <HomePost title="How to make a good presentation" tags={["presentation", "talk"]} />
                <HomePost title="How to communicate effectively" tags={["communication", "talk"]} />
                <HomePost title="How to make a good presentation" tags={["presentation", "talk"]} />
            </HomeCategory>
        </div>
    );
}

export default Home;