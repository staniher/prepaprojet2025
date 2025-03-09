let students = [];

fetch('/api/students')
    .then(response => response.json())
    .then(data => {
        students = data;
        console.log("Données des étudiants chargées :", students);
    })
    .catch(error => console.error('Erreur lors du chargement des données:', error));

function searchStudent() {
    let searchValue = document.getElementById("searchInput").value.toLowerCase().trim();

    let studentInfoDiv = document.getElementById("studentInfo");

    if (searchValue === "") {
        studentInfoDiv.classList.add("hidden");
        return;
    }

    let student = students.find(s =>
        s.nom.toLowerCase().includes(searchValue) || 
        s.postnom.toLowerCase().includes(searchValue)
    );

    if (student) {
        document.getElementById("studentPhoto").src = `/static/images/${student.photo}` || "/static/images/default.png";
        document.getElementById("studentName").textContent = `${student.nom} ${student.postnom}`;
        document.getElementById("studentDetails").innerHTML = `
            <p><strong>Matricule :</strong> ${student.matricule}</p>
            <p><strong>Email :</strong> ${student.email}</p>
            <p><strong>Téléphone :</strong> ${student.telephone}</p>
        `;
        studentInfoDiv.classList.remove("hidden");
    } else {
        studentInfoDiv.classList.add("hidden");
        alert("Étudiant non trouvé");
    }
}

document.getElementById("searchInput").addEventListener("input", searchStudent);
