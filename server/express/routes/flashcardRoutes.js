import express from 'express';
import { protectRoute } from "../middleware/protectRoute.js";
import { GenQuestions, GenAnswers } from "../controllers/flashCardsControllers.js";
const router = express.Router();
router.post('/generate-questions',protectRoute, GenQuestions);
router.get('/generate-answers', protectRoute, GenAnswers);
export default router;