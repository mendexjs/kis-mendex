"use strict";
const sentenceOne = 'away';
const sentenceTwo = 'No litterring';
const sentenceTree = 'No shirts, no shoes, no 20 service';
const words = [];
const translateText = (sentence) => {
    sentence.split(' ').forEach((word) => {
        let hasComma = word.indexOf(',');
        if (hasComma > 0) {
            words.push(word);
        }
        else {
            words.push(word.substr(0, word.length), ',');
        }
        // console.log(hasComma);
    });
    console.log(words);
};
const translateWord = (word) => {
    const lettersArray = word.split('');
    const vowel = lettersArray.find((letter) => {
        return letter.match(new RegExp(/[aeiouy]/));
    });
    let vowelIndex = word.indexOf(vowel || '');
    const firstCapitalized = !!word[0].match(/[A-Z]/);
    console.log('firstCapitalized', firstCapitalized);
    let prefix = '';
    let stem = '';
    let prefixArray = [];
    if (vowel) {
        prefixArray = word.toLowerCase().substr(0, word.indexOf(vowel)).split('');
    }
    let stemArray = [];
    stemArray = word.substr(vowelIndex, word.length).split('');
    stemArray[0] = firstCapitalized ? stemArray[0].toUpperCase() : stemArray[0];
    let finalSteam = stemArray.toString().replace(',', '').trim();
    let finalPrefix = prefixArray.toString().replace(',', '').trim();
    finalPrefix = !!word.match(/[bcdfghjklmnpqrstvwxys]/gi) ? finalPrefix + 'ay' : finalPrefix + 'yay';
    console.log(finalSteam + finalPrefix);
};
translateWord(sentenceOne);
// translateText(sentenceTree);
// Stop
// sto
// p
