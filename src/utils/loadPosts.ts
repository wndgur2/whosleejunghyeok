import _Post from "../types/_Post";
import loadMarkdown from "./loadMarkDown";

const loadPosts = async ():Promise<_Post[]> =>{
    let response = await fetch('/posts/metadata.json');
    const posts = await response.json();

    for (let key in posts) {
        await loadMarkdown(posts[key].title)    
        .then((text) => {
            if(text.startsWith('<!DOCTYPE html>')){
                posts[key].content = "This post is not available.";
            } else {
                posts[key].content = text;
            }
        });
    }
    const data:_Post[] = Object.values(posts);
    return data;
}
export default loadPosts;