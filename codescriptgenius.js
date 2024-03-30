// Create a class named CodeScriptGenius
class CodeScriptGenius {
    constructor() {
        this.languages = [];
    }

    // Method: learn a new programming language
    learnLanguage(language) {
        this.languages.push(language);
        console.log(`Learned ${language} as a new programming language.`);
    }

    // Method: forget a programming language
    forgetLanguage(language) {
        const index = this.languages.indexOf(language);
        if (index !== -1) {
            this.languages.splice(index, 1);
            console.log(`Forgot ${language} as a programming language.`);
        } else {
            console.log(`${language} is not found in the learned programming languages.`);
        }
    }

    // Method: list all learned programming languages
    listLanguages() {
        console.log("Learned programming languages:");
        this.languages.forEach(language => {
            console.log(language);
        });
    }
}

// Create an instance of CodeScriptGenius named myCodeScriptGenius
const myCodeScriptGenius = new CodeScriptGenius();

// Learn programming languages
myCodeScriptGenius.learnLanguage("JavaScript");
myCodeScriptGenius.learnLanguage("Python");
myCodeScriptGenius.learnLanguage("Java");

// List all learned programming languages
myCodeScriptGenius.listLanguages();

// Forget a programming language
myCodeScriptGenius.forgetLanguage("Python");

// List all learned programming languages after forgetting
myCodeScriptGenius.listLanguages();
