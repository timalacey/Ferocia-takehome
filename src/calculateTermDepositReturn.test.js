import { expect, test } from 'vitest'
import calculateTermDepositReturn from 'src/calculateTermDepositReturn'

test('$1000 5% paid quaterly after 36 months should return $1160.75', () => {
  expect(calculateTermDepositReturn(1000, 5, 4, 36)).toBe(1160.75)
})

test('$1000 5% paid at maturity after 60 months should return $1250', () => {
  expect(calculateTermDepositReturn(1000, 5, 0, 60)).toBe(1250)
})