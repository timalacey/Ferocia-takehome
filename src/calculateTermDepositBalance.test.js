import { expect, test } from 'vitest'
import calculateTermDepositBalance from 'src/calculateTermDepositBalance'

test('$1000 5% paid quaterly after 36 months should return $1160.75', () => {
  expect(calculateTermDepositBalance(1000, 5, 4, 36)).toBe(1160.75)
})

test('$1000 5% paid at maturity after 60 months should return $1250', () => {
  expect(calculateTermDepositBalance(1000, 5, 0, 60)).toBe(1250)
})

// sample used in doc
test('$1000 1.1% paid at maturity after 36 months should return $10330', () => {
  expect(calculateTermDepositBalance(10000, 1.1, 0, 36)).toBe(10330)
})

test('$0 5% paid quaterly after 36 months should return $1000', () => {
  expect(calculateTermDepositBalance(0, 5, 4, 36)).toBe(0)
})

test('$null 5% paid quaterly after 36 months should return $1000', () => {
  expect(calculateTermDepositBalance(null, 5, 4, 36)).toBe(0)
})

test('$1000 0% paid quaterly after 36 months should return $1000', () => {
  expect(calculateTermDepositBalance(1000, 0, 4, 36)).toBe(1000)
})

test('$1000 null% paid quaterly after 36 months should return $1000', () => {
  expect(calculateTermDepositBalance(1000, null, 4, 36)).toBe(1000)
})

test('$1000 10% paid quaterly after 0 months should return $1000', () => {
  expect(calculateTermDepositBalance(1000, 10, 4, 0)).toBe(1000)
})

test('$1000 10% paid quaterly after null months should return $1000', () => {
  expect(calculateTermDepositBalance(1000, 10, 4, null)).toBe(1000)
})

test('$1000 10% paid null times per year after 0 months should return $1000', () => {
  expect(calculateTermDepositBalance(1000, 10, null, 36)).toBe(1000)
})
