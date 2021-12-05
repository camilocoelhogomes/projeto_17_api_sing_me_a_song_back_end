import recommendationsRepositories from '../repositories/recommendationsRepositories.js';

const createVote = async ({ id, type }) => {
  let value = false;
  if (type === 'upvote') value = 1;
  if (type === 'downvote') value = -1;
  if (!value) return false;
  const recommendation = await recommendationsRepositories.getRecommendationById({ id });
  recommendation.score = Number(recommendation.score) + value;
  if (recommendation.score < -5) {
    await recommendationsRepositories.deleteRecommendation({ id });
    return true;
  }
  const updatedRecommendation = await recommendationsRepositories
    .updateRecommendationScore(
      {
        id,
        score: recommendation.score,
      },
    );
  console.log(updatedRecommendation);
  return updatedRecommendation;
};

const voteService = {
  createVote,
};

export default voteService;
