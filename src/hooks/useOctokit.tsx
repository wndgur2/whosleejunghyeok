import { Octokit } from "octokit";
import { useEffect, useMemo } from "react";

const useOctokit = () => {
    const octokit = useMemo<Octokit>(() => new Octokit({ auth: process.env.REACT_APP_GITHUB_TOKEN }), []);

    useEffect(() => {
        const authOctokit = async () => {
            await octokit.rest.users.getAuthenticated();
        }
        authOctokit();
    }, [octokit]);

    return octokit;
}

export default useOctokit;