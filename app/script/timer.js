const dateFin = new Date(2027, 7, 2);

const timerSecondaire = document.getElementById("timer");
const timerDaySecondaire = document.getElementById("timerDay");

function updateTimers() {
    const maintenant = new Date();
    let diff = dateFin - maintenant;

    if (diff < 0) {
        timerSecondaire.textContent = "Terminé !";
        timerDaySecondaire.textContent = "Terminé !";
        clearInterval(interval);
        return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);

    const seconds = totalSeconds % 60;
    const minutes = totalMinutes % 60;
    const hours = totalHours % 24;
    const days = totalDays % 30;
    const months = Math.floor(totalDays / 30);

    timerSecondaire.textContent = `${months}m : ${days}j : ${hours}h : ${minutes}m : ${seconds}s`;

    timerDaySecondaire.textContent = `${totalDays}j : ${hours}h : ${minutes}m : ${seconds}s`;
}

const interval = setInterval(updateTimers, 1000);
updateTimers();
