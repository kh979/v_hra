function checkCode() {
    // Získání hodnoty zadané uživatelem
    var userInput = document.getElementById("codeInput").value;

    // Definování správné kombinace čísel
    var correctCode = "1234";  // Můžeš změnit na jakoukoliv kombinaci

    // Kontrola, zda je zadaná kombinace správná
    if (userInput === correctCode) {
        // Pokud je kombinace správná, zobrazí se odkaz na další stránku
        document.getElementById("result").style.display = "block";
    } else {
        // Pokud není správná, uživateli se ukáže chybová zpráva
        alert("Kombinace je nesprávná. Zkuste to znovu.");
    }
}
