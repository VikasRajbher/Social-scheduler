import React from 'react';

const PostList = ({ posts, deletePost }) => {
  return (
    <div className="post-list">
      {posts.length === 0 && <p>No scheduled posts</p>}
      {posts.map((post, index) => (
        <div key={index} className="post-card">
          <h3>📌 {post.title}</h3>
          {post.photo && <img src={post.photo} alt="Post" className="post-photo" />}
          <p>{post.content}</p>
          <small>Scheduled at: {new Date(post.schedule).toLocaleString()}</small>
          <button onClick={() => deletePost(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
