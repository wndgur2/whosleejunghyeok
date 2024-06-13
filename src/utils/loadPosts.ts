import _Post from "../types/_Post";
import loadMarkdown from "./loadMarkDown";

const loadPosts = async ():Promise<_Post[]> =>{
    let response = await fetch('/posts/metadata.json');
    const posts = await response.json();

    for (let key in posts) {
        // load content
        await loadMarkdown(posts[key].title, posts[key].category)    
        .then((text) => {
            if(text === "" || text.startsWith('<!DOCTYPE html>')){
                posts[key].content = "This post is not available.";
            } else {
                posts[key].content = text;
            }

            return posts[key].content;
        })
        .then(content=>content.match(/<img[^>]+src="([^">]+)".*>/))
        .then((match)=>{
            if(match)
                posts[key].thumbnail = "<img src=" + match[1] + "/>";
        });
    }
    const data:_Post[] = Object.values(posts);
    return data;
}
export default loadPosts;