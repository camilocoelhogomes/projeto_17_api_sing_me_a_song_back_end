import voteService from "../../src/services/voteService.js";
import recommendationsRepositories from '../../src/repositories/recommendationsRepositories.js';

describe('vote service', () => {
  it('shold increase by 1 the number of votes', async () => {
    jest
      .spyOn(recommendationsRepositories, 'getRecommendationById')
      .mockImplementationOnce(() => ({ id: '1', score: '15' }));
    jest
      .spyOn(recommendationsRepositories, 'updateRecommendationScore')
      .mockImplementationOnce(() => ({id:'1', score: '16' }));
    const result = await voteService.createVote({ id: '1', type: 'upvote' })
    expect(result).toEqual({id:'1', score: '16' })
  })
   it('shold decise by 1 the number of votes', async () => {
    jest
      .spyOn(recommendationsRepositories, 'getRecommendationById')
      .mockImplementationOnce(() => ({ id: '1', score: '15' }));
    jest
      .spyOn(recommendationsRepositories, 'updateRecommendationScore')
      .mockImplementationOnce(() => ({id:'1', score: '14' }));
    const result = await voteService.createVote({ id: '1', type: 'downvote' })
    expect(result).toEqual({id:'1', score: '14' })
   })
  it('shold delete recommendation', async () => {
    jest
      .spyOn(recommendationsRepositories, 'getRecommendationById')
      .mockImplementationOnce(() => ({ id: '1', score: '-5' }));
    jest
      .spyOn(recommendationsRepositories, 'deleteRecommendation')
      .mockImplementationOnce(() => {});
    const result = await voteService.createVote({ id: '1', type: 'downvote' })
    expect(result).toEqual(true)
  })
  it('shold delete recommendation', async () => {
    const result = await voteService.createVote({ id: '1', type: '' })
    expect(result).toEqual(false)
  })
})