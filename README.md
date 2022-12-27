# openai

1. You need to create an account with OpenAI and generate an API key. You can find instructions for creating an account and generating an API key on the OpenAI website [here](https://beta.openai.com/signup/).

2. You will use the OpenAI npm module to connect to the service. You can find documentation for the OpenAI npm module [here](https://www.npmjs.com/package/openai).

3. You will create a web server with a webpage that has a textbox and submit button. W3Schools has a [tutorial on creating a web server with Node.js](https://www.w3schools.com/nodejs/nodejs_http.asp) and a [tutorial on HTML forms](https://www.w3schools.com/html/html_forms.asp) that may be helpful.
4. The web server will have an endpoint that receives a POST message with the text from the textbox as the prompt. MDN Web Docs has a [tutorial on creating a server-side script to handle HTTP POST requests](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/forms#Creating_server-side_scripts_to_handle_POST_requests).

5. You will send the prompt to the OpenAI createComplation function. You can find documentation for the createComplation function [here](https://beta.openai.com/docs/api-reference/completions/create).

6. The response from createComplation will be used as the input for the createImage function, which uses "dall-e". You can find documentation for the createImage function [here](https://beta.openai.com/docs/api-reference/images/create).

7. The text and image will be returned and displayed on the web page. W3Schools has a [tutorial on displaying data on a webpage with JavaScript](https://www.w3schools.com/js/js_display_data.asp) that may be helpful.
## modal: text-davinci-003
