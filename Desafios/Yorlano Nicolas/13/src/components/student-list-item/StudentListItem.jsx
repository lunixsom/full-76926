import PropTypes from "prop-types";
import "./student-list-item.scss";

const StudentListItem = (props) => {
    const { name, age, email, phone, instagram, isPresent } = props;

    return (
        <div className="student-list-item">
            <div className="card">
                <div className="card__header">
                    <h4 className="card__header-title">{name}</h4>
                    <p>{isPresent ? "✅ Presente" : "❌ Ausente"}</p>
                </div>
                <ul className="card__content"> 
                    <li className="card__content-item">🎂 Edad: {age} años</li>
                    <li className="card__content-item">{`📧 ${email}`}</li>
                    <li className="card__content-item card__content-item-phone">{`📞 ${phone}`}</li>
                    {instagram && (
                        <li className="card__content-item">{`📸 ${instagram}`}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

StudentListItem.propTypes = {
    student: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        instagram: PropTypes.string,
        isPresent: PropTypes.bool.isRequired,
    }).isRequired,
};

export default StudentListItem