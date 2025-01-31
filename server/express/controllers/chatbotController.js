import { v4 as uuidv4 } from 'uuid';
import Chat from '../models/chatbotModel.js';
export async function startChat(req, res) {
    try{
        function generateSessionId(){
            return uuidv4();
        }
        const sessionId = generateSessionId();
        const user=req.user;
        const chat = new Chat({
            sessionId,
            userId: user._id,
            messages: []
        });
        await chat.save();
        res.status(200).send(chat);
    }catch(err){
        console.log("Error in chatbot controller", err.message);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}
export async function chat(req, res) {
    const sessionId = req.body.sessionId;
    if (!sessionId) {
        return res.status(404).send({ message: 'Session Id is required'});
    }

    const userId = req.user._id;
    const humanMessage = req.body.message;
    
    try {
        const currentChat = await Chat.findOne({ sessionId });
        if (!currentChat) {
            return res.status(404).send({ message: 'Chat session not found' });
        }

        const chatbotMessages = ["Hey! How can I help you?", "I am here to assist you!", "I am a chatbot! Ask me anything!"];
        const chatbotMessage = chatbotMessages[Math.floor(Math.random() * chatbotMessages.length)];

        currentChat.messages.push({ message: humanMessage, human: true });
        currentChat.messages.push({ message: chatbotMessage, human: false });

        await currentChat.save();
        const chatBotMessageId=currentChat.messages[currentChat.messages.length-1]._id;
        res.send({message:chatbotMessage,_id:chatBotMessageId});
    } catch (err) {
        console.log("Error in chat controller", err.message);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}
export async function getSessions(req, res) {
    const userId = req.user._id;

    try {
        const sessions = await Chat.find({ userId });
        res.status(200).send(sessions);
    } catch (err) {
        console.log("Error in chat controller", err.message);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}
