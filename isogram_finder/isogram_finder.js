const IsogramFinder = function (word) {
  this.word = word;
}
// An isogram is a word, phrase or sentence that does not contain any repeated letters.

// example of word, a string 'subdermatoglyphic'
IsogramFinder.prototype.isIsogram = function () {

  const checkArray = new Set(this.word);
  return checkArray.size === this.word.length;
}

module.exports = IsogramFinder;
