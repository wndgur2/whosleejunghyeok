import { FunctionComponent, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tag from "../../components/Tag";
import _Post from "../../types/_Post";
import { PostsContext } from "../../contexts/Posts";
import Markdown from "markdown-to-jsx";
import "./Post.css";
import Loading from "../../components/Loading";

const Post: FunctionComponent = () => {
    const posts: _Post[] = useContext(PostsContext).posts;
    const title = useParams().post_title;
    const [post, setPost] = useState<_Post>();

    useEffect(() => {
        if (!posts) return;
        setPost(posts.find(_post => _post.title === title));
    }, [posts, title]);

    return (
        <div className="post-container">{
            post ?
                <div className="post">
                    <section className="title">
                        <h1>{title}</h1>
                        <div className="metadata">
                            <div className="tags">
                                {
                                    post.tags.map((tag: string, index: number) => (
                                        <Tag key={index} tag={tag} />
                                    ))
                                }
                            </div>
                            <small>{post.date_started} ~  {post.date_finished}</small>
                        </div>
                    </section>
                    <section className="content">
                        <Markdown>{post.content}</Markdown>
                    </section>

                </div> :
                <Loading phrase="Loading post" />
        }</div>
    );
}

export default Post;