import recommendationService from '../../src/services/recommendationService';
import recommendationsRepositories from '../../src/repositories/recommendationsRepositories.js';


describe('Create new Recommendations', () => {
  it('shold return an recommendation object', async () => {
    jest
      .spyOn(recommendationsRepositories, 'createRecommendations')
      .mockImplementationOnce(() => (
        {
          id: '1',
          name: 'nome',
          youtubeLink: 'youtubeLink',
          score: '0'
        }))
    const recommendation = {
      name: 'Água de Coco',
      youtubeLink: 'https://www.youtube.com/watch?v=6Omp25Apyt4&ab_channel=Leonardo-Topic',
    };
    const result = await recommendationService.createReacommendations(recommendation);
    expect(result).toEqual({
          id: '1',
          name: 'nome',
          youtubeLink: 'youtubeLink',
          score: '0'
        })
  });

  it("shold return false when dont't create a recommendation", async () => {
    jest
      .spyOn(recommendationsRepositories, 'createRecommendations')
      .mockImplementationOnce(() => false)
    const recommendation = {
      name: 'Água de Coco',
      youtubeLink: 'https://www.youtube.com/watch?v=6Omp25Apyt4&ab_channel=Leonardo-Topic',
    };
    const result = await recommendationService.createReacommendations(recommendation);
    expect(result).toEqual(false)
  });
});

describe('get top recommendation', () => {
  it('shold return an array of recommendations', async () => {
    jest
      .spyOn(recommendationsRepositories, 'getTopRecommendations')
      .mockImplementationOnce(() => ['1', '2']);
    const result = await recommendationService.getTopRecommendations({top: 2});
    expect(result).toEqual(['1', '2']);
  });
});
