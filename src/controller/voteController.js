import voteService from '../services/voteService.js';

const upVote = async (req, res) => {
  const { id, voteType } = req.params;
  try {
    const newVote = voteService.createVote({ id, type: voteType });
    return res.status(201).send(newVote);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const voteController = {
  upVote,
};

export default voteController;
