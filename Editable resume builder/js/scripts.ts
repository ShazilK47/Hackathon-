// script.ts

// Helper function to create new input fields with remove button
function createEntryFieldset(entryType: string, labels: string[]): HTMLElement {
  const container = document.createElement("div");
  container.classList.add(`${entryType}-entry`);

  labels.forEach((label) => {
    const labelElement = document.createElement("label");
    labelElement.innerText = `${label}:`;

    const input = document.createElement("input");
    input.type = "text";
    input.name = label.toLowerCase().replace(/\s+/g, "-");
    input.placeholder = label;
    input.required = true;

    container.appendChild(labelElement);
    container.appendChild(input);
  });

  const removeBtn = document.createElement("button");
  removeBtn.innerText = "Remove";
  removeBtn.classList.add("remove-btn");
  removeBtn.addEventListener("click", () => {
    container.remove();
  });

  container.appendChild(removeBtn);
  return container;
}

// Add education fields
const addEducationBtn = document.getElementById("add-education-btn");
addEducationBtn?.addEventListener("click", () => {
  const educationSection = document.getElementById("education-section");
  if (educationSection) {
    const newEducationEntry = createEntryFieldset("education", [
      "Degree",
      "Institute",
    ]);
    educationSection.appendChild(newEducationEntry);
  }
});

// Add work experience fields
const addExperienceBtn = document.getElementById("add-experience-btn");
addExperienceBtn?.addEventListener("click", () => {
  const experienceSection = document.getElementById("experience-section");
  if (experienceSection) {
    const newExperienceEntry = createEntryFieldset("experience", [
      "Job Title",
      "Company",
    ]);
    experienceSection.appendChild(newExperienceEntry);
  }
});

// Add skill fields
const addSkillBtn = document.getElementById("add-skill-btn");
addSkillBtn?.addEventListener("click", () => {
  const skillsSection = document.getElementById("skills-section");
  if (skillsSection) {
    const newSkillEntry = createEntryFieldset("skills", ["Skill"]);
    skillsSection.appendChild(newSkillEntry);
  }
});

// Handle form submission and update preview
const resumeForm = document.getElementById("resume-form") as HTMLFormElement;
resumeForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  // Personal Information
  const previewName = document.getElementById("preview-name")!;
  const previewEmail = document.getElementById("preview-email")!;
  const previewPhone = document.getElementById("preview-phone")!;
  const previewLinkedin = document.getElementById("preview-linkedin")!;

  previewName.innerText = (
    document.getElementById("name") as HTMLInputElement
  ).value;
  previewEmail.innerText = (
    document.getElementById("email") as HTMLInputElement
  ).value;
  previewPhone.innerText = (
    document.getElementById("phone") as HTMLInputElement
  ).value;
  previewLinkedin.innerText = (
    document.getElementById("linkedin") as HTMLInputElement
  ).value;

  // Education
  const educationList = document.getElementById(
    "education-list"
  ) as HTMLElement;
  educationList.innerHTML = ""; // Clear previous entries
  const educationEntries = document.querySelectorAll(".education-entry");
  educationEntries.forEach((entry) => {
    const degree = (entry.querySelector("[name='degree']") as HTMLInputElement)
      .value;
    const institute = (
      entry.querySelector("[name='institute']") as HTMLInputElement
    ).value;

    const listItem = document.createElement("li");
    listItem.innerText = `${degree} from ${institute}`;
    educationList.appendChild(listItem);
  });

  // Work Experience
  const experienceList = document.getElementById(
    "experience-list"
  ) as HTMLElement;
  experienceList.innerHTML = ""; // Clear previous entries
  const experienceEntries = document.querySelectorAll(".experience-entry");
  experienceEntries.forEach((entry) => {
    const jobTitle = (
      entry.querySelector("[name='job-title']") as HTMLInputElement
    ).value;
    const company = (
      entry.querySelector("[name='company']") as HTMLInputElement
    ).value;

    const listItem = document.createElement("li");
    listItem.innerText = `${jobTitle} at ${company}`;
    experienceList.appendChild(listItem);
  });

  // Skills
  const skillsList = document.getElementById("skills-list") as HTMLElement;
  skillsList.innerHTML = ""; // Clear previous entries
  const skillEntries = document.querySelectorAll(".skills-entry");
  skillEntries.forEach((entry) => {
    const skill = (entry.querySelector("[name='skill']") as HTMLInputElement)
      .value;

    const listItem = document.createElement("li");
    listItem.innerText = skill;
    skillsList.appendChild(listItem);
  });

  // Show Resume Preview
  const resumePreview = document.getElementById("resume-preview");
  if (resumePreview) {
    resumePreview.style.display = "block";
    resumePreview.scrollIntoView({ behavior: "smooth" });
  }
});
