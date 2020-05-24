function longestWordInString(string) {
    let currentLongestWord = '';
    let splittedStringArray = string.split(' ');

    splittedStringArray.forEach(word => {
        if (word.length > currentLongestWord.length) {
            currentLongestWord = word;
        }
    });
    return currentLongestWord;
}

export { longestWordInString };
