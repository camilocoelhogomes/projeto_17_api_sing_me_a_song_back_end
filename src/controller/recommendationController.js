import recommendationValidate from '../validation/recommendationValidate.js';

const postRecommendation = async (req, res) => {
  const recommendation = req.body;
  const isError = await recommendationValidate.newRecommendation(recommendation);
  console.log(isError);
  res.sendStatus(201);
};

const recommendationController = {
  postRecommendation,
};

export default recommendationController;
