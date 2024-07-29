const API_URL = 'http://localhost:5000/api/videos';

// videoService.js
export const getVideos = async () => {
  try {
    const response = await fetch(API_URL); // Replace with your API endpoint'https://api.example.com/videos'
    const data = await response.json();
    return data; // Ensure this is an array
  } catch (error) {
    console.error("Failed to fetch videos:", error);
    return [];
  }
};


export const uploadVideo = async (videoData) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(videoData),
    });

    const data = await response.json();
    if (response.ok) {
      alert('Video subido exitosamente');
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error('Error al subir video:', error);
  }
};
