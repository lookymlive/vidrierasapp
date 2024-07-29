import React, { useState } from 'react';
import { uploadVideo } from '../services/videoService.js';

const VideoUpload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadVideo({ title, description, url });
    setTitle('');
    setDescription('');
    setUrl('');
  };

  return (
    <div>
      <h2>Subir Video</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL del video"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button type="submit">Subir</button>
      </form>
    </div>
  );
};

export default VideoUpload;
