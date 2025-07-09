/**
 * Calculate the final balance of a Term Deposit
 * @param {number} P - starting deposit amount e.g. 1000 for $1000
 * @param {number} r - interest rate (per annum) e.g. 5 for 5%
 * @param {number} n - number of times per year the interest is paid (e.g. 4 for quarterly, 12 for monthly, 0 for at maturity)
 * @param {number} tMonths - investment term in months e.g. 36 for 3 years
 * @returns {number} final balance
 */
export default function calculateTermDepositReturn(P, r, n, tMonths) {    
    const t = tMonths / 12; // standardize to years

    let periodsPerYear = n;
    if (n == 0) {
        console.warn("Number of compounding periods per year (n) is 0. Assuming interest is paid at maturity.");
        periodsPerYear = 1/t;
    }

    const finalBalance = P * (1 + (r / 100) / periodsPerYear) ** (periodsPerYear * t);

    // Assumption: when interest is rounded to 2 decimal placesm then paid 5 rounds up, 4 rounds down
    return Math.round(finalBalance * 100) / 100
}