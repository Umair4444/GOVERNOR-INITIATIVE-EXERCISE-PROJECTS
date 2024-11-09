// // ResumePage
// const ResumePage = document.getElementById("resumePage") as HTMLElement;
const ResumeForm = document.getElementById("resumeForm") as HTMLFormElement;

const ResumePhoto = document.getElementById(
  "profile_image"
) as HTMLInputElement;

const MyName = document.getElementById("MyName") as HTMLHeadingElement;
const Title = document.getElementById("Title") as HTMLSpanElement;
const MobileNo = document.getElementsByClassName("Text")[0] as HTMLUListElement;
const Email = document.getElementsByClassName("Text")[1] as HTMLUListElement;
const Website = document.getElementsByClassName("Text")[2] as HTMLUListElement;
const Linkedin = document.getElementsByClassName("Text")[3] as HTMLUListElement;
const Github = document.getElementsByClassName("Text")[4] as HTMLUListElement;
const Address = document.getElementsByClassName("Text")[5] as HTMLUListElement;

const Download = document.getElementById("Download-btn") as HTMLButtonElement;
const Edit = document.getElementById("edit") as HTMLButtonElement;

// output
const CvPhoto = document.getElementById("Image") as HTMLImageElement;

ResumeForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  alert("sucessful");

  //info
  const myname = (document.getElementById("my_name") as HTMLInputElement).value;
  const profession = (document.getElementById("profession") as HTMLInputElement)
    .value;
  const mobileno = (
    document.getElementsByClassName("input_info")[0] as HTMLInputElement
  ).value;
  const email = (
    document.getElementsByClassName("input_info")[1] as HTMLInputElement
  ).value;
  const website = (
    document.getElementsByClassName("input_info")[2] as HTMLInputElement
  ).value;
  const linkedin = (
    document.getElementsByClassName("input_info")[3] as HTMLInputElement
  ).value;
  const github = (
    document.getElementsByClassName("input_info")[4] as HTMLInputElement
  ).value;
  const address = (
    document.getElementsByClassName("input_info")[5] as HTMLInputElement
  ).value;
  console.log(myname);

  if (MyName) MyName.textContent = myname;
  if (Title) Title.textContent = profession;
  if (MobileNo) MobileNo.textContent = mobileno;
  if (Email) Email.textContent = email;
  if (Website) Website.textContent = website;
  if (Linkedin) Linkedin.textContent = linkedin;
  if (Github) Github.textContent = github;
  if (Address) Address.textContent = address;

  // get input image file
  const photofile = ResumePhoto.files ? ResumePhoto.files[0] : null;
  let photoBase64: string = "";
  if (photofile) {
    photoBase64 = await fileToBase64(photofile);
    localStorage.setItem("resumePhoto", photoBase64);
    CvPhoto.src = photoBase64;
  }

  document.querySelector(".container")?.classList.add("hidden");
  document.querySelector(".ResumePage")?.classList.remove("hidden");

  displayEducationOnResume();
  displayJobOnResume();
  displayHobbyOnResume();
  displaySkillsOnResume();
});

let educationCount = 0;
function addEducation(): void {
  educationCount++;

  // Create container for the education entry
  const educationContainer = document.createElement("div");
  educationContainer.className = "education-entry";
  educationContainer.id = `education-${educationCount}`;

  // Degree input
  const degreeInput = document.createElement("input");
  degreeInput.type = "text";
  degreeInput.placeholder = `Degree/Certificate ${educationCount}`;
  degreeInput.id = `degree-${educationCount}`;

  // College input
  const collegeInput = document.createElement("input");
  collegeInput.type = "text";
  collegeInput.placeholder = `College/University ${educationCount}`;
  collegeInput.id = `college-${educationCount}`;

  // Duration input
  const durationInput = document.createElement("input");
  durationInput.type = "text";
  durationInput.placeholder = `Duration ${educationCount}`;
  durationInput.id = `duration-${educationCount}`;
  durationInput.style.width = "100px";

  // Remove button
  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.innerText = "Remove";
  removeButton.onclick = () => removeEducation(educationContainer.id);

  // Append inputs and button to the education container
  educationContainer.appendChild(degreeInput);
  educationContainer.appendChild(collegeInput);
  educationContainer.appendChild(durationInput);
  educationContainer.appendChild(removeButton);

  // Append the education container to the main container
  document
    .getElementById("education-container")
    ?.appendChild(educationContainer);
}

function removeEducation(id: string): void {
  // Find the specific education entry by its ID and remove it
  const educationElement = document.getElementById(id);
  if (educationElement) {
    educationElement.remove();
  }
}

