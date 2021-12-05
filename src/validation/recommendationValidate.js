import Joi from 'joi';
import getVideoId from 'get-video-id';

const newRecommendation = async (recommendation) => {
  const joiError = Joi.object({
    name: Joi.string().required(),
    youtubeLink: Joi.string().required(),
  }).validate(recommendation).error;

  if (!joiError) {
    const video = await getVideoId(recommendation.youtubeLink);
    if (video.id && video.service === 'youtube') return true;
  }
  return false;
};

const recommendationValidate = {
  newRecommendation,
};

export default recommendationValidate;
