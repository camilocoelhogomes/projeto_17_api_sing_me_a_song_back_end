const upVote = async (req, res) => {
  const { id } = req.params;
  try {
    return res.status(201).send(id);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const voteController = {
  upVote,
};

export default voteController;
