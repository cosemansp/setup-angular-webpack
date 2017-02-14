import { getTestBed, TestBed, inject } from '@angular/core/testing'
import { FakeBackend } from '../../../test/http/fake-backend'
import { expect } from 'chai'

import { EngineHttp } from './engineHttp'

describe('Blog Service', () => {
  let server: FakeBackend
  let engine: EngineHttp
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EngineHttp,
        FakeBackend.getProviders()
      ],
    })
  })

  beforeEach(inject([EngineHttp, FakeBackend], (engine: EngineHttp, fakeBackend: FakeBackend) => {
    this.backend = fakeBackend
    this.engine = engine
  }))

  afterEach(() => {
    getTestBed().resetTestingModule()
    this.backend.verifyNoPendingRequests()
    this.backend.verifyNoPendingExpectations()
  })

  it('should fetch blog entry by a key', () => {
    this.backend.expectGet('api/models').respond([
      { id: 1, name: 'V12' },
      { id: 2, name: 'Twin' },
    ])

    return this.engine.getModels().toPromise()
      .then((models) => {
        expect(models.length).to.equal(2)
      })
  })

})
