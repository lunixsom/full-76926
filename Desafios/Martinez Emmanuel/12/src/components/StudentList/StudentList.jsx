import PropTypes from "prop-types";
import React from "react";
import StudentListItem from "../StudentListItem/StudentListItem";
import "./StudentList.scss";

const StudentList = (props) => {
    const { students } = props;

    return (
        <div className="student-list">
            <div className="student-list__content">
                {students.map((student) => (
                    <StudentListItem
                        key={student.id}
                        student={student}
                    />
                ))}
            </div>
        </div>
    );
};

StudentList.propTypes = {
    students: PropTypes.array.isRequired,
};

StudentList.defaultProps = {
    students: [],
};

export default StudentList;
