import PropTypes from "prop-types";
import "./StudentListItem.scss";

const StudentListItem = (props)=>{
    const {name, age, email, phone, instagram, isPresent}= props.student;
    return(
        <div className= "student-item">
            <div className="student-item__head">
            <h4 className="student-item__name">{name}</h4>
             <p className="student-item__status">{isPresent ? "✅Presente" : "❌Ausente"}</p>
            </div>
            <p className="student-item__age">🎂 Edad: {age} años</p>
            <p className="student-item__email">📧 {email}</p>
            <p className="student-item__phone">📞 {phone}</p>
            <p className="student-item__instagram">📷 {instagram}</p>
           

        </div>
    );
};
StudentListItem.propTypes = {
    student: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        isPresent: PropTypes.bool.isRequired,
        age: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.number.isRequired,
        instagram: PropTypes.string,
      

    }).isRequired,
};

StudentListItem.defaultProps = {
    student: {
        id: 0,
        name: "",
        status: true,
        age: "",
        email: 0,
        phone: 0,
        instagram: "",
       
    },
};
export default StudentListItem;