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

describe('get random recommendation', () => {
  it('shold return an array of recommendations', async () => {
    jest.spyOn(global.Math, 'random').mockImplementationOnce(() => 0.69);
    jest
      .spyOn(recommendationsRepositories, 'getRecommendationsByScoreMin')
      .mockImplementationOnce(() => [{socre: '11'}]);
      const result = await recommendationService.randomRecommendation();
      expect(result).toEqual({socre: '11'});
  });

  it('shold return an array of recommendations', async () => {
    jest.spyOn(global.Math, 'random').mockImplementationOnce(() => 0.71);
    jest
      .spyOn(recommendationsRepositories, 'getRecommendationsByScoreMax')
      .mockImplementationOnce(() => [{socre: '6'}]);
      const result = await recommendationService.randomRecommendation();
      expect(result).toEqual({socre: '6'});
  });

  it('shold return an array of recommendations', async () => {
    jest.spyOn(global.Math, 'random').mockImplementationOnce(() => 0.71);
    jest
      .spyOn(recommendationsRepositories, 'getRecommendationsByScoreMin')
      .mockImplementationOnce(() => [{ socre: '15' }]);
    jest
      .spyOn(recommendationsRepositories, 'getRecommendationsByScoreMax')
      .mockImplementationOnce(() => []);
      const result = await recommendationService.randomRecommendation();
      expect(result).toEqual({socre: '15'});
  });
  it('shold return an array of recommendations', async () => {
    jest.spyOn(global.Math, 'random').mockImplementationOnce(() => 0.71);
    jest
      .spyOn(recommendationsRepositories, 'getRecommendationsByScoreMin')
      .mockImplementationOnce(() => []);
    jest
      .spyOn(recommendationsRepositories, 'getRecommendationsByScoreMax')
      .mockImplementationOnce(() => []);
      const result = await recommendationService.randomRecommendation();
      expect(result).toEqual([]);
  });
});

