import { describe, it, expect } from 'vitest'

describe('Without delayed hook', () => {
  it('first test', async() => {
    expect('true').toEqual('true')
  })

  it('second test', async() => {
    expect('false').toEqual('true')
  })
})
