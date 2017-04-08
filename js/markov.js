const Markov = require('markov-strings');
const loadJsonFile = require('load-json-file');

/* Initialize markov and create corpus */
const options = {
  maxLength: 140,
  minWords: 10,
  minScore: 25, // This controls the quality of the tweets, this is the minimum score for a particular tweet
  checker: sentence => {
    return true; // We don't care about the format of tweets
  }
};

const markov;

/* Eventually this should be an api */
loadJsonFile('../misc/data.json').then(data => {
    /* Generate a markov chain */
    markov = new Markov(data, options);
    markov.buildCorpus();
});

/* Return sentence from file */
exports.jsonFileSentence = () => {
  return markov.generateSentence();
};
