import { Router } from "express";
import { sendMail } from "../utils/mailer.js";

const router = Router();

// Ruta para enviar una consulta. URL: http://localhost:3000/api/inquiry/send-mail
router.post("/send-mail", async (req, res) => {
    try {
        const { name, surname, phone, email, inquiry } = req.body;

        if (!name || !surname || !phone || !email || !inquiry) {
            return res.status(400).json({ status: "error", message: "Faltan datos de relevancia" });
        }

        const from = `"${name} ${surname}" <${process.env.SMTP_MAIL}>`; // Correo registrado en Brevo
        const to = process.env.SMTP_MAIL; // Correo destino
        const subject = "Consulta Web";
        const contentHtml = `
            <div>
                <p>Nombre: ${name}</p>
                <p>Apellido: ${surname}</p>
                <p>Teléfono: ${phone}</p>
                <p>Email: ${email}</p>
                <p>Consulta: ${inquiry}</p>
            </div>`;

        const result = await sendMail(from, to, subject, contentHtml);

        if (!result) {
            throw new Error("Error al enviar el correo");
        }

        res.status(204).json({ status: "success" });
    } catch (error) {
        res.status(error.code || 500).json({ status: "error", message: error.message });
    }
});

export default router;