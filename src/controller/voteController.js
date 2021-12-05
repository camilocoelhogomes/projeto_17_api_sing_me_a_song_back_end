const upVote = async (req, res) => {
  const { id } = req.params;
  try {
    console.log(id);
    return res.sendStatus(201);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const voteController = {
  upVote,
};

export default voteController;
