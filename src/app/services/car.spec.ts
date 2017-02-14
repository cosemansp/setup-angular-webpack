import { expect } from 'chai'
import * as sinonCore from 'sinon'
import { TestBed, inject, getTestBed } from '@angular/core/testing'
import { Engine } from './engine'
import { Car } from './car'

describe.skip('Car', () => {
  let subject: Car
  let sinon: sinon.SinonSandbox

  beforeEach(() => {
    sinon = sinonCore.sandbox.create()
    TestBed.configureTestingModule({
      providers: [Engine, Car]
    })
    sinon.stub(Engine.prototype, 'getHorsePower').returns(400)
    sinon.stub(Engine.prototype, 'getName').returns('V8 engine')
  })
  afterEach(() => {
    getTestBed().resetTestingModule()
    sinon.restore()
  })

  beforeEach(inject([Car], (car: Car) => {
    subject = car
  }))

  it('should display name with engine', () => {
    expect(subject.getName())
      .to.equal('Car with V8 engine(400 HP)')
  })

  it('should display name with engine', () => {
    expect(subject.getName())
      .to.equal('Car with V8 engine(400 HP)')
  })

})
