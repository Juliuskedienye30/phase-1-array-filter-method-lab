// Code your solution here
// Function 1: Exact match, case-insensitive
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Function 2: Fuzzy match - name starts with letters
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

// Function 3: Match object name key
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}

// Export the functions (for test use, if needed)
module.exports = {
  findMatching,
  fuzzyMatch,
  matchName
};
