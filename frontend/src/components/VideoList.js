import React, { useState, useEffect } from 'react';
import { getVideos } from '../services/videoService.js';

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getVideos();
        if (Array.isArray(data)) {
          setVideos(data);
        } else {
          console.error("Expected an array but received:", data);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
  
    fetchVideos();
  }, []);
  
   
  return (
    <div>
      <h2>Videos</h2>
      <ul>
        {(videos || []).map((video) => (
          <li key={video._id}>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <video src={video.url} controls />
          </li>
        ))}
      </ul>
    </div>
  );
};
  

export default VideoList;
