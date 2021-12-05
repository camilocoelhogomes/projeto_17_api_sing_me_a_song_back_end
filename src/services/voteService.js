import voteRepositories from '../repositories/voteRepositories.js';

const createVote = async ({ id, type }) => {
  let value = 1;
  if (type === 'downVote') value = -1;
  const newVote = await voteRepositories.newVote({ id, value });
  return newVote;
};

const voteService = {
  createVote,
};

export default voteService;
