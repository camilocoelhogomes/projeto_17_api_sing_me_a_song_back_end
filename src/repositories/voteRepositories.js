import connection from '../dbConfig.js';

const newVote = async ({ id, value }) => {
  const vote = await connection.query(`
    INSERT INTO
      votes (recommendations_id,vote_value)
    VALUES
      ($1,$2)
    RETURNING
      *
  `, [id, value]);

  if (!vote.rowCount) {
    return false;
  }
  return vote.rows;
};

const voteRepositories = {
  newVote,
};

export default voteRepositories;
