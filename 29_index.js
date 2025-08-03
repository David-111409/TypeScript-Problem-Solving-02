let names = ["Osso", "Aola", "Essa", "Igaa", "Daad", "Roor"];
let result = names.filter(word => word.at(-1).toLowerCase() === word[0].toLowerCase());

// Your Code Here

console.log(result); // ['Osso', 'Aola', 'Daad', 'Roor']
