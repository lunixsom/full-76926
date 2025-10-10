import PropTypes from "prop-types";
import StudentListItem from "../student-list-item/StudentListItem";
import "./student-list.scss";

const StudentList = (props) => {
	const { students } = props;

	return (

		<div className="student-list">
    		{students.map ((student, index) => (
          		<StudentListItem
           			key={index}
					name={student.name}
					age={student.age}
					email={student.email}
					phone={student.phone}
					instagram={student.instagram}
					isPresent={student.isPresent}	
          		/>
      		))}
    	</div>    
  	)
}

StudentList.propTypes = {
	students: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string.isRequired,
				age: PropTypes.number.isRequired,
				email: PropTypes.string.isRequired,
				phone: PropTypes.string.isRequired,
				instagram: PropTypes.string,
				isPresent: PropTypes.bool.isRequired,
			}),
		).isRequired,
}

export default StudentList