import recommendationsRepositories from '../repositories/recommendationsRepositories.js';

const createReacommendations = async (recommendation) => {
  const newRecommendation = await recommendationsRepositories.createRecommendations(recommendation);
  if (!newRecommendation) return false;
  return newRecommendation;
};

const randomRecommendation = async () => {
  const randomScore = Math.random();
  let recommendationArray = [];
  if (randomScore < 0.7) {
    recommendationArray = await recommendationsRepositories.getRecommendationsByScoreMin({ scoreMin: 10 });
  }
  if (!recommendationArray.length) {
    recommendationArray = await recommendationsRepositories.getRecommendationsByScoreMax({ scoreMax: 11 });
  }
  if (!recommendationArray.length) {
    recommendationArray = await recommendationsRepositories.getRecommendationsByScoreMin({ scoreMin: -6 });
  }
  if (!recommendationArray.length) {
    return [];
  }
  const randomRecommendationValue = recommendationArray[Math.floor(Math.random() * recommendationArray.length)];
  return randomRecommendationValue;
};

const recommendationService = {
  createReacommendations,
  randomRecommendation,
};

export default recommendationService;
