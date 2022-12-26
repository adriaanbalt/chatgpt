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

app.post('/completion', (req, res) => {
  
  const prompt = req.body.prompt;
  const model = 'text-davinci-002';

  console.log('prompt',prompt)

  // openai.createCompletion({ prompt, model }, function(error, response) {
  //   console.log('create completion', response)
  //   if (error) {
  //     console.error(error);
  //     return;
  //   }

  //   res.send(response.choices[0].text);
  // });

  const options = {
    method: 'POST',
    url: `https://api.openai.com/v1/models/${model}/completions`,
    headers: {
      'Content-Type': 'application/json',
    },
    json: {
      prompt: prompt,
    },
  };

  request(options, function(error, response, body) {
    if (error) {
      console.error(error);
      return;
    }

    res.send(body);
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
