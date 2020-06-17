function getVowels(str){
  return str?.match(/[aeiou]/gi) ?? [];
}

console.log(getVowels(`Let\'s release on Friday!`)); // ['e', 'e', 'e', 'a', 'e', 'o', 'i', 'a']
