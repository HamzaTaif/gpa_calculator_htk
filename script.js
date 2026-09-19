/**
 * UET GPA & CGPA Portal Core Engine
 * Manages reactive state, localStorage memory, curriculum rendering,
 * Theory & Lab (1 CH) Course Splitting, Summer Semesters, Course Repeats, Target Simulation,
 * and Official UET Transcript Generator (SSR_TSRPT.pdf Replica for Graded Semesters Only).
 */

// ── App State ──────────────────────────────────────────────────
let appState = {
  selectedDeptId: "dept-1",
  activeSemKey: "sem-0", // e.g., 'sem-0', 'sem-1', 'summer-1', 'sem-2', etc.
  grades: {}, // Structure: { [deptId]: { [semIndex]: { [courseIdxKey]: "A" } } }
  labSplits: {}, // Structure: { [deptId]: { [semIndex]: { [courseIdx]: true } } }
  autoSplitAllLabs: false,
  summerCourses: {},
  studentName: "",
  fatherName: "",
  studentRegNo: "",
  customCourses: [
    { name: "Subject 1", credits: 3, grade: "A" },
    { name: "Subject 2", credits: 3, grade: "B+" }
  ],
  customPrevCgpa: null,
  customPrevCredits: null
};

const STORAGE_KEY = "uet_gpa_portal_state_v6";

// ── DOM Initialization ──────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  loadStateFromStorage();
  renderDeptModalGrid();
  renderGradeScaleTable();
  setActiveDepartment(appState.selectedDeptId, false);
  renderCustomCourses();
  syncStudentProfileInputs();
});

// ── LocalStorage Engine ─────────────────────────────────────────
function saveStateToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (e) {
    console.error("Failed to save state to localStorage", e);
  }
}

function loadStateFromStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.studentName === "Hamza Taif") parsed.studentName = "";
      if (parsed.fatherName === "Taif Ullah") parsed.fatherName = "";
      if (parsed.studentRegNo === "25PWSWE0094") parsed.studentRegNo = "";
      appState = { ...appState, ...parsed };
    }
  } catch (e) {
    console.error("Failed to parse saved state", e);
  }
}

function syncStudentProfileInputs() {
  const sName = document.getElementById("studentNameInput");
  const fName = document.getElementById("fatherNameInput");
  const rNo = document.getElementById("regNoInput");

  if (sName) sName.value = appState.studentName || "";
  if (fName) fName.value = appState.fatherName || "";
  if (rNo) rNo.value = appState.studentRegNo || "";

  // Also sync modal inputs
  const mName = document.getElementById("modalStudentName");
  const mFname = document.getElementById("modalFatherName");
  const mReg = document.getElementById("modalRegNo");

  if (mName) mName.value = appState.studentName || "";
  if (mFname) mFname.value = appState.fatherName || "";
  if (mReg) mReg.value = appState.studentRegNo || "";
}

function saveStudentProfile() {
  const sName = document.getElementById("studentNameInput");
  const fName = document.getElementById("fatherNameInput");
  const rNo = document.getElementById("regNoInput");

  if (sName) appState.studentName = sName.value;
  if (fName) appState.fatherName = fName.value;
  if (rNo) appState.studentRegNo = rNo.value;

  saveStateToStorage();
}

function resetAllData() {
  if (confirm("Are you sure you want to reset all saved grades and transcript data? This action cannot be undone.")) {
    localStorage.removeItem(STORAGE_KEY);
    appState.grades = {};
    appState.summerCourses = {};
    appState.labSplits = {};
    appState.activeSemKey = "sem-0";
    setActiveDepartment(appState.selectedDeptId, true);
    toast("All saved grade data has been reset.");
  }
}

// ── Department & Semester Selection ─────────────────────────────
function getActiveDept() {
  return UET_DEPARTMENTS.find(d => d.id === appState.selectedDeptId) || UET_DEPARTMENTS[0];
}

function setActiveDepartment(deptId, forceRender = true) {
  appState.selectedDeptId = deptId;
  if (!appState.grades[deptId]) appState.grades[deptId] = {};
  if (!appState.summerCourses[deptId]) appState.summerCourses[deptId] = {};
  if (!appState.labSplits[deptId]) appState.labSplits[deptId] = {};
  
  const dept = getActiveDept();
  appState.activeSemKey = "sem-0";

  // Update Header UI
  document.getElementById("headerDeptIcon").textContent = dept.code;
  document.getElementById("headerDeptName").textContent = dept.name;
  
  // Update Banner UI
  document.getElementById("deptBannerIcon").textContent = dept.code;
  document.getElementById("deptBannerTitle").textContent = dept.name;
  document.getElementById("deptBannerSub").textContent = `${dept.semesters.length} Regular Semesters + Summer Terms Pre-loaded`;

  renderSemesterPills();
  renderActiveSemesterContent();
  updateGlobalMetrics();
  renderTranscript();

  if (forceRender) saveStateToStorage();
}

// ── Render Semester Navigation Pills (Regular + Summer) ──────────
function renderSemesterPills() {
  const dept = getActiveDept();
  const pillsContainer = document.getElementById("semesterPills");
  pillsContainer.innerHTML = "";

  const deptGrades = appState.grades[dept.id] || {};
  const deptSummer = appState.summerCourses[dept.id] || {};

  dept.semesters.forEach((sem, idx) => {
    // Add Regular Semester Pill
    const key = `sem-${idx}`;
    const btn = document.createElement("button");
    btn.className = `sem-pill ${appState.activeSemKey === key ? "active" : ""}`;
    btn.onclick = () => switchSemester(key);
    
    const semGrades = deptGrades[idx] || {};
    const gradedCount = Object.keys(semGrades).length;

    btn.innerHTML = `
      <span>Sem ${sem.sem}</span>
      <span class="sem-badge">${gradedCount}/${sem.courses.length}</span>
    `;
    pillsContainer.appendChild(btn);

    // Add Summer Semester Pill after every 2 semesters
    if ((idx + 1) % 2 === 0 || idx === dept.semesters.length - 1) {
      const summerNum = Math.ceil((idx + 1) / 2);
      const summerKey = `summer-${summerNum}`;
      const summerBtn = document.createElement("button");
      summerBtn.className = `sem-pill summer-pill ${appState.activeSemKey === summerKey ? "active" : ""}`;
      summerBtn.onclick = () => switchSemester(summerKey);

      const summerList = deptSummer[summerKey] || [];
      summerBtn.innerHTML = `
        <span>Summer ${summerNum}</span>
        <span class="sem-badge">${summerList.length}</span>
      `;
      pillsContainer.appendChild(summerBtn);
    }
  });
}

function switchSemester(key) {
  appState.activeSemKey = key;
  renderSemesterPills();
  renderActiveSemesterContent();
  saveStateToStorage();
}

