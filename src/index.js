const { Configuration, OpenAIApi } = require("openai");
const express = require('express');
const request = require('request');
const dotenv = require('dotenv');
dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.post('/completion', async (req, res) => {
  // get manipulated text from openai chat
  let completion = null;
  try {
    const prompt = req.body.prompt;
    const model = 'text-davinci-003';
    const max_tokens = 100;
    const temperature = 0.9;
    completion = await openai.createCompletion({ prompt, model, max_tokens, temperature });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'OpenAI createCompletion error' });
  }

  // check if the choices property is defined and has at least one element
  if (completion && completion.data && completion.data.choices && completion.data.choices.length > 0) {
    // check if the text property of the first choice is defined
    if (completion.data.choices[0].text) {
      // feed manipulated text from openai chat into openai image generation using dall-e
      try {
        const response = await openai.createImage({
          prompt: completion.data.choices[0].text,
          n: 1,
          size: "1024x1024",
        });
        const image_url = response.data.data[0].url;
        res.send({text: completion.data.choices[0].text, image:image_url}); // return image to webpage for rendering
      } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'OpenAI createImage error' });
      }
    } else {
      res.status(500).send({ error: 'First choice text is undefined' });
    }
  } else {
    res.status(500).send({ error: 'Choices property is undefined or empty' });
  }
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
