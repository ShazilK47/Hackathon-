// script.ts
// Helper function to create new input fields with remove button
function createEntryFieldset(entryType, labels) {
    var container = document.createElement("div");
    container.classList.add("".concat(entryType, "-entry"));
    labels.forEach(function (label) {
        var labelElement = document.createElement("label");
        labelElement.innerText = "".concat(label, ":");
        var input = document.createElement("input");
        input.type = "text";
        input.name = label.toLowerCase().replace(/\s+/g, "-");
        input.placeholder = label;
        container.appendChild(labelElement);
        container.appendChild(input);
    });
    var removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.addEventListener("click", function () {
        container.remove();
    });
    container.appendChild(removeBtn);
    return container;
}
// Add education fields
var addEducationBtn = document.getElementById("add-education-btn");
addEducationBtn === null || addEducationBtn === void 0 ? void 0 : addEducationBtn.addEventListener("click", function () {
    var educationSection = document.getElementById("education-section");
    if (educationSection) {
        var newEducationEntry = createEntryFieldset("education", [
            "Degree",
            "Institute",
        ]);
        educationSection.appendChild(newEducationEntry);
    }
});
// Add work experience fields
var addExperienceBtn = document.getElementById("add-experience-btn");
addExperienceBtn === null || addExperienceBtn === void 0 ? void 0 : addExperienceBtn.addEventListener("click", function () {
    var experienceSection = document.getElementById("experience-section");
    if (experienceSection) {
        var newExperienceEntry = createEntryFieldset("experience", [
            "Job Title",
            "Company",
        ]);
        experienceSection.appendChild(newExperienceEntry);
    }
});
// Add skill fields
var addSkillBtn = document.getElementById("add-skill-btn");
addSkillBtn === null || addSkillBtn === void 0 ? void 0 : addSkillBtn.addEventListener("click", function () {
    var skillsSection = document.getElementById("skills-section");
    if (skillsSection) {
        var newSkillEntry = createEntryFieldset("skills", ["Skill"]);
        skillsSection.appendChild(newSkillEntry);
    }
});
// Handle form submission
var resumeForm = document.getElementById("resume-form");
resumeForm === null || resumeForm === void 0 ? void 0 : resumeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Personal Information
    var previewName = document.getElementById("preview-name");
    var previewEmail = document.getElementById("preview-email");
    var previewPhone = document.getElementById("preview-phone");
    var previewLinkedin = document.getElementById("preview-linkedin");
    previewName.innerText = document.getElementById("name").value;
    previewEmail.innerText = "Email: ".concat(document.getElementById("email").value);
    previewPhone.innerText = "Phone: ".concat(document.getElementById("phone").value);
    previewLinkedin.innerText = document.getElementById("linkedin").value;
    // Education
    var educationList = document.getElementById("education-list");
    educationList.innerHTML = ""; // Clear previous entries
    var educationEntries = document.querySelectorAll(".education-entry");
    educationEntries.forEach(function (entry) {
        var degree = entry.querySelector("[name='degree']")
            .value;
        var institute = entry.querySelector("[name='institute']").value;
        var listItem = document.createElement("li");
        listItem.innerText = "".concat(degree, " from ").concat(institute);
        educationList.appendChild(listItem);
    });
    // Work Experience
    var experienceList = document.getElementById("experience-list");
    experienceList.innerHTML = ""; // Clear previous entries
    var experienceEntries = document.querySelectorAll(".experience-entry");
    experienceEntries.forEach(function (entry) {
        var jobTitle = entry.querySelector("[name='job-title']").value;
        var company = entry.querySelector("[name='company']").value;
        var listItem = document.createElement("li");
        listItem.innerText = "".concat(jobTitle, " at ").concat(company);
        experienceList.appendChild(listItem);
    });
    // Skills
    var skillsList = document.getElementById("skills-list");
    skillsList.innerHTML = ""; // Clear previous entries
    var skillEntries = document.querySelectorAll(".skills-entry");
    skillEntries.forEach(function (entry) {
        var skill = entry.querySelector("[name='skill']")
            .value;
        var listItem = document.createElement("li");
        listItem.innerText = skill;
        skillsList.appendChild(listItem);
    });
    // Show Resume Preview
    var resumePreview = document.getElementById("resume-preview");
    if (resumePreview) {
        resumePreview.style.display = "block";
        resumePreview.scrollIntoView({ behavior: "smooth" });
    }
});
