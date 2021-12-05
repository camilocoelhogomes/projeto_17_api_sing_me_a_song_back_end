import voteService from '../services/voteService.js';

const upVote = async (req, res) => {
  const { id } = req.params;
  try {
    const newVote = voteService.createVote({ id, type: 'upVote' });
    return res.status(201).send(newVote);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const voteController = {
  upVote,
};

export default voteController;
