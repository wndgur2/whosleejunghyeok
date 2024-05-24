import { FunctionComponent } from "react";
import Contents from "../Contents";

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    return (
        <div>
            <Contents />
        </div>
    );
}

export default Home;