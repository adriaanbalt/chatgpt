const { Configuration, OpenAIApi } = require("openai");
const express = require('express');
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
  const prompt = req.body.prompt;
  let text, images;
  try {
    const model = 'text-davinci-003';
    const max_tokens = 150;
    const temperature = 0.9;
    const top_p = 1;
    const frequency_penalty = 0;
    const presence_penalty = 0.6;
    const stop = [" Human:", " AI:"];
    completion = await openai.createCompletion({ 
      prompt,
      model,
      max_tokens,
      temperature,
      top_p,
      frequency_penalty,
      presence_penalty,
      stop });
    text = completion.data.choices[0].text;
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'OpenAI createCompletion error' });
  }
  
  try {
    const response = await openai.createImage({
      prompt,
      n: 4,
      size: "512x512",
    });
    images = response.data.data.reduce((a,c) => [...a,c.url], []);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'OpenAI createImage error' });
  }

  if ( text && images ) {
    res.send({text, images});
  } else if (text && !images) {
    res.send({text});
  } else if (images && !text) {
    res.send({images});
  }
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
