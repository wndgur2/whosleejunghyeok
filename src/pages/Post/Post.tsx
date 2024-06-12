import { FunctionComponent, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tag from "../../components/Tag";
import _Post from "../../types/_Post";
import { PostsContext } from "../../contexts/Posts";
import Markdown from "markdown-to-jsx";
import "./Post.css";

const Post: FunctionComponent = () => {
    const posts: _Post[] = useContext(PostsContext).posts;
    const title = useParams().post_title;
    const [post, setPost] = useState<_Post>();

    useEffect(() => {
        if (!posts) return;
        setPost(posts.find(_post => _post.title === title));
    }, [posts]);

    return (
        <>{
            post ?
                <div className="post">
                    <h1>{title}</h1>
                    <section className="tags">
                        {
                            post.tags.map((tag: string, index: number) => (
                                <Tag key={index} tag={tag} />
                            ))
                        }
                    </section>
                    <small>{post.date_started} ~  {post.date_finished}</small>

                    <Markdown>{post.content}</Markdown>

                </div> :
                <div>
                    Post {title} not found
                </div>
        }</>
    );
}

export default Post;