import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#intro-header', {
    strings: ["i am a web developer.", "good design is of the utmost importance."],
    typeSpeed: 100,
    loop: true
  });
}

export { loadDynamicBannerText };
