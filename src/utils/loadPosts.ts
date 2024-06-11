import _Post from "../types/_Post";

const loadPosts = async ():Promise<_Post[]> =>{
    let response = await fetch('/posts/metadata.json');
    const posts = await response.json();

    for (let key in posts) {
        await fetch(`/posts/markdown/${key}.md`)
        .then((response) => response.text())
        .then((text) => {
            if(text.startsWith('<!DOCTYPE html>')){
                posts[key].content = "This post is not available.";
            } else {
                posts[key].content = text;
            }
        });
    }
    const data:_Post[] = Object.values(posts);
    console.log(data);
    return data;
}
export default loadPosts;