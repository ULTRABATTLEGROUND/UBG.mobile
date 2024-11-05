function changeLanguage() {
    var languageSelect = document.getElementById("language-select");
    var selectedLanguage = languageSelect.value;
    
    // Perform actions based on the selected language
    switch(selectedLanguage) {
        case "en":
            // English translations
            document.getElementById("language-form").querySelector("label").textContent = "Select language:";
            document.getElementById("play.button").textContent = "Play";
            document.getElementById("about.button").textContent = "About game";
            document.getElementById("settings.button").textContent = "Settings";
            break;
        case "pl":
            // Polish translations
            document.getElementById("language-form").querySelector("label").textContent = "Wybierz język:";
            document.getElementById("play.button").textContent = "Graj";
            document.getElementById("about.button").textContent = "O grze";
            document.getElementById("settings.button").textContent = "Ustawienia";
            break;
        case "es":
            // Spanish translations
            document.getElementById("language-form").querySelector("label").textContent = "Seleccionar idioma:";
            document.getElementById("play.button").textContent = "¡Juega!";
            document.getElementById("about.button").textContent = "Sobre el juego";
            document.getElementById("settings.button").textContent = "Configuraciones";
            break;
        case "de":
            // German translations
            document.getElementById("language-form").querySelector("label").textContent = "Ändere die Sprache:";
            document.getElementById("play.button").textContent = "Spiele!";
            document.getElementById("about.button").textContent = "Spielinformationen";
            document.getElementById("settings.button").textContent = "Einstellungen";
            break;
        case "lt":
            // Lithuanian translations
            document.getElementById("language-form").querySelector("label").textContent = "Pakeisti kalbą:";
            document.getElementById("play.button").textContent = "Žaiskite!";
            document.getElementById("about.button").textContent = "Apie žaidimą";
            document.getElementById("settings.button").textContent = "Nustatymai";
            break;
        // Add cases for other languages
        default:
            // Default to English
            document.getElementById("language-form").querySelector("label").textContent = "Select language:";
            document.getElementById("play.button").textContent = "Play";
            document.getElementById("about.button").textContent = "About game";
            document.getElementById("settings.button").textContent = "Settings";
    }
} 
changeLanguage;
