import { expect } from 'chai'
import { Engine } from './sampleEngine'

describe('Engine', () => {

  it('should return it\'s horsepower', () => {
    let subject = new Engine()
    expect(subject.getHorsePower()).to.equal(150)
  })

})
