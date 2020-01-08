const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}
// phrase is a string = 'the quick brown fox jumps over the lazy dog'
PangramFinder.prototype.isPangram = function () {

  const result = this.alphabet.every((letter) => {
    return this.phrase.toLowerCase().includes(letter)
  })

console.log("THIS IS LOGGING RESULT", result);

  return result
}
module.exports = PangramFinder;
