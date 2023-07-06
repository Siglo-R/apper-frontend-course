function reverse(word) {
    let newWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
      newWord += word[i];
    }
    return newWord;
  }
  
  const word = 'hello';
  const reversedWord = reverse(word);
  console.log(reversedWord);
