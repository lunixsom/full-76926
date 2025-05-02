/*
    ACTIVIDAD PRACTICA - CLASE N°13
*/

const studentsGrades = [
    ["Juan", [["Matemáticas", 8], ["Física", 6], ["Química", 9]]],
    ["Ana", [["Matemáticas", 4], ["Física", 5]]],
    ["Carlos", [["Matemáticas", 7], ["Física", 6], ["Química", 5]]],
    ["Lucía", [["Matemáticas", 10], ["Física", 9], ["Química", 8], ["Biología", 7]]]
];

for (let i = 0; i < studentsGrades.length; i++) {
    const student = studentsGrades[i];
    const name = student[0];
    const subjects = student[1];
    let allApproved = true;

    console.log("\nEstudiante:", name);

    for (let j = 0; j < subjects.length; j++) {
        const subject = subjects[j];
        const subjectName = subject[0];
        const grade = subject[1];

        console.log("\tMateria:", subjectName, "Nota:", grade);

        if (grade < 6) {
            allApproved = false;
        }
    }

    if (allApproved === true) {
        console.log("✅ Aprobó todas las materias.");
    } else {
        console.log("⚠️ Tiene materias para recuperar.");
    }
}
