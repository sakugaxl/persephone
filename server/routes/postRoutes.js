import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';
import { v2 as cloudinary } from 'cloudinary';
import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// GET ALL POSTS
router.route('/posts').get(async (req, res) => {
    try {
      const posts = await Post.find({});
      res.status(200).json({ success: true, data: posts });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
    }
  });

// HANDLE AI REQUEST
router.route('/ai').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        const aiResponse = await openai.createCompletion({
            prompt,
            max_tokens: 50,
            n: 1,
            temperature: 0.5,
        })

        const text = aiResponse.data.choices[0].text;

        res.status(200).json({ text });
    } catch (error) {
        console.log(error);
        res.status(500).send(error?.response.data.error.message)
    }
})

export default router;
