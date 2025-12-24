function consecutiveSubstrings(string) {
  // Create an array to store all substrings
  const substrings = [];

  // Loop through the string to choose a starting index
  for (let i = 0; i < string.length; i++) {

    // Loop again to create substrings starting from index i
    for (let j = i + 1; j <= string.length; j++) {
      substrings.push(string.slice(i, j));
    }
  }

  // Return the list of consecutive substrings
  return substrings;
}

if (require.main === module) {
  // Test cases
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;
