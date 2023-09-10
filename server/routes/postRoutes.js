import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import Post from "../db/models/post.js";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const router = express.Router();

// Create post
router.route("/").post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const photourl = await cloudinary.uploader.upload(photo);
    const newpost = await Post.create({
      name,
      prompt,
      photo: photourl.url,
    });
    res.status(201).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
});

// Get all posts
router.route("/").get(async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, data: error });
  }
});

export default router;
