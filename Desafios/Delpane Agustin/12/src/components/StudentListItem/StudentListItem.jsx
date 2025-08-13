import PropTypes from "prop-types";
import React from "react";
import "./StudentListItem.scss";

const StudentListItem = (props) => {
    const { name, age, email, phone, instagram, isPresent } = props.student;

    return (
        <div className={`student-item ${isPresent ? "student-item--present" : "student-item--absent"}`}>
            <h3 className="student-item__name">{name}</h3>
            <p className="student-item__age">&#127874;Edad: {age} años</p>
            <p className="student-item__email">&#128231;{email}</p>
            <p className="student-item__phone">&#128222;{phone}</p>
            {instagram && <p className="student-item__instagram">&#128248;{instagram}</p>}
            <p className="student-item__status">{isPresent ? "✅ Presente" : "❌ Ausente"}</p>
        </div>
    );
};

StudentListItem.propTypes = {
    student: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.number.isRequired,
        instagram: PropTypes.string,
        isPresent: PropTypes.bool.isRequired,
    }).isRequired,
};

export default StudentListItem;