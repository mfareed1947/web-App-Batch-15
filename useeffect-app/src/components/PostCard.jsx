import React from "react";
import { Link } from "react-router";

const PostCard = ({ data }) => {
  const { title, body, tags, reactions, userId, views } = data;
  return (
    <div className="post-card">
      <div className="post-header">
        <h2>{title}</h2>
        <span className="views">{views.toLocaleString()} views</span>
      </div>

      <p className="post-body">{body}</p>

      <div className="post-tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="post-footer">
        <div className="reactions">
          <span className="like">👍 {reactions.likes}</span>
          <span className="dislike">👎 {reactions.dislikes}</span>
        </div>
        <span className="user-id">Posted by User #{userId}</span>
        <Link to={"/about"}>about</Link>
      </div>
    </div>
  );
};

export default PostCard;
