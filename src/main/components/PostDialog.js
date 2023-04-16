import React, { useState } from 'react';
import axios from 'axios'

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('file', file);

    try {
      axios.post('/api/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        alert("Posted Successfully");
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }catch (error) {
    console.error(error);
  }
  }
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} style={{maxWidth:"500px",margin:"auto"}}>
      <div>
        <label htmlFor="title">Title:</label>
        <input className='form-control mb-4'
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea className='form-control mb-4'
          id="content"
          name="content"
          value={content}
          onChange={handleContentChange}
        />
      </div>
      <div>
        <label htmlFor="file">File:</label>
        <input type="file" className='form-control mb-4' id="file" name="file" onChange={handleFileChange} />
      </div>
      <button type="submit" className='btn btn-primary shadow d-block w-100'>Create Post</button>
    </form>
    </div>
  );
}
