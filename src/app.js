import express from 'express';
import cors from 'cors';
import recommendationController from './controller/recommendationController.js';
import voteController from './controller/voteController.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/is-live', (req, res) => res.status(200).send('Ok'));
app.get('/recommendations/top/:amount', recommendationController.getTopRecommendation);
app.get('/recommendations/random', recommendationController.getRecommendation);
app.post('/recommendations', recommendationController.postRecommendation);
app.post('/recommendations/:id/:voteType', voteController.upVote);
export default app;
