function findShortestString(arr) {
  // type your code here
  if (arr.length === 1) {
    return arr[0]
  }

  let shortest = arr[0]
  for (let elem of arr) {
    if (elem.length < shortest.length) {
      shortest = elem
    }
  }

  return shortest

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// shortest string
// if more than one string of that short length : first string with that length
// arr will be at least 1 item => if only 1 item, return that string 