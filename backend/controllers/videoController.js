import Video from '../models/Video.js';

export const uploadVideo = async (req, res) => {
  const { title, description, url } = req.body;
  const userId = req.userId;

  try {
    const newVideo = new Video({ title, description, url, user: userId });
    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getVideos = async (req, res) => {
  try {
    const videos = await Video.find().populate('user', 'name email');
    res.status(200).json(videos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
