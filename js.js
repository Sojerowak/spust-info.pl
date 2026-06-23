    const toggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.addEventListener("DOMContentLoaded", () => {
    // Pobieramy elementy z HTML
    const dateElement = document.getElementById("current-date");
    const timeElement = document.getElementById("current-time");

    // Pobieramy aktualny czas systemowy
    const now = new Date();

    // Formatowanie daty: np. "Wtorek, 23 czerwca 2026 r."
    const dateOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    let formattedDate = now.toLocaleDateString('pl-PL', dateOptions);
    
    // Logika podnosząca pierwszą literę dnia tygodnia do wielkiej (np. "wtorek" -> "Wtorek")
    formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    
    // Dodanie tradycyjnego "r." na końcu roku, jeśli system go nie dodał
    if (!formattedDate.endsWith('r.')) {
        formattedDate += ' r.';
    }

    // Formatowanie czasu: np. "18:04"
    const timeOptions = { 
        hour: '2-digit', 
        minute: '2-digit' 
    };
    const formattedTime = now.toLocaleTimeString('pl-PL', timeOptions);

    // Wstrzykiwanie danych do paska nawigacji (jeśli elementy istnieją)
    if (dateElement) dateElement.textContent = formattedDate;
    if (timeElement) timeElement.textContent = formattedTime;
});