import recommendationsRepositories from '../repositories/recommendationsRepositories.js';

const createReacommendations = async (recommendation) => {
  const newRecommendation = await recommendationsRepositories.createRecommendations(recommendation);
  if (!newRecommendation) return false;
  return newRecommendation;
};

const recommendationService = {
  createReacommendations,
};

export default recommendationService;
