import React, { useState } from 'react';

const PostForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [schedule, setSchedule] = useState('');
  const [photo, setPhoto] = useState(null); // new state for image

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title || !content || !schedule) {
      alert("Fill all fields!");
      return;
    }
    addPost({ title, content, schedule, photo });
    setTitle(''); setContent(''); setSchedule(''); setPhoto(null);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if(file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhoto(reader.result); // store base64 image
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Post Title" 
        value={title} 
        onChange={(e)=>setTitle(e.target.value)} 
      />
      <textarea 
        placeholder="Post Content" 
        value={content} 
        onChange={(e)=>setContent(e.target.value)} 
      />
      <input 
        type="datetime-local" 
        value={schedule} 
        onChange={(e)=>setSchedule(e.target.value)} 
      />
      <input 
        type="file" 
        accept="image/*"
        onChange={handlePhotoChange} 
      />
      <button type="submit">Schedule Post</button>
    </form>
  );
};

export default PostForm;
