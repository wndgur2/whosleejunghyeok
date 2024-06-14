import { Octokit } from "octokit";
import _Post from "../types/_Post";
import fetchRawData from "./fetchRawData";
import { ObjectType } from "typescript";
import fetchProjects from "./fetchProjects";
import _Category from "../types/_Category";

const fetchAllPosts = async (octokit:Octokit, setPosts:React.Dispatch<React.SetStateAction<_Post[]>>) => {
    const posts:_Post[] = await fetchProjects(setPosts);

    const max_depth = 3;

    const searchForPosts = (category:_Category , path:string, depth:number) => {
        if(depth >= max_depth) return;

        octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
            owner: 'wndgur2',
            repo: 'wndgur2.github.io',
            path: path
        }).then(({data:contents}:{data:ObjectType[]}) => {
            contents.forEach((content:any) => {
                if(content.type === 'dir')
                    searchForPosts(category, content.path, depth+1);
                if(content.name.includes('.md'))
                    fetchRawData(content.download_url)
                    .then(md=>{
                        const post:_Post ={
                            title: md.split(' ')[1],
                            content: md,
                            category: category,
                            tags: [],                    
                            date_started: "",
                        };
                        posts.push(post);
                        setPosts(posts);
                    });
            })})
    };

    searchForPosts('algorithm', 'algorithm', 0);
};

export default fetchAllPosts;