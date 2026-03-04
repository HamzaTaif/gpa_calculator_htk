
const gradePoints = {
  "A":  4.00, "A-": 3.67,
  "B+": 3.33, "B":  3.00, "B-": 2.67,
  "C+": 2.33, "C":  2.00, "C-": 1.67,
  "D+": 1.33, "D":  1.00, "F":  0.00
};

const gradeDesc = {
  "A":  "Excellent",     "A-": "Excellent",
  "B+": "Very Good",     "B":  "Good",        "B-": "Good",
  "C+": "Average",       "C":  "Average",     "C-": "Below Average",
  "D+": "Pass",          "D":  "Minimum Pass","F":  "Fail"
};

// ── Build Grade Table ──────────────────────────────────────────
const tbody = document.getElementById("gradeTableBody");
Object.entries(gradePoints).forEach(([grade, pts]) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td><strong style="color:var(--text)">${grade}</strong></td>
    <td><span class="gp-pill">${pts.toFixed(2)}</span></td>
    <td>${gradeDesc[grade]}</td>`;
  tbody.appendChild(tr);
});

// ── Tab Switcher ───────────────────────────────────────────────
function switchTab(name) {
  const tabs  = ["calculator", "cgpa", "grades"];
  const btns  = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".tab-panel");

  panels.forEach(p => p.classList.remove("active"));
  btns.forEach(b => b.classList.remove("active"));

  document.getElementById("tab-" + name).classList.add("active");
  btns[tabs.indexOf(name)].classList.add("active");
}

// ── Generate Subject Fields ────────────────────────────────────
function generateFields() {
  const num = parseInt(document.getElementById("numSubjects").value);
  if (!num || num < 1 || num > 20) {
    toast("Enter a number between 1 and 20.");
    return;
  }

  const container = document.getElementById("subjectsContainer");
  container.innerHTML = "";

  for (let i = 1; i <= num; i++) {
    const div = document.createElement("div");
    div.className = "row-grid";
    div.style.animationDelay = `${(i - 1) * 0.035}s`;
    div.innerHTML = `
      <div class="row-num">${i}</div>
      <div>
        <label class="field-label">Grade</label>
        <select id="grade${i}">
          ${Object.keys(gradePoints).map(g => `<option value="${g}">${g}</option>`).join("")}
        </select>
      </div>
      <div>
        <label class="field-label">Credit Hours</label>
        <input type="number" step="0.5" min="1" max="6" id="credit${i}" placeholder="e.g. 3">
      </div>`;
    container.appendChild(div);
  }

  // Reset results when regenerating
  document.getElementById("resultSection").style.display = "none";
  document.getElementById("barFill").style.width = "0%";
}

// ── Calculate GPA / CGPA ───────────────────────────────────────
function calculateGPA() {
  const num = parseInt(document.getElementById("numSubjects").value);
  if (!num || num < 1) {
    toast("Generate subjects first.");
    return;
  }

  let totalPoints  = 0;
  let totalCredits = 0;

  for (let i = 1; i <= num; i++) {
    const grade  = document.getElementById(`grade${i}`)?.value;
    const credit = parseFloat(document.getElementById(`credit${i}`)?.value);

    if (!credit || isNaN(credit)) {
      toast(`Enter credit hours for Subject ${i}.`);
      return;
    }

    totalPoints  += gradePoints[grade] * credit;
    totalCredits += credit;
  }

  const semGPA = totalPoints / totalCredits;

  // CGPA (optional previous data from CGPA tab)
  const prevGPA  = parseFloat(document.getElementById("prevGPA").value);
  const prevCred = parseFloat(document.getElementById("prevCredits").value);
  let cgpa = semGPA;

  if (!isNaN(prevGPA) && !isNaN(prevCred) && prevCred > 0) {
    cgpa = ((prevGPA * prevCred) + totalPoints) / (prevCred + totalCredits);
  }

  // Update DOM
  document.getElementById("res-gpa").textContent  = semGPA.toFixed(2);
  document.getElementById("res-cred").textContent = totalCredits;
  document.getElementById("res-cgpa").textContent = cgpa.toFixed(2);
  document.getElementById("bar-label").textContent = `CGPA ${cgpa.toFixed(2)} / 4.00`;

  const resultSection = document.getElementById("resultSection");
  resultSection.style.display = "block";

  // Animate bar after paint
  setTimeout(() => {
    document.getElementById("barFill").style.width = `${(cgpa / 4) * 100}%`;
  }, 80);
}

// ── Toast Notification ─────────────────────────────────────────
function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent  = msg;
  t.style.opacity = "1";
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.opacity = "0"; }, 3000);
}