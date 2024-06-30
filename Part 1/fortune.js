document.addEventListener('DOMContentLoaded', function() {
    const fortunes = [
        "True wisdom comes not from knowledge, but from understanding.",
        "A journey of a thousand miles begins with a single step.",
        "Happiness is not a destination, but a way of life.",
        "Believe in yourself and all that you are.",
        "Good things take time."
    ];

    function getRandomFortune() {
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        return fortunes[randomIndex];
    }

    const fortuneBox = document.getElementById('fortune-box').querySelector('p');
    fortuneBox.textContent = getRandomFortune();
});
