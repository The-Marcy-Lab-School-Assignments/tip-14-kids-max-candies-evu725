/**
 * Kids With the Greatest Number of Candies
 *
 * Given an integer array `candies` and an integer `extraCandies`, return a boolean
 * array where each element indicates whether the corresponding kid can have the
 * greatest number of candies if given all `extraCandies`.
 *
 * @param {number[]} candies
 * @param {number} extraCandies
 * @returns {boolean[]}
 */
function kidsWithCandies(candies, extraCandies) {
    // Subproblem 1: get the max value of candy from orignal array
    let greatest = Math.max(...candies);

    // Subproblem 2: checks if give extra candies to kid greater than kid with highest candy
    return candies.map((val) => val + extraCandies >= greatest);
}

module.exports = kidsWithCandies;