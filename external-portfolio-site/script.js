const answers = {
  story:
    "Emmanuel Mensah's story moves from Ghana to global sport, research, Division I athletics, and data. His work focuses on using sport to create opportunity, strengthen systems, and improve the student-athlete experience.",
  research:
    "His research interests include international student-athletes, career readiness, university belonging, athlete transition, sport policy, youth development, risk perception, and sport for social impact.",
  athletics:
    "Within Iowa Hawkeye Athletics, Emmanuel works around data analytics, technology support, asset management, workforce analytics, IT operations, and systems that help Division I athletics run more effectively.",
  global:
    "His global lens comes from Ghana's Ministry of Youth and Sports, the 13th African Games, African Para Games experience, EKM Sports Nexus, and youth-centered sport engagement connected to international platforms.",
  contact:
    "The best way to connect is by email at emmanuel-mensah@uiowa.edu or through LinkedIn at linkedin.com/in/emmanuel-kofimensah.",
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
