import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const FAST_API_URL = process.env.FAST_API_URL;

export async function GenQuestions(req,res) {
    try{
        const text=req.body.text;
        if(!text){
            res.status(404).send({ message: 'Please provide text' });
            return;
        }
        const questions=await axios.post(`${FAST_API_URL}/generate-questions`, { text});
        res.status(200).send(questions.data);
    }catch(err){
        console.log("Error in GenQuestions controller", err.message);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}
export async function GenAnswers(req,res) {
    try{
        const text=req.body.text;
        if(!text){
            res.status(404).send({ message: 'Please provide text' });
            return;
        }
        const answers=await axios.get(`${FAST_API_URL}/generate-answers`);
        res.status(200).send(answers.data);
    }catch(err){
        console.log("Error in GenAnswers controller", err.message);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}