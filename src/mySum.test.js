import { expect, test } from 'vitest'
import mySum from 'src/mySum'

test('adds 1 + 2 to equal 3', () => {
  expect(mySum(1, 2)).toBe(3)
})
