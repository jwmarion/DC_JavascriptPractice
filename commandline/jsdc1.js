var phonebookDict = {
  Alice: '703-493-1834',
  Bob: '857-384-1234',
  Elizabeth: '484-584-2923'
};

console.log(phonebookDict.Elizabeth);
phonebookDict.James = "404-704-7634";
console.log(phonebookDict.James);
delete phonebookDict.Alice;
console.log(phonebookDict.Alice);
phonebookDict.Bob = '968-345-2345';
console.log(phonebookDict.Bob);

var personName = 'Elizabeth';
console.log(phonebookDict[personName]);

for (var word in phonebookDict){
  var def = phonebookDict[word];
  console.log(word+': ' + def);
}
