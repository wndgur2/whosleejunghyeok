import { FunctionComponent, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
                    <header>
                        <section>
                            <h1>{title}</h1>
                            <ol>
                                {
                                    post.tags.map((tag: string, index: number) => (
                                        <Tag key={index} tag={tag} />
                                    ))
                                }
                            </ol>
                        </section>
                        <section>
                            {
                                post.github &&
                                <Link to={post.github} rel="noreferrer" target="_blank">{post.github.split("//")[1]}</Link>
                            }
                            <small>{post.date_started} ~  {post.date_finished}</small>
                        </section>
                    </header>
                    <main>
                        <Markdown>{post.content}</Markdown>
                    </main>

                </div> :
                <Loading phrase="Loading post" />
        }</div>
    );
}

export default Post;