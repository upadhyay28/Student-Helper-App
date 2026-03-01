let assignments = [];
let exams = [];
let notes = [];

function switchTab(tab) {
  const tabs = document.querySelectorAll(".tab-content");
  const btns = document.querySelectorAll(".tab-btn");

  tabs.forEach((t) => t.classList.remove("active"));
  btns.forEach((b) => b.classList.remove("active"));

  document.getElementById(tab).classList.add("active");
  event.target.classList.add("active");
}

function addAssignment() {
  const name = document.getElementById("assignmentName").value;
  const date = document.getElementById("assignmentDate").value;
  const subject = document.getElementById("assignmentSubject").value;

  if (!name || !date || !subject) {
    alert("Please fill all fields!");
    return;
  }

  const assignment = {
    id: Date.now(),
    name: name,
    date: date,
    subject: subject,
  };

  assignments.push(assignment);
  displayAssignments();

  document.getElementById("assignmentName").value = "";
  document.getElementById("assignmentDate").value = "";
  document.getElementById("assignmentSubject").value = "";
}

function displayAssignments() {
  const list = document.getElementById("assignmentsList");

  if (assignments.length === 0) {
    list.innerHTML =
      '<div class="empty-state">No assignments yet. Add one above!</div>';
    return;
  }

  list.innerHTML = assignments
    .map(
      (a) => `
                <div class="item">
                    <h3>${a.name}</h3>
                    <p><strong>Subject:</strong> ${a.subject}</p>
                    <p class="date-info">Due: ${new Date(a.date).toLocaleDateString()}</p>
                    <div class="item-actions">
                        <button class="delete-btn" onclick="deleteAssignment(${a.id})">Delete</button>
                    </div>
                </div>
            `,
    )
    .join("");
}

function deleteAssignment(id) {
  assignments = assignments.filter((a) => a.id !== id);
  displayAssignments();
}

function addExam() {
  const name = document.getElementById("examName").value;
  const date = document.getElementById("examDate").value;
  const subject = document.getElementById("examSubject").value;

  if (!name || !date || !subject) {
    alert("Please fill all fields!");
    return;
  }

  const exam = {
    id: Date.now(),
    name: name,
    date: date,
    subject: subject,
  };

  exams.push(exam);
  displayExams();

  document.getElementById("examName").value = "";
  document.getElementById("examDate").value = "";
  document.getElementById("examSubject").value = "";
}

function displayExams() {
  const list = document.getElementById("examsList");

  if (exams.length === 0) {
    list.innerHTML =
      '<div class="empty-state">No exams scheduled. Add one above!</div>';
    return;
  }

  list.innerHTML = exams
    .map(
      (e) => `
                <div class="item">
                    <h3>${e.name}</h3>
                    <p><strong>Subject:</strong> ${e.subject}</p>
                    <p class="date-info">Date: ${new Date(e.date).toLocaleDateString()}</p>
                    <div class="item-actions">
                        <button class="delete-btn" onclick="deleteExam(${e.id})">Delete</button>
                    </div>
                </div>
            `,
    )
    .join("");
}

function deleteExam(id) {
  exams = exams.filter((e) => e.id !== id);
  displayExams();
}

function addNote() {
  const title = document.getElementById("noteTitle").value;
  const subject = document.getElementById("noteSubject").value;
  const content = document.getElementById("noteContent").value;

  if (!title || !subject || !content) {
    alert("Please fill all fields!");
    return;
  }

  const note = {
    id: Date.now(),
    title: title,
    subject: subject,
    content: content,
  };

  notes.push(note);
  displayNotes();

  document.getElementById("noteTitle").value = "";
  document.getElementById("noteSubject").value = "";
  document.getElementById("noteContent").value = "";
}

function displayNotes() {
  const list = document.getElementById("notesList");

  if (notes.length === 0) {
    list.innerHTML =
      '<div class="empty-state">No notes saved yet. Create one above!</div>';
    return;
  }

  list.innerHTML = notes
    .map(
      (n) => `
                <div class="item">
                    <h3>${n.title}</h3>
                    <p><strong>Subject:</strong> ${n.subject}</p>
                    <p style="margin-top: 10px; white-space: pre-wrap;">${n.content}</p>
                    <div class="item-actions">
                        <button class="delete-btn" onclick="deleteNote(${n.id})">Delete</button>
                    </div>
                </div>
            `,
    )
    .join("");
}

function deleteNote(id) {
  notes = notes.filter((n) => n.id !== id);
  displayNotes();
}

displayAssignments();
displayExams();
displayNotes();
