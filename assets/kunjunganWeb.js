const firstName = prompt("Siapa nama depanmu?");
const lastName = prompt("Siapa nama belakangmu?");
const language = prompt("Bisa berbahasa apa?");
 
const user = {
   name: {
       first: firstName,
       last: lastName,
   },
   language: language
};

const history = {
    firstName: user.name.first,
    secondName: user.name.last,
    language: user.language
}
putHistory(history);
renderHistory();