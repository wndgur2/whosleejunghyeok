import Post from "../types/Post";

const loadPosts = async ():Promise<Post[]> =>{
    let response = await fetch('/posts/metadata.json');
    const posts = await response.json();
    const data:Post[] = Object.values(posts);
    return data;
}
export default loadPosts;