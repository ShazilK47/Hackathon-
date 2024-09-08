// // script.ts
// const toggleSkillsBtn = document.getElementById("toggle-skills-btn");
// const skillsSection = document.getElementById("skills");
// toggleSkillsBtn?.addEventListener("click", () => {
//   if (skillsSection?.style.display === "none") {
//     skillsSection.style.display = "block";
//   } else {
//     skillsSection.style.display = "none";
//   }
// });
// script.ts
// const toggleSkillsBtn = document.getElementById("toggle-skills-btn");
// const skillsSection = document.getElementById("skills");
// toggleSkillsBtn?.addEventListener("click", () => {
//   if (
//     skillsSection?.style.display === "none" ||
//     skillsSection?.style.opacity === "0"
//   ) {
//     skillsSection.style.display = "block";
//     skillsSection.style.opacity = "1";
//     skillsSection.style.transition = "opacity 0.5s ease";
//   } else {
//     skillsSection.style.opacity = "0";
//     skillsSection.style.transition = "opacity 0.5s ease";
//     setTimeout(() => {
//       skillsSection.style.display = "none";
//     }, 500);
//   }
// });
// script.ts
var toggleSkillsBtn = document.getElementById("toggle-skills-btn");
var skillsSection = document.getElementById("skills");
toggleSkillsBtn === null || toggleSkillsBtn === void 0
  ? void 0
  : toggleSkillsBtn.addEventListener("click", function () {
      if (
        (skillsSection === null || skillsSection === void 0
          ? void 0
          : skillsSection.style.display) === "none" ||
        (skillsSection === null || skillsSection === void 0
          ? void 0
          : skillsSection.style.opacity) === "0"
      ) {
        skillsSection.style.display = "block";
        skillsSection.style.opacity = "1";
        skillsSection.style.transition = "opacity 0.4s ease-in-out";
        toggleSkillsBtn.innerText = "Hide Skills";
      } else {
        skillsSection.style.opacity = "0";
        skillsSection.style.transition = "opacity 0.4s ease-in-out";
        setTimeout(function () {
          skillsSection.style.display = "none";
        }, 400);
        toggleSkillsBtn.innerText = "Show Skills";
      }
    });