// ── Render Content for Active Semester (Regular or Summer) ──────
function renderActiveSemesterContent() {
  const isSummer = appState.activeSemKey.startsWith("summer-");

  const regularBatchActions = document.getElementById("regularBatchActions");
  const summerNoticeCard = document.getElementById("summerInfoNotice");
  const summerControlsBar = document.getElementById("summerControlsBar");

  if (isSummer) {
    regularBatchActions.style.display = "none";
    summerNoticeCard.style.display = "flex";
    summerControlsBar.style.display = "block";
    renderSummerSemesterView();
  } else {
    regularBatchActions.style.display = "flex";
    summerNoticeCard.style.display = "none";
    summerControlsBar.style.display = "none";
    renderRegularSemesterView();
  }
}

// ── Render Regular Semester View with Theory & Lab Splitting ──────
function renderRegularSemesterView() {
  const semIdx = parseInt(appState.activeSemKey.replace("sem-", ""));
  const dept = getActiveDept();
  const sem = dept.semesters[semIdx];
  if (!sem) return;

  document.getElementById("activeSemTitle").textContent = `Semester ${sem.sem}`;
  const totalSemCredits = sem.courses.reduce((acc, c) => acc + c.credits, 0);
  document.getElementById("activeSemMeta").textContent = `${sem.courses.length} Courses · ${totalSemCredits} Credit Hours Total`;

  const container = document.getElementById("presetSubjectsContainer");
  container.innerHTML = "";

  const savedSemGrades = (appState.grades[dept.id] && appState.grades[dept.id][semIdx]) || {};
  const semLabSplits = (appState.labSplits[dept.id] && appState.labSplits[dept.id][semIdx]) || {};

  sem.courses.forEach((course, courseIdx) => {
    const isSplit = semLabSplits[courseIdx] || (appState.autoSplitAllLabs && course.hasLab && course.credits > 1);

    if (isSplit && course.credits > 1) {
      // Render as 2 split sub-rows: Theory + Lab (1 CH)
      const theoryCredits = course.credits - 1;
      const labCredits = 1;

      const theoryGradeKey = `${courseIdx}_th`;
      const labGradeKey = `${courseIdx}_lab`;

      const selectedTheoryGrade = savedSemGrades[theoryGradeKey] || "";
      const selectedLabGrade = savedSemGrades[labGradeKey] || "";

      const thPts = selectedTheoryGrade ? (UET_GRADE_SCALE[selectedTheoryGrade]?.points || 0) : 0;
      const labPts = selectedLabGrade ? (UET_GRADE_SCALE[selectedLabGrade]?.points || 0) : 0;

      const thQPoints = thPts * theoryCredits;
      const labQPoints = labPts * labCredits;

      // Theory Row
      const thRow = document.createElement("div");
      thRow.className = "subject-row split-row";
      thRow.innerHTML = `
        <div class="subject-info">
          <span class="subj-idx">${courseIdx + 1}a</span>
          <div>
            <span class="subj-name">${course.name} <small class="split-tag">(Theory)</small></span>
          </div>
        </div>
        <div style="text-align: center;">
          <span class="credit-badge">${theoryCredits} CH</span>
        </div>
        <div>
          <select class="grade-select" data-sem-idx="${semIdx}" data-grade-key="${theoryGradeKey}" onchange="handleRegularGradeChange(event)">
            <option value="">-- Grade --</option>
            ${Object.keys(UET_GRADE_SCALE).map(g => `<option value="${g}" ${g === selectedTheoryGrade ? "selected" : ""}>${g} (${UET_GRADE_SCALE[g].points.toFixed(2)})</option>`).join("")}
          </select>
        </div>
        <div class="quality-points-val">
          ${selectedTheoryGrade ? thQPoints.toFixed(2) : "—"}
        </div>
      `;
      container.appendChild(thRow);

      // Lab Row
      const labRow = document.createElement("div");
      labRow.className = "subject-row split-row lab-row";
      labRow.innerHTML = `
        <div class="subject-info">
          <span class="subj-idx">${courseIdx + 1}b</span>
          <div>
            <span class="subj-name">${course.name} <small class="split-tag lab">🧪 Lab (Practical)</small></span>
            <button class="lab-toggle-btn active" onclick="toggleLabSplit(${semIdx}, ${courseIdx})" title="Merge Theory & Lab">
              Merge
            </button>
          </div>
        </div>
        <div style="text-align: center;">
          <span class="credit-badge lab-badge">${labCredits} CH</span>
        </div>
        <div>
          <select class="grade-select" data-sem-idx="${semIdx}" data-grade-key="${labGradeKey}" onchange="handleRegularGradeChange(event)">
            <option value="">-- Grade --</option>
            ${Object.keys(UET_GRADE_SCALE).map(g => `<option value="${g}" ${g === selectedLabGrade ? "selected" : ""}>${g} (${UET_GRADE_SCALE[g].points.toFixed(2)})</option>`).join("")}
          </select>
        </div>
        <div class="quality-points-val">
          ${selectedLabGrade ? labQPoints.toFixed(2) : "—"}
        </div>
      `;
      container.appendChild(labRow);

    } else {
      // Standard combined course row
      const selectedGrade = savedSemGrades[courseIdx] || "";
      const pts = selectedGrade ? (UET_GRADE_SCALE[selectedGrade]?.points || 0) : 0;
      const qPoints = pts * course.credits;

      const row = document.createElement("div");
      row.className = "subject-row";

      const canSplit = (course.hasLab || course.credits > 1) && !course.isLabOnly;

      row.innerHTML = `
        <div class="subject-info">
          <span class="subj-idx">${courseIdx + 1}</span>
          <div>
            <span class="subj-name">${course.name} ${course.isLabOnly ? '<small class="split-tag lab">🧪 Lab Only</small>' : ''}</span>
            ${canSplit ? `
              <button class="lab-toggle-btn" onclick="toggleLabSplit(${semIdx}, ${courseIdx})" title="Split into Theory & 1 CH Lab">
                🧪 Split Lab
              </button>
            ` : ''}
          </div>
        </div>
        <div style="text-align: center;">
          <span class="credit-badge">${course.credits} CH</span>
        </div>
        <div>
          <select class="grade-select" data-sem-idx="${semIdx}" data-grade-key="${courseIdx}" onchange="handleRegularGradeChange(event)">
            <option value="">-- Grade --</option>
            ${Object.keys(UET_GRADE_SCALE).map(g => `<option value="${g}" ${g === selectedGrade ? "selected" : ""}>${g} (${UET_GRADE_SCALE[g].points.toFixed(2)})</option>`).join("")}
          </select>
        </div>
        <div class="quality-points-val">
          ${selectedGrade ? qPoints.toFixed(2) : "—"}
        </div>
      `;

      container.appendChild(row);
    }
  });

  recalculateActiveSemester();
}

function toggleLabSplit(semIdx, courseIdx) {
  const dept = getActiveDept();
  if (!appState.labSplits[dept.id]) appState.labSplits[dept.id] = {};
  if (!appState.labSplits[dept.id][semIdx]) appState.labSplits[dept.id][semIdx] = {};

  const current = appState.labSplits[dept.id][semIdx][courseIdx];
  appState.labSplits[dept.id][semIdx][courseIdx] = !current;

  renderRegularSemesterView();
  updateGlobalMetrics();
  renderTranscript();
  saveStateToStorage();
  toast(!current ? "Course split into Theory & 1 CH Lab" : "Course merged into combined grade");
}

