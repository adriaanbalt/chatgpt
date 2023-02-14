# OpenAI Chat GPT & Dall-E NodeJS Express web page and web service


- Javascript [here](https://github.com/adriaanbalt/chatgpt/blob/main/public/client.js)
- HTML & CSS [here](https://github.com/adriaanbalt/chatgpt/blob/main/public/index.html)
- NodeJS [here](https://github.com/adriaanbalt/chatgpt/blob/main/index.js)
- Express [here](https://github.com/adriaanbalt/chatgpt/blob/main/index.js#L11)
- Chat GPT [here](https://github.com/adriaanbalt/chatgpt/blob/main/index.js#L28)
- Dall-E [here](https://github.com/adriaanbalt/chatgpt/blob/main/index.js#L44)

## Example
https://user-images.githubusercontent.com/146778/218798580-63e5f29d-f010-4ad7-9dbd-8ead4038a962.mov

### Chat GPT Model: `text-davinci-003`

## Setup

1. Clone this repo
2. Run `$ yarn` 
3. Run `$ node index.js`
4. Open browser to http://localhost:3000

## Summary:

Creates a NodeJS Express web service that hosts both a webpage and API.

1. The webpage includes an HTML file with an input field and submit button.  The input field is where the user can enter a custom pieces of text; their "prompt".
2. When clicking the submit button, the input field's text value is sent to the NodeJS Express API ["/completion"](https://github.com/adriaanbalt/chatgpt/blob/main/index.js#L15) endpoint.  
3. This endpoint receives the user's prompt and passes it into OpenAI npm module to generate both a Chat GPT response and an image based on the provided prompt.
4. The text and image are then rendered below the input field on the HTML webpage.

# Requirements

1. Create an account with OpenAI and generate an API key. You can find instructions for creating an account and generating an API key on the OpenAI website [here](https://beta.openai.com/signup/).  Once you have your API key create a `.env` file with `OPENAI_API_KEY=your-key-here` inside of it

2. Use the OpenAI npm module to connect to the service. You can find documentation for the OpenAI npm module [here](https://www.npmjs.com/package/openai).
