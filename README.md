# Tim Lacey's Term Deposit Calculator for Ferocia

## Install prereqs

[Install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Install

`npm install`

## Run

`npm run dev`

## Watch tests

`npm run watch`



## Notes

I have intentionally included TODO comments to highlight the improvements I would do if this were to progress further.

Design decisions:

1. I prefer realtime feedback on my input fields, so I opted to avoid a Submit button.
2. In `calculateTermDepositReturn()` to handle a divide by 0 check and the "paid at maturity" requirement, I interpreted an input of `n=0` as "paid at maturity".

Assumptions:

1. When final balance is rounded to 2 decimal places then 5 rounds up, 4 rounds down.

Tradeoffs:

1. For speed I opted to validate all inputs as a range of numbers (cannot exceed the minimum or maximum). Ideally `n` (number of times per year the interest is paid) should only accept values of 12, 4, 1 and 0 (for paid at maturity). Given more time I would do this next, see TODO.

---

👋 Check out [Tim's LinkedIn](https://www.linkedin.com/in/timalacey/)