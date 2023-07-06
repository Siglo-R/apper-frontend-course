
function isPalindrome(word){

    let wordLength= word.length-1;
    let isTrue=true;
        for(let i=0;i<=wordLength;i++){
            let lastLetter = wordLength-i
            if (word[i]==word[lastLetter]){
                continue;
            }
            else{
                isTrue=false;
                break;
            }
        }
        return isTrue;
    }

const word2='ciiiiiviiiic'
const reversedWord2=isPalindrome(word2)
console.log(reversedWord2)