function handleRegularGradeChange(e) {
  const semIdx = parseInt(e.target.getAttribute("data-sem-idx"));
  const gradeKey = e.target.getAttribute("data-grade-key");
  const val = e.target.value;
  const dept = getActiveDept();

  if (!appState.grades[dept.id]) appState.grades[dept.id] = {};
  if (!appState.grades[dept.id][semIdx]) appState.grades[dept.id][semIdx] = {};

  if (val) {
    appState.grades[dept.id][semIdx][gradeKey] = val;
  } else {
    delete appState.grades[dept.id][semIdx][gradeKey];
  }

  renderRegularSemesterView();
  updateGlobalMetrics();
  renderTranscript();
  renderSemesterPills();
  saveStateToStorage();
}

// ── Render Summer Semester View ──────────────────────────────────
function renderSummerSemesterView() {
  const summerKey = appState.activeSemKey; // e.g. 'summer-1'
  const summerNum = summerKey.replace("summer-", "");
  const dept = getActiveDept();

  document.getElementById("activeSemTitle").textContent = `Summer Semester ${summerNum}`;

  const summerList = (appState.summerCourses[dept.id] && appState.summerCourses[dept.id][summerKey]) || [];
  const totalSummerCredits = summerList.reduce((acc, c) => acc + (parseFloat(c.credits) || 0), 0);

  document.getElementById("activeSemMeta").textContent = `${summerList.length} Summer Courses Registered`;
  
  const chBadge = document.getElementById("summerTotalCreditsBadge");
  chBadge.textContent = `${totalSummerCredits} / 8 CH Max`;
  chBadge.style.color = totalSummerCredits > 8 ? "#f87171" : "#facc15";

  const container = document.getElementById("presetSubjectsContainer");
  container.innerHTML = "";

  if (summerList.length === 0) {
    container.innerHTML = `
      <div style="padding: 2rem; text-align: center; color: var(--text-muted); font-size: 0.88rem;">
        No courses registered for Summer ${summerNum} yet.<br>
        Click <strong>"Add Course / Grade Repeat to Summer"</strong> below to retake courses or add summer subjects!
      </div>
    `;
    recalculateActiveSemester();
    return;
  }

  // Generate list of all available prior courses for replacement selection
  const allPriorCourses = getPriorCoursesForDept(dept.id);

  summerList.forEach((item, itemIdx) => {
    const row = document.createElement("div");
    row.className = "subject-row";
    row.style.gridTemplateColumns = "1.2fr 100px 140px 40px";

    row.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:4px;">
        <select class="grade-select" style="font-size:0.82rem;" onchange="updateSummerCourse(${itemIdx}, 'repeatTarget', this.value)">
          <option value="">-- Retake/Improve Prior Course --</option>
          ${allPriorCourses.map(p => `
            <option value="${p.semIdx}_${p.courseIdx}" ${item.replacesSemIdx === p.semIdx && item.replacesCourseIdx === p.courseIdx ? "selected" : ""}>
              Sem ${p.semNum}: ${p.name} (Prior Grade: ${p.priorGrade || "None"})
            </option>
          `).join("")}
          <option value="custom" ${item.replacesSemIdx === null && item.name ? "selected" : ""}>Custom New Summer Course</option>
        </select>

        ${item.replacesSemIdx === null ? `
          <input type="text" value="${item.name || ''}" placeholder="Course Name" style="padding:0.35rem 0.6rem; font-size:0.8rem;" oninput="updateSummerCourse(${itemIdx}, 'name', this.value)">
        ` : `
          <span class="repeat-badge">Retaking & Replacing Prior Grade</span>
        `}
      </div>
      <div>
        <input type="number" step="0.5" min="1" max="6" value="${item.credits || 3}" style="text-align:center;" oninput="updateSummerCourse(${itemIdx}, 'credits', this.value)">
      </div>
      <div>
        <select class="grade-select" onchange="updateSummerCourse(${itemIdx}, 'grade', this.value)">
          <option value="">-- Grade --</option>
          ${Object.keys(UET_GRADE_SCALE).map(g => `<option value="${g}" ${g === item.grade ? "selected" : ""}>${g} (${UET_GRADE_SCALE[g].points.toFixed(2)})</option>`).join("")}
        </select>
      </div>
      <div>
        <button class="del-btn" onclick="removeSummerCourse(${itemIdx})" title="Remove">&times;</button>
      </div>
    `;

    container.appendChild(row);
  });

  recalculateActiveSemester();
}

function getPriorCoursesForDept(deptId) {
  const dept = UET_DEPARTMENTS.find(d => d.id === deptId);
  if (!dept) return [];

  const list = [];
  const deptGrades = appState.grades[deptId] || {};

  dept.semesters.forEach((sem, semIdx) => {
    sem.courses.forEach((c, cIdx) => {
      const g = deptGrades[semIdx] && deptGrades[semIdx][cIdx];
      list.push({
        semIdx,
        cIdx,
        semNum: sem.sem,
        courseIdx: cIdx,
        name: c.name,
        credits: c.credits,
        priorGrade: g || null
      });
    });
  });

  return list;
}

function addSummerCourseRow() {
  const summerKey = appState.activeSemKey;
  const dept = getActiveDept();

  if (!appState.summerCourses[dept.id]) appState.summerCourses[dept.id] = {};
  if (!appState.summerCourses[dept.id][summerKey]) appState.summerCourses[dept.id][summerKey] = [];

  const currentList = appState.summerCourses[dept.id][summerKey];
  const totalCH = currentList.reduce((acc, c) => acc + (parseFloat(c.credits) || 0), 0);

  if (totalCH >= 8) {
    toast("Warning: UET limits summer registration to a maximum of 8 Credit Hours.");
  }

  appState.summerCourses[dept.id][summerKey].push({
    name: "Summer Course",
    credits: 3,
    grade: "A",
    replacesSemIdx: null,
    replacesCourseIdx: null
  });

  renderSummerSemesterView();
  updateGlobalMetrics();
  renderTranscript();
  renderSemesterPills();
  saveStateToStorage();
}

function removeSummerCourse(itemIdx) {
  const summerKey = appState.activeSemKey;
  const dept = getActiveDept();

  if (appState.summerCourses[dept.id] && appState.summerCourses[dept.id][summerKey]) {
    appState.summerCourses[dept.id][summerKey].splice(itemIdx, 1);
  }

  renderSummerSemesterView();
  updateGlobalMetrics();
  renderTranscript();
  renderSemesterPills();
  saveStateToStorage();
}

function updateSummerCourse(itemIdx, field, val) {
  const summerKey = appState.activeSemKey;
  const dept = getActiveDept();
  const item = appState.summerCourses[dept.id][summerKey][itemIdx];

  if (!item) return;

  if (field === "repeatTarget") {
    if (val === "custom" || !val) {
      item.replacesSemIdx = null;
      item.replacesCourseIdx = null;
      item.name = "Summer Course";
    } else {
      const [sIdx, cIdx] = val.split("_").map(Number);
      const priorCourse = dept.semesters[sIdx].courses[cIdx];
      item.replacesSemIdx = sIdx;
      item.replacesCourseIdx = cIdx;
      item.name = priorCourse.name;
      item.credits = priorCourse.credits;
    }
  } else if (field === "credits") {
    item.credits = parseFloat(val) || 0;
  } else {
    item[field] = val;
  }

  renderSummerSemesterView();
  updateGlobalMetrics();
  renderTranscript();
  renderSemesterPills();
  saveStateToStorage();
}

// ── Batch Actions ────────────────────────────────────────────────
function batchSetGrades(targetGrade) {
  if (appState.activeSemKey.startsWith("summer-")) return;
  const semIdx = parseInt(appState.activeSemKey.replace("sem-", ""));
  const dept = getActiveDept();
  const sem = dept.semesters[semIdx];

  if (!appState.grades[dept.id]) appState.grades[dept.id] = {};
  if (!appState.grades[dept.id][semIdx]) appState.grades[dept.id][semIdx] = {};

  const semLabSplits = (appState.labSplits[dept.id] && appState.labSplits[dept.id][semIdx]) || {};

  sem.courses.forEach((course, courseIdx) => {
    const isSplit = semLabSplits[courseIdx] || (appState.autoSplitAllLabs && course.hasLab && course.credits > 1);
    if (isSplit && course.credits > 1) {
      appState.grades[dept.id][semIdx][`${courseIdx}_th`] = targetGrade;
      appState.grades[dept.id][semIdx][`${courseIdx}_lab`] = targetGrade;
    } else {
      appState.grades[dept.id][semIdx][courseIdx] = targetGrade;
    }
  });

  renderRegularSemesterView();
  updateGlobalMetrics();
  renderTranscript();
  renderSemesterPills();
  saveStateToStorage();
  toast(`All subjects in Semester ${sem.sem} set to ${targetGrade}`);
}

function batchClearGrades() {
  if (appState.activeSemKey.startsWith("summer-")) return;
  const semIdx = parseInt(appState.activeSemKey.replace("sem-", ""));
  const dept = getActiveDept();

  if (appState.grades[dept.id] && appState.grades[dept.id][semIdx]) {
    delete appState.grades[dept.id][semIdx];
  }

  renderRegularSemesterView();
  updateGlobalMetrics();
  renderTranscript();
  renderSemesterPills();
  saveStateToStorage();
  toast(`Cleared grades for Semester ${semIdx + 1}`);
}

// ── Recalculate Active Semester ──────────────────────────────────
function recalculateActiveSemester() {
  const isSummer = appState.activeSemKey.startsWith("summer-");
  const dept = getActiveDept();

  let semCredits = 0;
  let semPoints = 0;

  if (isSummer) {
    const summerList = (appState.summerCourses[dept.id] && appState.summerCourses[dept.id][appState.activeSemKey]) || [];
    summerList.forEach(c => {
      if (c.grade && UET_GRADE_SCALE[c.grade]) {
        const cr = parseFloat(c.credits) || 0;
        const pts = UET_GRADE_SCALE[c.grade].points;
        semCredits += cr;
        semPoints += pts * cr;
      }
    });
  } else {
    const semIdx = parseInt(appState.activeSemKey.replace("sem-", ""));
    const sem = dept.semesters[semIdx];
    const savedSemGrades = (appState.grades[dept.id] && appState.grades[dept.id][semIdx]) || {};
    const semLabSplits = (appState.labSplits[dept.id] && appState.labSplits[dept.id][semIdx]) || {};

    if (sem) {
      sem.courses.forEach((c, idx) => {
        const isSplit = semLabSplits[idx] || (appState.autoSplitAllLabs && c.hasLab && c.credits > 1);
        if (isSplit && c.credits > 1) {
          const thGrade = savedSemGrades[`${idx}_th`];
          const labGrade = savedSemGrades[`${idx}_lab`];

          if (thGrade && UET_GRADE_SCALE[thGrade]) {
            const thCr = c.credits - 1;
            semCredits += thCr;
            semPoints += UET_GRADE_SCALE[thGrade].points * thCr;
          }
          if (labGrade && UET_GRADE_SCALE[labGrade]) {
            semCredits += 1;
            semPoints += UET_GRADE_SCALE[labGrade].points * 1;
          }
        } else {
          const grade = savedSemGrades[idx];
          if (grade && UET_GRADE_SCALE[grade]) {
            const pts = UET_GRADE_SCALE[grade].points;
            semCredits += c.credits;
            semPoints += pts * c.credits;
          }
        }
      });
    }
  }

  const semGPA = semCredits > 0 ? (semPoints / semCredits) : 0;

  document.getElementById("semGpaVal").textContent = semGPA.toFixed(2);
  document.getElementById("semCreditsVal").textContent = semCredits;
  document.getElementById("semPointsVal").textContent = semPoints.toFixed(2);
}

// ── Global CGPA Engine with Grade Replacement (R) Logic ──────────
function computeGlobalStats() {
  const dept = getActiveDept();
  const deptGrades = appState.grades[dept.id] || {};
  const deptSummer = appState.summerCourses[dept.id] || {};
  const deptLabSplits = appState.labSplits[dept.id] || {};

  const effectiveCourses = {};

  // 1. Process regular semester grades
  dept.semesters.forEach((sem, semIdx) => {
    const semGrades = deptGrades[semIdx] || {};
    const semLabSplits = deptLabSplits[semIdx] || {};

    sem.courses.forEach((course, courseIdx) => {
      const isSplit = semLabSplits[courseIdx] || (appState.autoSplitAllLabs && course.hasLab && course.credits > 1);

      if (isSplit && course.credits > 1) {
        const thGrade = semGrades[`${courseIdx}_th`];
        const labGrade = semGrades[`${courseIdx}_lab`];

        if (thGrade && UET_GRADE_SCALE[thGrade]) {
          const thCr = course.credits - 1;
          effectiveCourses[`${semIdx}_${courseIdx}_th`] = {
            name: `${course.name} (Theory)`,
            credits: thCr,
            grade: thGrade,
            points: UET_GRADE_SCALE[thGrade].points * thCr
          };
        }
        if (labGrade && UET_GRADE_SCALE[labGrade]) {
          effectiveCourses[`${semIdx}_${courseIdx}_lab`] = {
            name: `${course.name} (Lab)`,
            credits: 1,
            grade: labGrade,
            points: UET_GRADE_SCALE[labGrade].points * 1
          };
        }
      } else {
        const g = semGrades[courseIdx];
        if (g && UET_GRADE_SCALE[g]) {
          effectiveCourses[`${semIdx}_${courseIdx}`] = {
            name: course.name,
            credits: course.credits,
            grade: g,
            points: UET_GRADE_SCALE[g].points * course.credits
          };
        }
      }
    });
  });

  // 2. Process summer semester courses (Apply Grade Replacement if retaken)
  let summerCreditsAdded = 0;
  let summerPointsAdded = 0;

  Object.values(deptSummer).forEach(summerList => {
    summerList.forEach(sc => {
      if (sc.grade && UET_GRADE_SCALE[sc.grade]) {
        const scCredits = parseFloat(sc.credits) || 0;
        const scPts = UET_GRADE_SCALE[sc.grade].points * scCredits;

        if (sc.replacesSemIdx !== null && sc.replacesCourseIdx !== null) {
          const targetKey = `${sc.replacesSemIdx}_${sc.replacesCourseIdx}`;
          if (effectiveCourses[targetKey]) {
            // Replace previous grade points with summer improved grade points!
            effectiveCourses[targetKey].grade = sc.grade;
            effectiveCourses[targetKey].points = scPts;
          } else {
            // Target wasn't graded yet, add as active course
            effectiveCourses[targetKey] = {
              name: sc.name,
              credits: scCredits,
              grade: sc.grade,
              points: scPts
            };
          }
        } else {
          // New custom summer course
          summerCreditsAdded += scCredits;
          summerPointsAdded += scPts;
        }
      }
    });
  });

  let totalCredits = summerCreditsAdded;
  let totalPoints = summerPointsAdded;

  Object.values(effectiveCourses).forEach(ec => {
    totalCredits += ec.credits;
    totalPoints += ec.points;
  });

  const cgpa = totalCredits > 0 ? (totalPoints / totalCredits) : 0;
  return { totalCredits, totalPoints, cgpa };
}

function updateGlobalMetrics() {
  const dept = getActiveDept();
  const stats = computeGlobalStats();

  const totalDegreeCredits = dept.semesters.reduce((semAcc, sem) => {
    return semAcc + sem.courses.reduce((cAcc, c) => cAcc + c.credits, 0);
  }, 0);

  // Update DOM Summary Card
  document.getElementById("globalCgpaVal").textContent = stats.cgpa.toFixed(2);
  document.getElementById("globalCompletedCredits").textContent = `${stats.totalCredits} / ${totalDegreeCredits}`;
  document.getElementById("globalQualityPoints").textContent = stats.totalPoints.toFixed(2);

  // Count graded semesters
  const deptGrades = appState.grades[dept.id] || {};
  const gradedSemestersCount = Object.keys(deptGrades).filter(k => Object.keys(deptGrades[k]).length > 0).length;
  document.getElementById("globalCompletedSemesters").textContent = `${gradedSemestersCount} / ${dept.semesters.length}`;

  // Update Progress Bar
  const percent = Math.min(100, Math.max(0, (stats.cgpa / 4.00) * 100));
  document.getElementById("globalCgpaBar").style.width = `${percent}%`;

  // Update Honor Badge
  const badgeText = document.getElementById("honorBadgeText");
  if (stats.totalCredits === 0) {
    badgeText.textContent = "Select course grades to calculate CGPA";
  } else if (stats.cgpa >= 3.70) {
    badgeText.textContent = "🏆 High Distinction / Gold Medalist";
  } else if (stats.cgpa >= 3.50) {
    badgeText.textContent = "🌟 Distinction / Honors Standing";
  } else if (stats.cgpa >= 3.00) {
    badgeText.textContent = "⭐ Good Academic Standing";
  } else if (stats.cgpa >= 2.00) {
    badgeText.textContent = "👍 Satisfactory Standing";
  } else {
    badgeText.textContent = "⚠️ Academic Warning (< 2.00)";
  }
}

// ── Full Transcript Renderer ──────────────────────────────────────
function renderTranscript() {
  const dept = getActiveDept();
  const deptGrades = appState.grades[dept.id] || {};
  const deptSummer = appState.summerCourses[dept.id] || {};
  const deptLabSplits = appState.labSplits[dept.id] || {};

  const grid = document.getElementById("transcriptSemestersGrid");
  grid.innerHTML = "";

  // Regular Semesters
  dept.semesters.forEach((sem, semIdx) => {
    const semGrades = deptGrades[semIdx] || {};
    const semLabSplits = deptLabSplits[semIdx] || {};
    let semCredits = 0;
    let semPoints = 0;
    let courseDetails = [];

    sem.courses.forEach((c, cIdx) => {
      const isSplit = semLabSplits[cIdx] || (appState.autoSplitAllLabs && c.hasLab && c.credits > 1);

      if (isSplit && c.credits > 1) {
        const thG = semGrades[`${cIdx}_th`];
        const labG = semGrades[`${cIdx}_lab`];

        if (thG && UET_GRADE_SCALE[thG]) {
          const thCr = c.credits - 1;
          semCredits += thCr;
          semPoints += UET_GRADE_SCALE[thG].points * thCr;
          courseDetails.push(`${c.name} (Theory): <strong>${thG}</strong>`);
        }
        if (labG && UET_GRADE_SCALE[labG]) {
          semCredits += 1;
          semPoints += UET_GRADE_SCALE[labG].points * 1;
          courseDetails.push(`${c.name} (Lab): <strong>${labG}</strong>`);
        }
      } else {
        const g = semGrades[cIdx];
        if (g && UET_GRADE_SCALE[g]) {
          const pts = UET_GRADE_SCALE[g].points;
          semCredits += c.credits;
          semPoints += pts * c.credits;
          courseDetails.push(`${c.name}: <strong>${g}</strong>`);
        }
      }
    });

    const semGpa = semCredits > 0 ? (semPoints / semCredits) : 0;

    const card = document.createElement("div");
    card.className = "tr-sem-card";
    card.innerHTML = `
      <div class="tr-sem-header">
        <span>Semester ${sem.sem}</span>
        <span class="tr-sem-gpa">${semCredits > 0 ? semGpa.toFixed(2) : "N/A"}</span>
      </div>
      <div class="tr-sem-meta">
        <span>Credits: ${semCredits} / ${sem.courses.reduce((acc, curr) => acc + curr.credits, 0)}</span>
        <span>Points: ${semPoints.toFixed(2)}</span>
      </div>
      <div class="tr-sem-courses-list">
        ${courseDetails.length > 0 ? courseDetails.join(" · ") : "<em>No grades recorded yet</em>"}
      </div>
    `;
    grid.appendChild(card);
  });

  // Summer Semesters
  Object.entries(deptSummer).forEach(([summerKey, summerList]) => {
    if (summerList.length === 0) return;
    const summerNum = summerKey.replace("summer-", "");

    let sCredits = 0;
    let sPoints = 0;
    let courseDetails = [];

    summerList.forEach(sc => {
      if (sc.grade && UET_GRADE_SCALE[sc.grade]) {
        const cr = parseFloat(sc.credits) || 0;
        const pts = UET_GRADE_SCALE[sc.grade].points;
        sCredits += cr;
        sPoints += pts * cr;
        
        const repText = sc.replacesSemIdx !== null ? " (Retake R)" : "";
        courseDetails.push(`${sc.name}${repText}: <strong>${sc.grade}</strong>`);
      }
    });

    const sGpa = sCredits > 0 ? (sPoints / sCredits) : 0;

    const summerCard = document.createElement("div");
    summerCard.className = "tr-sem-card summer-tr-card";
    summerCard.innerHTML = `
      <div class="tr-sem-header">
        <span>Summer ${summerNum}</span>
        <span class="tr-sem-gpa" style="color:#facc15;">${sCredits > 0 ? sGpa.toFixed(2) : "N/A"}</span>
      </div>
      <div class="tr-sem-meta">
        <span>Credits: ${sCredits} CH</span>
        <span>Points: ${sPoints.toFixed(2)}</span>
      </div>
      <div class="tr-sem-courses-list">
        ${courseDetails.length > 0 ? courseDetails.join(" · ") : "<em>No grades recorded</em>"}
      </div>
    `;
    grid.appendChild(summerCard);
  });

  const stats = computeGlobalStats();
  document.getElementById("trTotalCredits").textContent = stats.totalCredits;
  document.getElementById("trTotalPoints").textContent = stats.totalPoints.toFixed(2);
  document.getElementById("trFinalCgpa").textContent = `${stats.cgpa.toFixed(2)} / 4.00`;
}

// ── Interactive Print Modal Engine ─────────────────────────────────
function openPrintModal() {
  syncStudentProfileInputs();
  document.getElementById("printModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePrintModal() {
  document.getElementById("printModal").classList.remove("active");
  document.body.style.overflow = "";
}

function confirmAndPrintTranscript() {
  const mName = document.getElementById("modalStudentName").value.trim();
  const mFname = document.getElementById("modalFatherName").value.trim();
  const mReg = document.getElementById("modalRegNo").value.trim();

  appState.studentName = mName || "";
  appState.fatherName = mFname || "";
  appState.studentRegNo = mReg || "";

  syncStudentProfileInputs();
  saveStateToStorage();

  const container = document.getElementById("officialUetTranscriptPrintContainer");
  const html = generateOfficialUetTranscriptHTML();

  if (!html) {
    toast("Please enter grades for at least 1 course before printing your transcript.");
    closePrintModal();
    return;
  }

  container.innerHTML = html;
  closePrintModal();
  window.print();
}

// ── OFFICIAL UET TRANSCRIPT GENERATOR (SSR_TSRPT.pdf - GRADED COURSES ONLY) ──
function generateOfficialUetTranscriptHTML() {
  const dept = getActiveDept();
  const deptGrades = appState.grades[dept.id] || {};
  const deptSummer = appState.summerCourses[dept.id] || {};
  const deptLabSplits = appState.labSplits[dept.id] || {};

  const studentName = appState.studentName || "";
  const fatherName = appState.fatherName || "";
  const regNo = appState.studentRegNo || "";

  const semNames = ["Fall 25", "Spring 26", "Fall 26", "Spring 27", "Fall 27", "Spring 28", "Fall 28", "Spring 29", "Fall 29", "Spring 30"];
  const summerNames = ["Summer 26", "Summer 27", "Summer 28", "Summer 29"];

  let runningCumulativeCredits = 0;
  let runningCumulativePoints = 0;

  // Find max active/graded semester index
  let maxSemIdx = -1;
  dept.semesters.forEach((sem, semIdx) => {
    const semGrades = deptGrades[semIdx] || {};
    if (Object.keys(semGrades).some(k => semGrades[k])) {
      maxSemIdx = Math.max(maxSemIdx, semIdx);
    }
    const summerNum = Math.ceil((semIdx + 1) / 2);
    const summerKey = `summer-${summerNum}`;
    const summerList = deptSummer[summerKey] || [];
    if (summerList.length > 0) {
      maxSemIdx = Math.max(maxSemIdx, semIdx);
    }
  });

  // Default to at least semester 1 & 2 if no higher semester is active
  if (maxSemIdx < 1) maxSemIdx = 1;

  const codePrefix = dept.code || "SE";

  let leftBlocksHTML = "";
  let rightBlocksHTML = "";

  dept.semesters.forEach((sem, semIdx) => {
    if (semIdx > maxSemIdx && semIdx > 1) return;

    const semGrades = deptGrades[semIdx] || {};
    const semLabSplits = deptLabSplits[semIdx] || {};

    let semSch = 0;
    let semSgp = 0;
    let courseRowsHTML = "";

    sem.courses.forEach((c, cIdx) => {
      const isSplit = semLabSplits[cIdx] || (appState.autoSplitAllLabs && c.hasLab && c.credits > 1);

      // Determine course code (e.g. SE 101, BSI 101, etc.)
      let baseCode = c.code || "";
      if (!baseCode) {
        const cNameLower = c.name.toLowerCase();
        if (cNameLower.includes("islamic")) baseCode = "BSI 101";
        else if (cNameLower.includes("pakistan") || cNameLower.includes("pak studies")) baseCode = "BSI 110";
        else if (cNameLower.includes("english")) baseCode = "BSI 133";
        else if (cNameLower.includes("calculus")) baseCode = "BSI 173";
        else if (cNameLower.includes("linear algebra")) baseCode = "BSI 111";
        else if (cNameLower.includes("physics")) baseCode = "BSI 123";
        else if (cNameLower.includes("communication")) baseCode = "BSI 143";
        else baseCode = `${codePrefix} 10${cIdx + 1}`;
      }

      if (isSplit && c.credits > 1) {
        const thG = semGrades[`${cIdx}_th`] || "";
        const labG = semGrades[`${cIdx}_lab`] || "";

        const thCr = c.credits - 1;
        const labCr = 1;

        if (thG && UET_GRADE_SCALE[thG]) {
          const pts = UET_GRADE_SCALE[thG].points * thCr;
          semSch += thCr;
          semSgp += pts;
        }
        courseRowsHTML += `
          <tr>
            <td class="uet-pdf-col-code">${baseCode}</td>
            <td class="uet-pdf-col-title">${c.name}</td>
            <td class="uet-pdf-col-ch">${thCr.toFixed(2)}</td>
            <td class="uet-pdf-col-grade">${thG}</td>
          </tr>
        `;

        if (labG && UET_GRADE_SCALE[labG]) {
          const pts = UET_GRADE_SCALE[labG].points * labCr;
          semSch += labCr;
          semSgp += pts;
        }
        courseRowsHTML += `
          <tr>
            <td class="uet-pdf-col-code">${baseCode}L</td>
            <td class="uet-pdf-col-title">${c.name}</td>
            <td class="uet-pdf-col-ch">${labCr.toFixed(2)}</td>
            <td class="uet-pdf-col-grade">${labG}</td>
          </tr>
        `;
      } else {
        const g = semGrades[cIdx] || "";
        if (g && UET_GRADE_SCALE[g]) {
          const pts = UET_GRADE_SCALE[g].points * c.credits;
          semSch += c.credits;
          semSgp += pts;
        }
        const codeStr = c.isLabOnly ? `${baseCode}L` : baseCode;
        courseRowsHTML += `
          <tr>
            <td class="uet-pdf-col-code">${codeStr}</td>
            <td class="uet-pdf-col-title">${c.name}</td>
            <td class="uet-pdf-col-ch">${c.credits.toFixed(2)}</td>
            <td class="uet-pdf-col-grade">${g}</td>
          </tr>
        `;
      }
    });

    const semSgpa = semSch > 0 ? (semSgp / semSch) : 0;
    runningCumulativeCredits += semSch;
    runningCumulativePoints += semSgp;
    const runningCgpa = runningCumulativeCredits > 0 ? (runningCumulativePoints / runningCumulativeCredits) : 0;

    const termTitle = semNames[semIdx] || `Semester ${sem.sem}`;

    const blockHTML = `
      <div class="uet-pdf-sem-block">
        <div class="uet-pdf-sem-header">${termTitle}</div>
        <table class="uet-pdf-table">
          <thead>
            <tr>
              <th class="uet-pdf-col-code">Code</th>
              <th class="uet-pdf-col-title">Title</th>
              <th class="uet-pdf-col-ch">CH</th>
              <th class="uet-pdf-col-grade">Grade</th>
            </tr>
          </thead>
          <tbody>
            ${courseRowsHTML}
          </tbody>
        </table>
        <div class="uet-pdf-summary-box">
          <div class="uet-pdf-sum-line">
            <span>SCH: <strong>${semSch.toFixed(2)}</strong></span>
            <span>SGP: <strong>${semSgp.toFixed(2)}</strong></span>
            <span>SGPA: <strong>${semSgpa.toFixed(2)}</strong></span>
          </div>
          <div class="uet-pdf-sum-line">
            <span>CCH: <strong>${runningCumulativeCredits.toFixed(2)}</strong></span>
            <span>CGP: <strong>${runningCumulativePoints.toFixed(2)}</strong></span>
            <span>CGPA: <strong>${runningCgpa.toFixed(2)}</strong></span>
          </div>
        </div>
      </div>
    `;

    if (semIdx % 2 === 0) {
      leftBlocksHTML += blockHTML;
    } else {
      rightBlocksHTML += blockHTML;
    }

    // Check Summer term after even semester
    const summerNum = Math.ceil((semIdx + 1) / 2);
    if ((semIdx + 1) % 2 === 0) {
      const summerKey = `summer-${summerNum}`;
      const summerList = deptSummer[summerKey] || [];

      if (summerList.length > 0) {
        let sumSch = 0;
        let sumSgp = 0;
        let summerRowsHTML = "";

        summerList.forEach(sc => {
          const cr = parseFloat(sc.credits) || 0;
          const g = sc.grade || "";
          if (g && UET_GRADE_SCALE[g]) {
            const pts = UET_GRADE_SCALE[g].points * cr;
            sumSch += cr;
            sumSgp += pts;
          }
          let scCode = "BSI 173";
          const scNameLower = sc.name.toLowerCase();
          if (!scNameLower.includes("calculus")) {
            scCode = `${codePrefix} R`;
          }
          summerRowsHTML += `
            <tr>
              <td class="uet-pdf-col-code">${scCode}</td>
              <td class="uet-pdf-col-title">${sc.name}</td>
              <td class="uet-pdf-col-ch">${cr.toFixed(2)}</td>
              <td class="uet-pdf-col-grade">${g}</td>
            </tr>
          `;
        });

        const sumSgpa = sumSch > 0 ? (sumSgp / sumSch) : 0;
        runningCumulativeCredits += sumSch;
        runningCumulativePoints += sumSgp;
        const sumCgpa = runningCumulativeCredits > 0 ? (runningCumulativePoints / runningCumulativeCredits) : 0;

        const summerBlockHTML = `
          <div class="uet-pdf-sem-block">
            <div class="uet-pdf-sem-header">${summerNames[summerNum - 1] || `Summer ${summerNum}`}</div>
            <table class="uet-pdf-table">
              <thead>
                <tr>
                  <th class="uet-pdf-col-code">Code</th>
                  <th class="uet-pdf-col-title">Title</th>
                  <th class="uet-pdf-col-ch">CH</th>
                  <th class="uet-pdf-col-grade">Grade</th>
                </tr>
              </thead>
              <tbody>
                ${summerRowsHTML}
              </tbody>
            </table>
            <div class="uet-pdf-summary-box">
              <div class="uet-pdf-sum-line">
                <span>SCH: <strong>${sumSch.toFixed(2)}</strong></span>
                <span>SGP: <strong>${sumSgp.toFixed(2)}</strong></span>
                <span>SGPA: <strong>${sumSgpa.toFixed(2)}</strong></span>
              </div>
              <div class="uet-pdf-sum-line">
                <span>CCH: <strong>${runningCumulativeCredits.toFixed(2)}</strong></span>
                <span>CGP: <strong>${runningCumulativePoints.toFixed(2)}</strong></span>
                <span>CGPA: <strong>${sumCgpa.toFixed(2)}</strong></span>
              </div>
            </div>
          </div>
        `;

        rightBlocksHTML += summerBlockHTML;
      }
    }
  });

  return `
    <div class="uet-pdf-header">
      <div class="uet-pdf-univ-name">University of Engineering & Technology</div>
      <div class="uet-pdf-univ-sub">Peshawar, Pakistan</div>
      <div class="uet-pdf-reg-no">Registration No: <strong>${regNo}</strong></div>
    </div>

    <div class="uet-pdf-title-banner">TRANSCRIPT</div>

    <div class="uet-pdf-student-info">
      <div class="uet-pdf-info-row">
        <div class="uet-pdf-info-cell"><strong>Student's Name:</strong> ${studentName}</div>
        <div class="uet-pdf-info-cell"><strong>Father's Name:</strong> ${fatherName}</div>
      </div>
      <div class="uet-pdf-info-row">
        <div class="uet-pdf-info-cell"><strong>Program:</strong> ${dept.name}</div>
        <div class="uet-pdf-info-cell"></div>
      </div>
      <div class="uet-pdf-info-row">
        <div class="uet-pdf-info-cell"><strong>Plan:</strong> ${dept.name} Major</div>
        <div class="uet-pdf-info-cell"></div>
      </div>
    </div>

    <div class="uet-pdf-semesters-container">
      <div class="uet-pdf-column">${leftBlocksHTML}</div>
      <div class="uet-pdf-column">${rightBlocksHTML}</div>
    </div>
  `;
}

// ── Target CGPA Simulator ─────────────────────────────────────────
function calculateTargetRequired() {
  const currentCgpa = parseFloat(document.getElementById("targetCurrentCgpa").value);
  const completedCredits = parseFloat(document.getElementById("targetCompletedCredits").value);
  const desiredCgpa = parseFloat(document.getElementById("targetDesiredCgpa").value);
  const remainingCredits = parseFloat(document.getElementById("targetRemainingCredits").value);

  if (isNaN(currentCgpa) || isNaN(completedCredits) || isNaN(desiredCgpa) || isNaN(remainingCredits) || remainingCredits <= 0) {
    toast("Please enter valid positive numbers for all simulator fields.");
    return;
  }

  const currentPoints = currentCgpa * completedCredits;
  const totalFutureCredits = completedCredits + remainingCredits;
  const targetRequiredPoints = desiredCgpa * totalFutureCredits;
  const pointsNeeded = targetRequiredPoints - currentPoints;
  const requiredRemainingGpa = pointsNeeded / remainingCredits;

  const resultBox = document.getElementById("targetResultBox");
  const valElem = document.getElementById("targetRequiredGpa");
  const descElem = document.getElementById("targetResultDesc");

  resultBox.style.display = "block";
  valElem.textContent = requiredRemainingGpa.toFixed(2);

  if (requiredRemainingGpa <= 0) {
    descElem.textContent = `You have already achieved or surpassed your target CGPA of ${desiredCgpa.toFixed(2)}! Even with 0.00 GPA in remaining courses, your CGPA will remain above target.`;
  } else if (requiredRemainingGpa <= 4.00) {
    descElem.textContent = `To achieve a final CGPA of ${desiredCgpa.toFixed(2)}, you must maintain an average GPA of ${requiredRemainingGpa.toFixed(2)} across your remaining ${remainingCredits} credit hours.`;
  } else {
    descElem.textContent = `Mathematically Impossible (> 4.00). To reach a ${desiredCgpa.toFixed(2)} CGPA from ${currentCgpa.toFixed(2)}, you would need an average GPA of ${requiredRemainingGpa.toFixed(2)}, which exceeds the maximum UET 4.00 limit.`;
  }
}

// ── Custom Subjects Engine ────────────────────────────────────────
function renderCustomCourses() {
  const container = document.getElementById("customSubjectsContainer");
  container.innerHTML = "";

  appState.customCourses.forEach((c, idx) => {
    const row = document.createElement("div");
    row.className = "custom-row";
    row.innerHTML = `
      <div>
        <input type="text" value="${c.name}" placeholder="Subject Name" oninput="updateCustomCourse(${idx}, 'name', this.value)">
      </div>
      <div>
        <input type="number" step="0.5" min="1" max="6" value="${c.credits}" placeholder="Credits" oninput="updateCustomCourse(${idx}, 'credits', this.value)">
      </div>
      <div>
        <select class="grade-select" onchange="updateCustomCourse(${idx}, 'grade', this.value)">
          ${Object.keys(UET_GRADE_SCALE).map(g => `<option value="${g}" ${g === c.grade ? "selected" : ""}>${g} (${UET_GRADE_SCALE[g].points.toFixed(2)})</option>`).join("")}
        </select>
      </div>
      <div>
        <button class="del-btn" onclick="removeCustomCourse(${idx})" title="Remove">&times;</button>
      </div>
    `;
    container.appendChild(row);
  });

  calculateCustomGpa();
}

function addCustomCourseRow() {
  appState.customCourses.push({
    name: `Subject ${appState.customCourses.length + 1}`,
    credits: 3,
    grade: "A"
  });
  renderCustomCourses();
}

function removeCustomCourse(idx) {
  appState.customCourses.splice(idx, 1);
  renderCustomCourses();
}

function updateCustomCourse(idx, field, val) {
  if (field === "credits") val = parseFloat(val) || 0;
  appState.customCourses[idx][field] = val;
  calculateCustomGpa();
}

function clearCustomCourses() {
  appState.customCourses = [];
  renderCustomCourses();
}

function calculateCustomGpa() {
  let semCredits = 0;
  let semPoints = 0;

  appState.customCourses.forEach(c => {
    const cr = parseFloat(c.credits) || 0;
    const pts = UET_GRADE_SCALE[c.grade]?.points || 0;
    semCredits += cr;
    semPoints += pts * cr;
  });

  const semGpa = semCredits > 0 ? (semPoints / semCredits) : 0;

  document.getElementById("customSemGpa").textContent = semGpa.toFixed(2);
  document.getElementById("customSemCredits").textContent = semCredits;

  const prevCgpa = parseFloat(document.getElementById("customPrevCgpa").value);
  const prevCredits = parseFloat(document.getElementById("customPrevCredits").value);

  let updatedCgpa = semGpa;
  if (!isNaN(prevCgpa) && !isNaN(prevCredits) && prevCredits > 0) {
    const prevPoints = prevCgpa * prevCredits;
    updatedCgpa = (prevPoints + semPoints) / (prevCredits + semCredits);
  }

  document.getElementById("customFinalCgpa").textContent = updatedCgpa.toFixed(2);
}

// ── Department Modal UI ───────────────────────────────────────────
function openDeptModal() {
  document.getElementById("deptModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeDeptModal() {
  document.getElementById("deptModal").classList.remove("active");
  document.body.style.overflow = "";
}

function renderDeptModalGrid() {
  const grid = document.getElementById("deptModalGrid");
  grid.innerHTML = "";

  UET_DEPARTMENTS.forEach(dept => {
    const card = document.createElement("div");
    card.className = `dept-option-card ${dept.id === appState.selectedDeptId ? "active" : ""}`;
    card.onclick = () => {
      setActiveDepartment(dept.id, true);
      closeDeptModal();
    };

    card.innerHTML = `
      <span class="dept-code-badge">${dept.code}</span>
      <div>
        <div class="dept-opt-name">${dept.name}</div>
        <div class="dept-opt-code">${dept.code} · ${dept.semesters.length} Semesters</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ── Tab Switching ────────────────────────────────────────────────
function switchMainTab(tabName) {
  document.querySelectorAll(".tab-item").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

  const targetTab = document.getElementById(`tab-${tabName}`);
  if (targetTab) {
    targetTab.classList.add("active");
    if (tabName === "transcript") {
      renderTranscript();
    }
  }

  const activeBtn = Array.from(document.querySelectorAll(".tab-item")).find(btn => 
    btn.getAttribute("onclick")?.includes(tabName)
  );
  if (activeBtn) activeBtn.classList.add("active");

  const tabNav = document.querySelector(".tab-navigation");
  if (tabNav) {
    tabNav.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ── Grade Scale Reference Table ─────────────────────────────────
function renderGradeScaleTable() {
  const tbody = document.getElementById("gradeScaleTableBody");
  tbody.innerHTML = "";

  Object.entries(UET_GRADE_SCALE).forEach(([grade, data]) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><span class="grade-pill" style="background: ${data.color}20; color: ${data.color}; border: 1px solid ${data.color}40">${grade}</span></td>
      <td><strong>${data.points.toFixed(2)}</strong></td>
      <td>${data.desc}</td>
    `;
    tbody.appendChild(tr);
  });
}

// ── Data Backup Export / Import ──────────────────────────────────
function exportDataJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
  const dlAnchor = document.createElement('a');
  dlAnchor.setAttribute("href", dataStr);
  dlAnchor.setAttribute("download", `uet_gpa_backup_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(dlAnchor);
  dlAnchor.click();
  dlAnchor.remove();
  toast("State exported successfully!");
}

function triggerImportJSON() {
  document.getElementById("importJsonInput").click();
}

function importDataJSON(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const imported = JSON.parse(evt.target.result);
      if (imported && imported.selectedDeptId) {
        appState = imported;
        saveStateToStorage();
        setActiveDepartment(appState.selectedDeptId, true);
        syncStudentProfileInputs();
        toast("Backup data imported successfully!");
      } else {
        toast("Invalid backup JSON format.");
      }
    } catch (err) {
      toast("Error parsing backup JSON file.");
    }
  };
  reader.readAsText(file);
}

// ── Toast System ─────────────────────────────────────────────────
function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.style.opacity = "1";
  clearTimeout(t._timer);
  t._timer = setTimeout(() => {
    t.style.opacity = "0";
  }, 3200);
}