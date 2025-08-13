import StudentList from '../StudentList/StudentList';
import {students} from '../../data/students'
import './Student.scss'

const Student = () => {

    const getPresentStudents = () => {
        const presentStudents = students.filter((student) => student.isPresent);
        return presentStudents.length;
    }

    const getAbsentStudents = () => {
        const absentStudents = students.filter((student) => (! student.isPresent));
        return absentStudents.length;
    }

    return(
        <>
            <div className="student">
                <h1>Lista de Estudiantes</h1>
                <div className="student__stats">
                    <p>Total de Estudiantes: {students.length}</p>
                    <p>Presentes: {getPresentStudents()}</p>
                    <p>Ausentes: {getAbsentStudents()}</p>
                </div>

                <StudentList students={students}/>
            </div>
        </>
    )
}

export default Student