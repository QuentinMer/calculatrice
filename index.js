let ecran = document.getElementById('ecran');

function appendNumber(Number) {
    ecran.value += Number;
}
function arithm(character) {
    ecran.value += character;
}
function clearDisplay() {
    ecran.value = 'C';
}
function clearDisplay() {
    ecran.value = '';
    boutonC.style.display = 'none';
}
function calculate() {
    try {
        let resultat = eval(ecran.value);
        ecran.value = resultat;
    } catch (error) {
        ecran.value = 'Erreur';
    }
}