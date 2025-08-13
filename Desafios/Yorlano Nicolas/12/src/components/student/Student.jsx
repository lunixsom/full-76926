import { students } from "../../data/students.js";
import StudentList from "../student-list/StudentList.jsx";
import "./student.scss";

const Student = () => {

    const getPresentsStudents = () => {
        const presentStudents = students.filter((student) => student.isPresent);
        return presentStudents.length;
    };
    
    const getAbsentStudents = () => {
        const absentStudents = students.filter((student) => !student.isPresent);
        return absentStudents.length;
    };

    return (
        <div className="student">
            <h2 className="student__title">Lista de Estudiantes</h2>
            <div>
                <ul className="student__statistics">
                    <li className="student__statistics-content">Total de estudiantes: {students.length}</li>
                    <li className="student__statistics-content">Presentes: {getPresentsStudents()}</li>
                    <li className="student__statistics-content">Ausentes: {getAbsentStudents()}</li>
                </ul>
            </div>

            <StudentList students={students}/>
        </div>
    );
};

export default Student;