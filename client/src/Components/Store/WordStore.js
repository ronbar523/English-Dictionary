class WordStore {
  words = [];

  addWord = (word) => {
    const newWord = {
      word,
    };
    this.words.unshift(newWord);
  };
}

export const wordStore = new WordStore();