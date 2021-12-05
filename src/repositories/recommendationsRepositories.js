import connection from '../dbConfig.js';

const createRecommendations = async (recommendatoin) => {
  const { name, youtubeLink } = recommendatoin;
  const newRecommendation = await connection.query(`
    INSERT INTO
      recommendations (name,youtube_link)
    VALUES
      ($1,$2)
    RETURNING
      *
  `, [name, youtubeLink]);
  if (!newRecommendation.rowCount) {
    return false;
  }
  return newRecommendation.rows;
};

const recommendationsRepositories = {
  createRecommendations,
};

export default recommendationsRepositories;
