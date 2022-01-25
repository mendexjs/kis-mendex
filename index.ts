
const words: string[] = [];

const translateText = (sentence: string): string => {
    sentence.split(' ').forEach((word) => {
        let hasComma = word.indexOf(',');
        word = word.replace(',', '');
        word = word.match(/[a-z]/i) ? translateWord(word) : word;
        if (hasComma > 0 ){
            words.push(' ' + word.substring(0, word.length), ',');
        } else {
            words.push(' ' + word);
        }
    });

    return words.join('');
}

const translateWord = (word: string): string => {
    const lettersArray = word.split('');
    const vowel = `${lettersArray.find((letter: string) => {
        return letter.match(new RegExp(/[aeiouy]/i))
    })}`;
    let vowelIndex = word.indexOf(vowel);
    const firstCapitalized = !!word[0].match(/[A-Z]/);

    let prefixArray: string[] = [];
    if (vowel) {
        prefixArray = word.toLowerCase().substring(0, word.indexOf(vowel)).split('');
    }
    let stemArray = word.substring(vowelIndex, word.length).split('');
    stemArray[0] = firstCapitalized ? stemArray[0].toUpperCase() : stemArray[0];
    let finalSteam = stemArray.join('');
    let finalPrefix = prefixArray.join('');
    finalPrefix += !word.match(/[bcdfghjklmnpqrstvwxys]/gi) ? 'yay' : 'ay';
    return `${finalSteam}${finalPrefix}`
}

// change this text to test
console.log(
    translateText('No persons, under 14 admitted')
);
