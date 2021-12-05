import connection from '../dbConfig.js';

const createRecommendations = async (recommendatoin) => {
  const { name, youtubeLink } = recommendatoin;
  const newRecommendation = await connection.query(`
    INSERT INTO
      recommendations (name,youtube_link,score)
    VALUES
      ($1,$2,0)
    RETURNING
      *;
  `, [name, youtubeLink]);
  if (!newRecommendation.rowCount) {
    return false;
  }
  return newRecommendation.rows;
};

const getRecommendationById = async ({ id }) => {
  const recommendation = await connection.query(`
  SELECT * FROM
    recommendations
  WHERE
    id=$1;
  `, [id]);
  if (!recommendation.rowCount) return false;
  return (recommendation.rows[0]);
};

const updateRecommendationScore = async ({ id, score }) => {
  const updatedRecommendation = await connection.query(`
   UPDATE
      recommendations
    SET
      score = ($2)
    WHERE
      recommendations."id" = ($1)
    RETURNING
      *  
    ;
  `, [id, score]);
  if (!updatedRecommendation.rowCount) return false;
  return updatedRecommendation.rows[0];
};

const deleteRecommendation = async ({ id }) => {
  await connection.query(`
   DELETE FROM
    recommendations
  WHERE
    id = $1;
  `, [id]);
};

const recommendationsRepositories = {
  createRecommendations,
  deleteRecommendation,
  getRecommendationById,
  updateRecommendationScore,
};

export default recommendationsRepositories;
