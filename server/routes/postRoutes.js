import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

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