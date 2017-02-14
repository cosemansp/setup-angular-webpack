import { expect } from 'chai'
import { CapitalisePipe } from './capitalisePipe'

describe('Pipe: CapitalisePipe', () => {
  let pipe

  beforeEach(() => {
    pipe = new CapitalisePipe()
  })

  it('should throw if not used with a string', () => {
    expect(pipe.transform('hello')).to.equal('HELLO')
    // must use arrow function for expect to capture exception
    expect(() => pipe.transform(undefined)).to.throw()
  })
})
