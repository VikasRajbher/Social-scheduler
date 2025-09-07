import React, { useState } from 'react';
import PostForm from './PostForm.jsx';
import PostList from './PostList.jsx';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => setPosts([...posts, post]);
  const deletePost = (index) => setPosts(posts.filter((_, i) => i !== index));

  return (
    <div className="container">
      <h1>Social Media Post Scheduler</h1>
      <PostForm addPost={addPost} />
      <PostList posts={posts} deletePost={deletePost} />
    </div>
  );
}

export default App;
