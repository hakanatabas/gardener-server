const { describe, it } = require('mocha');
const { expect } = require('chai');
const CreateRequestUseCase = require('./CreateRequestUseCase');
const { logger } = require('../../common/utils/TestMocks');

describe('CreateRequestUseCase', () => {
  const repository = () => {
    const requests = [];
    return {
      save: req => requests.push(req),
      list: () => requests,
    };
  };

  it('should save request in the repository and log message', () => {
    // given
    const id = '123';
    const url = 'qwerty';
    const validFrom = Date.now();
    const sut = new CreateRequestUseCase(repository(), logger());
    // when
    sut.createRequest(id, url, validFrom);
    // then
    expect(sut.requestRepository.list()[0].id).to.equal(id);
    expect(sut.logger.list().length).to.equal(1);
  });
});
