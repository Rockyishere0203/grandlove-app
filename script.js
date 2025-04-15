// Play music on first interaction
document.addEventListener('click', () => {
    document.getElementById('bg-music').play().catch(e => console.log("Music blocked:", e));
}, { once: true });

// Welcome Popup
const welcome = document.getElementById('welcome');
setTimeout(() => welcome.classList.remove('hidden'), 1000);
setTimeout(() => welcome.classList.add('hidden'), 9000);

// Love Letter
const letterIcon = document.getElementById('letter-icon');
const letter = document.getElementById('letter');
const hand = document.getElementById('hand');
const letterContent = document.getElementById('letter-content');
letterIcon.addEventListener('click', () => {
    letter.classList.remove('hidden');
    hand.style.display = 'block';
    setTimeout(() => {
        hand.style.display = 'none';
        letterContent.classList.remove('hidden');
    }, 2000);
});

// Love Notes
const loveNotes = [
    "You deserve the best, baby. I hope i will be that best someday"
];
const revealBtn = document.getElementById('reveal-btn');
const messageEl = document.getElementById('message');
const heartsContainer = document.getElementById('hearts');
revealBtn.addEventListener('click', () => {
    const today = new Date().getDate() % loveNotes.length;
    messageEl.textContent = loveNotes[today];
    messageEl.classList.remove('hidden');
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 90}%`;
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }
});

// Virtual Hug
const hugBtn = document.getElementById('hug-btn');
const hugAnimation = document.getElementById('hug-animation');
hugBtn.addEventListener('click', () => {
    hugAnimation.classList.remove('hidden');
    setTimeout(() => hugAnimation.classList.add('hidden'), 3000);
});

// Star-Gazing
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
canvas.width = canvas.offsetWidth;
canvas.height = 300;
const stars = [];
for (let i = 0; i < 100; i++) {
    stars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, radius: Math.random() * 3 });
}
function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
    });
}
drawStars();
const starName = document.getElementById('star-name');
canvas.addEventListener('click', () => {
    starName.textContent = "Our Eternal Sky - #MaAa";
});

// Mood Tracker with Email Notification
const moodSelect = document.getElementById('mood');
const moodResponse = document.getElementById('mood-response');
const responses = {
    happy: "My Mannu’s happy...best feeling ever!",
    sad: "Wrapping you in a big hug, baby.",
    excited: "Can’t wait to share that excitement!",
    annoyed: "Oh, my baby’s annoyed, let me make it better.",
    bored: "My Mannu’s bored—let’s do something fun!",
    iNeedU: "I’m right here for you, baby,always.",
    loving: "My Mannu’s feeling loving—I’m melting!",
    tired: "Rest in my arms, baby, I’ve got you."
};
moodSelect.addEventListener('change', (e) => {
    const mood = e.target.value;
    if (mood) {
        moodResponse.textContent = responses[mood];
        moodResponse.classList.remove('hidden');
        // Send email notification
        emailjs.send("service_1mt7c6i", "template_cn6jfah", {
            to_email: "lmhss.anandh@gmail.com",
            mood: mood,
            message: `Mannu is feeling ${mood}!`
        }).then(
            () => console.log("Email sent successfully!"),
            (error) => console.log("Failed to send email:", error)
        );
    }
});

// Falling Flowers
function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = `${Math.random() * 100}vw`;
    flower.style.animationDuration = `${Math.random() * 5 + 5}s`;
    document.body.appendChild(flower);
    setTimeout(() => flower.remove(), 10000);
}
setInterval(createFlower, 500);
