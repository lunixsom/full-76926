import { students } from "../../data/students";
import StudentList from "../StudentList/StudentList";
import "./Student.scss";

const Student = () =>{
    const getPresentStudents = () => {
        const presentStudents = students.filter((student) =>student.isPresent);
        return presentStudents.length;
    };
    const getAbsentStudents = () => {
        const absentStudents = students.filter((student) => !student.isPresent);
        return absentStudents.length;
    };
    return(
        <div className="student">
            <h2 className="student__title">Lista de Estudiantes</h2>
            <div className="student__totals">
                <p>Total de Estudiantes: {students.length}</p>
                <p>Presentes: {getPresentStudents()}</p>
                <p>Ausentes: {getAbsentStudents()}</p>
            </div>
            <StudentList students={students}/>

        </div>
    );
};
export default Student;

