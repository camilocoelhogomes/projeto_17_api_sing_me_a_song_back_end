import recommendationService from '../services/recommendationService.js';
import recommendationValidate from '../validation/recommendationValidate.js';

const postRecommendation = async (req, res) => {
  try {
    const recommendation = req.body;
    const isValid = await recommendationValidate.newRecommendation(recommendation);
    if (!isValid) return res.sendStatus(400);
    const newRecommendation = await recommendationService.createReacommendations(recommendation);
    if (!newRecommendation) return res.sendStatus(400);
    return res.status(201).send(newRecommendation[0]);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const getRecommendation = async (req, res) => {
  try {
    const recommendation = await recommendationService.randomRecommendation();
    if (!recommendation) return res.sendStatus(404);
    return res.status(200).send(recommendation);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const getTopRecommendation = async (req, res) => {
  const { amount } = req.params;
  if (Number.isNaN(Number(amount)) || Number(amount) <= 0) return res.sendStatus(400);
  const recommendatoin = await recommendationService.getTopRecommendations({ top: Number(amount) });
  try {
    return res.status(200).send(recommendatoin);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const recommendationController = {
  postRecommendation,
  getRecommendation,
  getTopRecommendation,
};

export default recommendationController;
