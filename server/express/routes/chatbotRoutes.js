import express from 'express';
import { protectRoute } from '../middleware/protectRoute.js';
import { startChat,chat } from '../controllers/chatbotController.js';
const router = express.Router();
router.get('/start-chat/',protectRoute, startChat);
router.post('/chat/', protectRoute, chat);

export default router;