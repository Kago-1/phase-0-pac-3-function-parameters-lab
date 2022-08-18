// a function that takes in an argument of a name and returns a phrase with that name using string interpolation

function introduction(name = "Aki"){
    return `Hi, my name is ${name}.`;
}
//console.log(introduction());

// a function that takes in two arguments, a name and a language, and returns a phrase using those arguments

function introductionWithLanguage(name = "Aki", language = "Ember.js"){
    return  `Hi, my name is ${name} and I am learning to program in ${language}.`
}

//console.log (introductionWithLanguage());
//a function that takes in two arguments, a name and a language, and language defaults to JavaScript
//a function that takes in two arguments, a name and a language, and the default value can be overridden with an argument


function introductionWithLanguageOptional(name = "Gracie", language = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}







