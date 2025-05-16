import "./Contact.css";

function Contact() {
    return(
        <div className="contact">
            <p><b>Detalles de contacto</b></p>
            <div className="contact-buttons">
                    <a href="mailto:gomez.alejandro.dev@example.com" target="_blank" rel="noopener noreferrer" className="contact-button">
                            <span>Correo</span>
                            <img src="./../../src/assets/email-logo.svg" alt="Email" />
                    </a>

                    <a href="https://wa.link/xyxshm" target="_blank" rel="noopener noreferrer" className="contact-button">
                            <span>WhatsApp</span>
                            <img src="./../../src/assets/whatsapp-logo.svg" alt="WhatsApp" />
                    </a>

                    <a href="https://discord.com/users/fierajhamer" download="Alejandro_Gomez_CV" className="contact-button">
                            <span>Discord</span>
                            <img src="./../../src/assets/discord-logo.svg" alt="Curriculum Vitae" />
                    </a>

                    <a href="https://www.linkedin.com/in/fierajhamer/" target="_blank" rel="noopener noreferrer" className="contact-button">
                            <span>LinkedIn</span>
                            <img src="./../../src/assets/linkedin-logo.svg" alt="Linkedin" />
                    </a>

                </div>
        </div>
    )
}

export default Contact;

/*
            <p><b>Redes sociales</b></p>

            <ul>
                <li><a href="mailto:gomez.alejandro.dev@example.com">Correo electrónico</a></li>
                <li><a href="https://wa.link/xyxshm" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                <li><a href="https://www.linkedin.com/in/fierajhamer" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://discord.com/users/fierajhamer" target="_blank" rel="noopener noreferrer">Discord</a></li>
            </ul>
*/