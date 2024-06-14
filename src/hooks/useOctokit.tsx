import { useEffect } from "react";
import octokit from "../utils/octokit";

const useOctokit = () => {
    useEffect(() => {
        const authOctokit = async () => {
            await octokit.rest.users.getAuthenticated();
        }
        authOctokit();
    }, []);

    return octokit;
}

export default useOctokit;