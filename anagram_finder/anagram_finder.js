const AnagramFinder = function (word) {
  this.word = word;
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  const wordArray = [...this.word.toLowerCase()].sort();
  const otherWordsArray = [... otherWords].sort();
  const result = otherWordsArray.filter(i => {
    let otherWordToCheck = i.toLowerCase().split("").sort().join();
    if (otherWordToCheck === wordArray.join()) {
      // console.log("COOOOOOOOOOOOOOOOONS", otherWordToCheck);
      return i;
    };
  });
  return result;
}

module.exports = AnagramFinder;
