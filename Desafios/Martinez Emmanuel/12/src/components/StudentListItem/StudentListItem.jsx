import PropTypes from "prop-types";
import React from "react";
import "./StudentListItem.scss";

const StudentListItem = (props) => {
    const { name, age, email, phone, instagram, isPresent } = props.student;

    return (
        <div className={`student-item ${isPresent ? "student-item--present" : "student-item--absent"}`}>
            <div className="student-item__top-container">
                <h4 className="student-item__name">{name}</h4>
                <p className="student-item__status">{isPresent ? "✅ Presente" : "❌ Ausente"}</p>
            </div>
            <p className="student-item__age">🎂Edad: {age} años</p>
            <p className="student-item__email">📧{email}</p>
            <p className="student-item__phone">📞{phone}</p>
            {instagram && (<p className="student-item__instagram">📷{instagram}</p>)}

        </div>
    );
};

StudentListItem.propTypes = {
    student: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        instagram: PropTypes.string,
        isPresent: PropTypes.bool.isRequired,
    }).isRequired,
};

StudentListItem.defaultProps = {
    student: {
        id: 0,
        name: "",
        age: 0,
        email: "",
        phone: "",
        isPresent: false,
    },
};

export default StudentListItem;
