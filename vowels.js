function convertToVowel(word)
{
    let wordLength= word.length-1;
    let newWord=[];
function checkVowel(vowel){
            const vowels = [`a`, `e`, `i`, `o`,`u`];
            return vowels.includes(vowel)
        }
    
    for(let i=0;i<=wordLength;i++){
        if(word[i].split('').every(checkVowel)){
        newWord[i]=word[i];
        }
    }
    return newWord.toString().replaceAll(',','');
}

const word3='thisissomeword'
const reversedWord3=convertToVowel(word3)
console.log(reversedWord3)