function displayEducationOnResume(): void {
  const resumeEducationContainer = document.getElementById(
    "resume-education-container"
  );
  if (!resumeEducationContainer) return;

  // Clear existing education data in the resume section
  resumeEducationContainer.innerHTML = "";

  // Loop through and display each added education entry
  for (let i = 1; i <= educationCount; i++) {
    const degree =
      (document.getElementById(`degree-${i}`) as HTMLInputElement)?.value || "";
    const college =
      (document.getElementById(`college-${i}`) as HTMLInputElement)?.value ||
      "";
    const duration =
      (document.getElementById(`duration-${i}`) as HTMLInputElement)?.value ||
      "";

    if (degree && college && duration) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <h5>${duration}</h5>
        <h4>${degree}</h4>
        <h4>${college}</h4>
      `;
      resumeEducationContainer.appendChild(listItem);
    }
  }
}

let jobCount = 0;

function addJob(): void {
  jobCount++;

  // Create container for the Job entry
  const jobContainer = document.createElement("div");
  jobContainer.className = "job-entry";
  jobContainer.id = `job-${jobCount}`;

  // Position input
  const positionInput = document.createElement("input");
  positionInput.type = "text";
  positionInput.placeholder = `position ${jobCount}`;
  positionInput.id = `position-${jobCount}`;

  // Company input
  const companyInput = document.createElement("input");
  companyInput.type = "text";
  companyInput.placeholder = `company ${jobCount}`;
  companyInput.id = `company-${jobCount}`;

  // WorkingYears input
  const workingYearsInput = document.createElement("input");
  workingYearsInput.type = "text";
  workingYearsInput.placeholder = `workingYears ${jobCount}`;
  workingYearsInput.id = `workingYears-${jobCount}`;
  workingYearsInput.style.width = "100px";

  // WorkingYears input
  const jobdetailsInput = document.createElement("input");
  jobdetailsInput.type = "text";
  jobdetailsInput.placeholder = `jobdetails ${jobCount}`;
  jobdetailsInput.id = `jobdetails-${jobCount}`;

  // Remove button
  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.innerText = "Remove";
  removeButton.onclick = () => removeJob(jobContainer.id);

  // Append inputs and button to the education container
  jobContainer.appendChild(positionInput);
  jobContainer.appendChild(companyInput);
  jobContainer.appendChild(workingYearsInput);
  jobContainer.appendChild(jobdetailsInput);
  jobContainer.appendChild(removeButton);

  // Append the education container to the main container
  document.getElementById("job-container")?.appendChild(jobContainer);
}

function removeJob(id: string): void {
  // Find the specific education entry by its ID and remove it
  const jobElement = document.getElementById(id);
  if (jobElement) {
    jobElement.remove();
  }
}

function displayJobOnResume(): void {
  const resumeJobContainer = document.getElementById("resume-job-container");
  if (!resumeJobContainer) return;

  // Clear existing education data in the resume section
  resumeJobContainer.innerHTML = "";

  // Loop through and display each added education entry
  for (let i = 1; i <= jobCount; i++) {
    const position =
      (document.getElementById(`position-${i}`) as HTMLInputElement)?.value ||
      "";
    const company =
      (document.getElementById(`company-${i}`) as HTMLInputElement)?.value ||
      "";
    const workingYears =
      (document.getElementById(`workingYears-${i}`) as HTMLInputElement)
        ?.value || "";
    const jobdetails =
      (document.getElementById(`jobdetails-${i}`) as HTMLInputElement)?.value ||
      "";
    const para =
      (document.getElementById(`jobdetails-${i}`) as HTMLInputElement)?.value ||
      "";

    if (position && company && workingYears && para) {
      const divItem = document.createElement("div");
      divItem.innerHTML = `   <div class="Year-company">
                <h5>${workingYears}</h5>
                <h5>${company}</h5>
              </div>
              <div class="Text">
                <h4>${position}</h4>
                <p>
                 ${para}
                </p>
              </div>`;

      divItem.classList.add("Box");
      resumeJobContainer.appendChild(divItem);
    }
  }
}

//download-btn function
const ResumePage = document.getElementsByClassName(
  "ResumePage"
)[0] as HTMLElement;

Download.addEventListener("click", async () => {
  let opt = {
    margin: [0, 0, 0, 0], // Reduces white space
    filename: "Resume.pdf",
    html2canvas: { scale: 2 }, // Improves quality
    scrollY: 0, // Fixes any scrolling issues
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };
  console.log(opt);
  Download.innerText = "Generating PDF...";
  try {
    Download.classList.add("hidden");
    Edit.classList.add("hidden");
    //@ts-ignore
    await html2pdf().from(ResumePage).set(opt).save();
  } catch (error) {
    console.error("Failed to generate PDF", error);
  } finally {
    Download.classList.remove("hidden");
    Edit.classList.remove("hidden");
    Download.innerText = "Download";
  }
});
console.log(Download);
console.log(Edit);

const edit = () => {
  document.querySelector(".container")?.classList.remove("hidden");
  document.querySelector(".ResumePage")?.classList.add("hidden");
};

// Convert file to Base64
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      resolve(reader.result as string);
    };

    // reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};

let hobbyCount = 0;
function addhobby(): void {
  hobbyCount++;

  // Create container for the hobby entry
  const hobbyContainer = document.createElement("ul");
  hobbyContainer.className = "hobby-entry";
  hobbyContainer.id = `hobby-${hobbyCount}`;

  const hobbylist = document.createElement("input");
  hobbylist.type = "text";
  hobbylist.placeholder = `Hobby ${hobbyCount}`;
  hobbylist.className = "hobby-single-entry";
  hobbylist.id = `hobbylist-${hobbyCount}`;

  // Remove button
  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.innerText = "Remove";
  removeButton.onclick = () => removehobby(hobbyContainer.id);

  // Append inputs and button to the education container
  hobbyContainer.appendChild(hobbylist);
  hobbyContainer.appendChild(removeButton);

  // Append the education container to the main container
  document.getElementById("intrest")?.appendChild(hobbyContainer);
}

function removehobby(id: string): void {
  // Find the specific education entry by its ID and remove it
  const hobbyElement = document.getElementById(id);
  if (hobbyElement) {
    hobbyElement.remove();
  }
}

function displayHobbyOnResume(): void {
  const resumeHobbyContainer = document.getElementById(
    "resume-hobby-container"
  );
  if (!resumeHobbyContainer) return;

  // Clear existing education data in the resume section
  resumeHobbyContainer.innerHTML = "";

  // Loop through and display each added education entry
  for (let i = 1; i <= hobbyCount; i++) {
    const hobbies =
      (document.getElementById(`hobbylist-${i}`) as HTMLInputElement)?.value ||
      "";

    if (hobbies) {
      const listItem = document.createElement("ul");
      listItem.innerHTML = `
      <li>
      I do ${hobbies}
      </li>
       `;

      resumeHobbyContainer.appendChild(listItem);
    }
  }
}

let skillCount = 0;

function addSkill(): void {
  skillCount++;

  // Create a container for the skill entry
  const skillContainer = document.createElement("div");
  skillContainer.className = "skill-entry";
  skillContainer.id = `skill-${skillCount}`;

  // Skill name input
  const skillNameInput = document.createElement("input");
  skillNameInput.type = "text";
  skillNameInput.placeholder = `Skill ${skillCount}`;
  skillNameInput.className = "skill-name";
  skillNameInput.id = `skill-name-${skillCount}`;

  // Skill level range input
  const skillLevelInput = document.createElement("input");
  skillLevelInput.type = "range";
  skillLevelInput.min = "0";
  skillLevelInput.max = "100";
  skillLevelInput.value = "50";
  skillLevelInput.className = "skill-level";
  skillLevelInput.id = `skill-level-${skillCount}`;

  // Display for the range value
  const skillLevelDisplay = document.createElement("span");
  skillLevelDisplay.className = "skill-level-display";
  skillLevelDisplay.id = `skill-level-display-${skillCount}`;
  skillLevelDisplay.textContent = skillLevelInput.value;

  // Attach the update functionality for range display
  skillLevelInput.addEventListener("input", () => {
    skillLevelDisplay.textContent = skillLevelInput.value;
  });

  // Remove button
  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.innerText = "Remove";
  removeButton.onclick = () => removeSkill(skillContainer.id);

  // Append elements to skill container
  skillContainer.appendChild(skillNameInput);
  skillContainer.appendChild(skillLevelInput);
  skillContainer.appendChild(skillLevelDisplay);
  skillContainer.appendChild(removeButton);

  // Append skill container to main skill section
  document.getElementById("skill-container")?.appendChild(skillContainer);
}

function removeSkill(id: string): void {
  const skillElement = document.getElementById(id);
  if (skillElement) {
    skillElement.remove();
  }
}

function displaySkillsOnResume(): void {
  const resumeSkillContainer = document.getElementById(
    "resume-skill-container"
  );
  if (!resumeSkillContainer) return;

  // Clear existing skills in the resume section
  resumeSkillContainer.innerHTML = "";

  // Loop through and display each added skill entry
  for (let i = 1; i <= skillCount; i++) {
    const skillNameInput = document.getElementById(
      `skill-name-${i}`
    ) as HTMLInputElement;
    const skillLevelInput = document.getElementById(
      `skill-level-${i}`
    ) as HTMLInputElement;

    if (skillNameInput && skillLevelInput && skillNameInput.value) {
      const skillName = skillNameInput.value;
      const skillLevel = skillLevelInput.value;

      // Create skill display for resume
      const skillDisplay = document.createElement("div");
      skillDisplay.className = "resume-skill";

      skillDisplay.innerHTML = `
        <h4>${skillName}</h4>
        <div class="range-bar">
          <div class="my-range" style="width: ${skillLevel}%;">${skillLevel}%</div>
        </div>
      `;

      // Append to resume container
      resumeSkillContainer.appendChild(skillDisplay);
    }
  }
}
