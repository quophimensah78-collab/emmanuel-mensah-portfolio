const answers = {
  story:
    "My story moves from Ghana to global sport, research, Division I athletics, and data. I am building a path focused on creating opportunity through sport, strengthening systems, and improving the student-athlete experience.",
  research:
    "My research interests include student-athlete mental health and well-being, mental-health literacy, international sport, sport governance, youth sport, sport finance, sport marketing, and collegiate athletics.",
  athletics:
    "Within Iowa Hawkeyes Athletics, I work as an IT Student Associate in data analytics, technology support, asset management, workforce analytics, IT operations, and systems that help Division I athletics run more effectively.",
  global:
    "My global lens comes from Ghana's Ministry of Youth and Sports, the 13th African Games, African Para Games research, Rugby Africa volunteer leadership, EKM Sports Nexus, and recent UN-related youth and sport engagement.",
  contact:
    "The best way to connect with me is by email at emmanuel-mensah@uiowa.edu or through LinkedIn at linkedin.com/in/emmanuel-kofimensah.",
};

const answerEl = document.querySelector("#chat-answer");
const promptButtons = document.querySelectorAll(".prompt-button");

promptButtons.forEach((button) => {
  button.addEventListener("click", () => {
    promptButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    answerEl.textContent = answers[button.dataset.answer];
  });
});
