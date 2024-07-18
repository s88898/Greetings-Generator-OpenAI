Greetings Generator using OpenAI

This project features a greetings generator that uses the OpenAI API to generate greetings based on input data sent from the client.


Technologies Used
Node.js

Express.js

dotenv

OpenAI API

cors


Setup
Make sure you have Node.js installed on your machine.

Clone this repository to your local machine.

Install dependencies by running npm install.

Create a .env file in the root directory and add your OpenAI API key:


`

OPENAI_API_KEY=your_openai_api_key

`


Start the server by running npm start.


Usage
Send a POST request to /gpt with the required input data to generate greetings.

The server will interact with the OpenAI API to generate greetings based on the provided input.

The response will be in JSON format with the generated greetings.


Endpoints
GET /: Displays a simple "Hello World!" message.

POST /gpt: Generates greetings based on client input data.


Controller Logic
The controller logic included in the appController.js file handles the generation of greetings using the OpenAI API. The runPrompt function constructs a prompt based on input data and generates greetings, while the post function calls the runPrompt function to process the request.


API Integration
The project integrates with the OpenAI API to leverage advanced language processing capabilities for generating customized greetings.


For any inquiries or issues, please contact the project maintainer.
