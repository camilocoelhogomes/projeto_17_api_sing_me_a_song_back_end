import express from 'express';
import cors from 'cors';
import recommendationController from './controller/recommendationController.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/is-live', (req, res) => res.status(200).send('Ok'));
app.post('/recommendations', recommendationController.postRecommendation);
export default app;
