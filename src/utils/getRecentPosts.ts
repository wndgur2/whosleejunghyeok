import Post from "../types/Post";
import Posts from "../types/Posts";

const getRecentPosts = (posts:Posts) => {
    const tmp_posts:Post[] = posts.project.concat(posts.career, posts.algorithm, posts.theory);
    return tmp_posts.sort((a, b) => {
        const dateA = new Date(a.date_started).getTime();
        const dateB = new Date(b.date_started).getTime();
        return dateB - dateA;
    }).slice(0, 3);
}

export default getRecentPosts;