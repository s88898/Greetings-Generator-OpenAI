
import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";
import cors from "cors";
dotenv.config();
const openai = new OpenAI ({
    apiKey:process.env.OPENAI_API_KEY,    
});
const app = express()
app.use(express.json());
app.use(cors());

const appController = {
     
    runPrompt: async (req, res) => {
        const prompt = `Don't include in the response
            "creating", "creating an ai", "generating", "ai", "desgining", "video", "incorporating".
            My request is: write me  3 ideas of :
            ${req.body.type + req.body.length + req.body.addressee + req.body.mainSubject + req.body.SubTheme + req.body.atmosphere} 
            Also, return the response in JSON format that can be parsed as follows:
            {
                "1":"...",
                "2":"...",
                "3":"..."
            }`;

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "system", content: prompt }],
            max_tokens: 100,
        });

        const parsableJSONresponse = response.choices[0].message.content;
        console.log("__________" + parsableJSONresponse);

        let parsedResponse;
        try {
            parsedResponse = JSON.parse(parsableJSONresponse);
        } catch (error) {
            console.error("Error parsing JSON response:", error);
            res.status(500).send("Error parsing JSON response");
            return {};
        }

        console.log("prompt 1:", parsedResponse["1"]);
        console.log("prompt 2:", parsedResponse["2"]);
        console.log("prompt 3:", parsedResponse["3"]);

        res.json(parsedResponse);
    },

    post: async (req, res) => {
        try {
            await appController.runPrompt(req, res);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    },
};

export default appController;
