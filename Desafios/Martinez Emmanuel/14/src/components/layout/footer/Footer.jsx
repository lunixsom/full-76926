import { Text } from "@/components/texts";
import "./footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <Text className="footer__copyright" variant="p">
                &copy;2025 Todos los derechos reservados
            </Text>
        </div>
    );
};

export default Footer;