const postRecommendation = (req, res) => {
  console.log(req.body);
  res.sendStatus(201);
};

const recommendationController = {
  postRecommendation,
};

export default recommendationController;
