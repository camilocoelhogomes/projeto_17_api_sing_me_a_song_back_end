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

const recommendationController = {
  postRecommendation,
};

export default recommendationController;
