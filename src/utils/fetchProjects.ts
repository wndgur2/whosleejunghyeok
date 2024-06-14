import _Post from "../types/_Post";
import fetchRawData from "./fetchRawData";

const fetchProjects = async (setPosts:React.Dispatch<React.SetStateAction<_Post[]>>) =>{
    let response = await fetch('/posts/metadata.json');
    const data = await response.json();

    const posts:_Post[] = Object.values(data);

    posts.forEach(async (post) => {
        // load content
        await fetchRawData(`https://raw.githubusercontent.com/wndgur2/${post.title}/main/README.md`)
        .then((text) => {
            if(text === "" || text.startsWith('<!DOCTYPE html>'))
                post.content = "This post is not available.";
            else post.content = text;
            setPosts(Object.values(data));
            return post.content;
        })
        .then(content=>content.match(/<img[^>]+src="([^">]+)".*>/))
        .then((match)=>{
            if(!match) return;
            post.thumbnail = "<img src=" + match[1] + "/>";
            new Image().src = match[1];
            setPosts(Object.values(data));
        });
    });

    return posts;
}
export default fetchProjects;