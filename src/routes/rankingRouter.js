import { Router } from 'express';
import { getRankings } from '../controllers/rankingController.js';

const router = Router();

router.get(`/ranking`, getRankings);

export default router;
