import Post from "../types/Post";

const loadPosts = async ():Promise<Post[]> =>{
    let response = await fetch('/posts/metadata.json');
    const posts = await response.json();

    for (let key in posts) {
        fetch(`/posts/markdown/${key}.md`)
        .then((response) => response.text())
        .then((text) => {
            if(text.startsWith('<!DOCTYPE html>'))
                posts[key].content = "This post is not available.";
            else posts[key].content = text;
        });
    }
    const data:Post[] = Object.values(posts);
    return data;
}
export default loadPosts;