// script.js
window.onload = function() {
  const greeting = document.getElementById('greeting');
  greeting.innerHTML = "Hi, welcome to my website!";
  
  // Optional: Add voice greeting using Speech Synthesis
  const msg = new SpeechSynthesisUtterance("Hi, mathew how are you!");
  window.speechSynthesis.speak(msg);
};
