import Typed from "typed.js";
import JSConfetti from 'js-confetti'

const btnClickMe = document.getElementById('confetti-btn');
btnClickMe.addEventListener("click", () => {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
        emojis: ['🤵', '🍕', '💥', '🐱‍🏍', '🎶', '👀', '❤'],
        emojiSize: 30,
        confettiNumber: 100,
    });
});

new Typed("#heading", {
  strings: ["a Software Engineer", "a Web Developer", "the Iron Man"],
  typeSpeed: 60,
  backSpeed: 80,
  smartBackspace: true,
  loop: true,
  cursorChar: "_",
});