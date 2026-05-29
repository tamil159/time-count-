const countdown = document.getElementById("countdown");

const newYear = new Date("January 1, 2027 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = newYear - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if(distance < 0){
        countdown.innerHTML = "🎊 HAPPY NEW YEAR! 🎊";
    }
}, 1000);