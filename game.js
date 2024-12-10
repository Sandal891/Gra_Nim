// Stan początkowy stosów i gracza
let stacks = [3, 4, 5]; // Liczba przedmiotów na stosach
let currentPlayer = 1; // Gracz 1 zaczyna

// Funkcja do aktualizacji wyświetlania stosów
function updateStacks() {
    // Dla każdego stosu zaktualizuj wyświetlane gwiazdki
    for (let i = 0; i < stacks.length; i++) {
        let items = document.getElementById("items" + (i + 1));
        items.innerHTML = ''; // Wyczyść poprzednie przedmioty
        for (let j = 0; j < stacks[i]; j++) {
            let star = document.createElement('div');
            star.classList.add('item');
            star.textContent = '*'; // Przedmiot to gwiazdka
            items.appendChild(star);
        }
    }
}

// Funkcja sprawdzająca, czy gra zakończona
function checkGameOver() {
    // Gra kończy się, gdy wszystkie stosy są puste
    for (let i = 0; i < stacks.length; i++) {
        if (stacks[i] > 0) {
            return false; // Gra trwa
        }
    }
    return true; // Gra zakończona
}

// Funkcja do wykonania ruchu
function makeMove() {
    let stackIndex = document.getElementById("stackSelect").value - 1; // Indeks stosu
    let itemCount = parseInt(document.getElementById("itemCount").value); // Ilość do usunięcia

    // Sprawdzamy, czy ruch jest prawidłowy
    if (stacks[stackIndex] >= itemCount && itemCount > 0) {
        stacks[stackIndex] -= itemCount; // Usuwamy przedmioty ze stosu
        updateStacks(); // Aktualizujemy wyświetlanie stosów

        // Sprawdzamy, czy gra się zakończyła
        if (checkGameOver()) {
            document.getElementById("message").textContent = `Gratulacje, Gracz ${currentPlayer === 1 ? 2 : 1} wygrał!`;
            return;
        }

        // Zmieniamy gracza
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        document.getElementById("turn").textContent = `Gracz ${currentPlayer}, wybierz stos i liczbę przedmiotów do usunięcia`;
    } else {
        alert("Błąd! Sprawdź, czy wybrałeś prawidłowy stos i liczbę przedmiotów.");
    }
}

// Inicjalizacja gry po załadowaniu strony
updateStacks();