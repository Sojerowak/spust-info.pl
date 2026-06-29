document.addEventListener("DOMContentLoaded", () => {
    const dateElement = document.getElementById("current-date");
    const timeElement = document.getElementById("current-time");
    const now = new Date();

    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = now.toLocaleDateString('pl-PL', dateOptions);
    formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    
    if (!formattedDate.endsWith('r.')) { 
        formattedDate += ' r.'; 
    }

    const timeOptions = { hour: '2-digit', minute: '2-digit' };
    const formattedTime = now.toLocaleTimeString('pl-PL', timeOptions);

    if (dateElement) dateElement.textContent = formattedDate;
    if (timeElement) timeElement.textContent = formattedTime;
});