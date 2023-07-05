//*********************************************************************************************************************************************** */
//variables
/*
const
var (everytime na nagttype ka ng "var"-maooverwrite siya unlike let na magpprompt ng error)
let ()(already been declared, pwede mag reassign parin pero wala na name)
*/

//*********************************************************************************************************************************************** */
//Data Types
/*
const Name= "Pedro";
const Age=19; //
const Rating = 49.3; //float
const isComplete=true; // boolean true
const Val = null; //null value
const unk= undefined;//undefined;


console.log(String);//typeof outputs the data type of the variable declared

//String manipulations
String.length
String.slice()
String.substring()
String.substr()
String.replace()
String.replaceAll()
String.toUpperCase()
String.toLowerCase()
String.concat()
String.trim()
String.trimStart()
String.trimEnd()
String.padStart()
String.padEnd()
String.charAt()
String.charCodeAt()
String.split()
console.log(Name.toLocaleLowerCase(Name))
console.log(Name.toLocaleUpperCase(Name))
console.log(Name.length)
*/
//*********************************************************************************************************************************************** */
//arrays
/*
const Fruits=["Manga", "Banana", "Grapes", "Pineapple"];
Fruits[4]='Santol';//pag alam yung dami ng array
Fruits.push("mehehe");//lalagay panibagong item sa array
Fruits.unshift("Sa unahan");//lalagay sa unahan mehehehe
Fruits.pop();// tatanggaling pinakahuling value
console.log(Fruits);

console.log(Array.isArray(Fruits));//check if an array is an array
console.log(Fruits.indexOf('Manga'));//check kung pang anong place niya sa array
Fruits.splice(0,1);// .splice(0-> yung una yung starting position, 1-> dictates hanggang saan): 
//['Sa unahan', 'Manga', 'Banana', 'Grapes', 'Pineapple', 'Santol']-> ['Manga', 'Banana', 'Grapes', 'Pineapple', 'Santol']
console.log(Fruits);

*/
//*********************************************************************************************************************************************** */
//object literals
/*
//ginagamit for API calls data structure with key value parirs
//const variable = {body structure}
const tao= {
    firstName:'Pedro',
    lastName:'Penduko',
    age:35,
    favorites: ['apple,','blue', 'english', 'butete'],
    familyMembers: {
        Father: 'Pedro Sr',
        Mother: 'Nenang Penduko',
        Sister: 'Nena Penduko'
    }
}

console.log(tao.familyMembers.Sister);
*/


//*********************************************************************************************************************************************** */
//object literal part 2
//key value pair within an array
/*
const Contacts= [
    {
        id:1,
        fullName: `Pedro Penduko`,
        isSaved:"Phone"
    },
    {
        id:2,
        fullName: "Pedro Penduko Sr.",
        isSaved:"Phone"
    },
    {
        id:3,
        fullName: "Pedro Penduko",
        isSaved:"SD"
    }
]
*/
/*
console.log(Contacts[1].fullName);//outputs the 1st column at Contacts[1] Outputs Pedro Penduko Sr.
//*********************************************************************************************************************************************** */
//ForLoop for(let i=int; i= condition, increment){ body }
/*
for(let i =0; i<=Contacts.length; i++){
    console.log(Contacts[i].id);
}
//While declaration of let i= int, While(i<condition) { body}
let i=1;
while(i<10){
    console.log('While loop ang value '+ i)
    i++;
}

//For loop for(let contact of Contacts){} How to loop in an array; let 
for(let contact of Contacts){
    console.log(contact.id);
}
//forEach Varname.forEach(function(input variable)){ body}

Contacts.forEach(function(contact){
    console.log(contact.fullName)
})

//Writing a function initalizing ContactsFullname= Contacts.map(where a function initializes a "contact" variable as an input. "contact" 
// will get its input from the "Contacts" )


//Object Methods function() {return body(this.firstName and this.lastName)}
//this.something refers that firstName is a propoerty of this and that this means that the firstName is a property of a person
//In JavaScript, the this keyword refers to an object., *Which* object depends on how this is being invoked (used or called). 



In an object method, *this* refers to the object.

//Alone, this refers to the global object.

//In a function, this refers to the global object.

//In a function, in strict mode, this is undefined.

//In an event, this refers to the element that received the event.

Methods like call(), apply(), and bind() can refer this to any object.


const ContactsFullname=Contacts.map(
    function(){
        return this.fullName;
    }
);


let x=myFunction(1);

function myFunction(a){
    return Contacts[a].id;
}

console.log(x);

console.log(Contacts[x].id)

*/



//Homework#1 reverse
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



/*
//Homework#2  isPalindrome
function isPalindrome(word){
    let stringWord=new String(word);
    const stringToArray=stringWord.split('');
    let wordLength= stringWord.length-1;
    let isTrue=true;

        for(let i=0;i<=wordLength;i++){
            let lastLetter = wordLength-i
            if (stringToArray[i]==stringToArray[lastLetter]){
                continue;
            }
            else{
                isTrue=false;
                break;
            }
        }
        return isTrue;
    }

const word2='reotoer'
const reversedWord2=isPalindrome(word2)
console.log(reversedWord2)
*/
/*
const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));
  console.log(isSubset([`a`, `e`, `i`, `o`, `u`], [`a`,`e`]));
  console.log(isSubset([`a`, `e`, `i`, `o`, `u`], [`a`,`b`])); // true
*/
/*
const newWordsss= [`a`,'e']
  
console.log(newWordsss.every((checkVowel)))

function checkVowel(vowel){
    const vowels = [`a`, `e`, `i`, `o`,`u`];
    return vowels.includes(vowel)
}
*/  
  
//Homework#3 convertToVowels 

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




function isPalindrome1(word){
    let wordLength= word.length-1;

        for(let i=0;i<=wordLength;i++){
            let lastLetter = wordLength-i
            if (word[i]===word[lastLetter]){
                return true
            }
                return false

        }
    }

const word2='cityc'
const reversedWord2=isPalindrome1(word2)
console.log(reversedWord2)



function isPalindrome2(word){

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

const word4='civic'
const reversedWord4=isPalindrome2(word4)
console.log(reversedWord4)


const stack = {
    inventory: [],
    push: function(product) {
      this.inventory.push(product);
    },
    check: function(){
        console.log(stack.inventory)
    },
    pop: function(){
        this.inventory.pop();
    }

  };

  stack.push('fish');
  stack.push('Milk');
  stack.check();
  stack.pop();
  stack.check();

//
function transform(nums){
    let sortedNumArray=nums.sort(function(a,b){return a -b});
    let squaredNums= [];
    for(let i=0;i<=sortedNumArray.length-1;i++){
        squaredNums[i]= sortedNumArray[i]*sortedNumArray[i]
    }
    return squaredNums

}

const nums = [4,9,5,3,8]
const sortedSquaredNums = transform(nums)
console.log(sortedSquaredNums) // [9,16,25,64,81]