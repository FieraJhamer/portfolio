import "./Introduction.css";

function Introduction() {
    return(
        <div className="introduction">
            <div className="intro-text">
                <p>Hi, I'm <b>Alejandro J. Gómez</b>, a software developer with strong focus on the user experience, animations and micro interactions.
                Feel free to reach out to me if you have any projects in mind, or just to say hello. </p>

                <div className="intro-buttons">
                    <a href="https://www.instagram.com/fierajhamer" target="_blank" rel="noopener noreferrer" className="intro-button">
                            <img src="./../../src/assets/instagram-logo.svg" alt="Instagram" />
                    </a>

                    <a href="https://www.github.com/fierajhamer" target="_blank" rel="noopener noreferrer" className="intro-button">
                            <img src="./../../src/assets/github-logo.svg" alt="Github" />
                    </a>

                    <a href="https://www.linkedin.com/in/fierajhamer/" target="_blank" rel="noopener noreferrer" className="intro-button">
                            <img src="./../../src/assets/linkedin-logo.svg" alt="Linkedin" />
                    </a>

                    <a href="src/assets/dummy.pdf" download="Alejandro_Gomez_CV" className="intro-button">
                            <span>Curriculum</span>
                            <img src="./../../src/assets/curriculum-logo.svg" alt="Curriculum Vitae" />
                    </a>

                </div>

            </div>

            <div className="intro-img">
                <img src="./../../src/assets/logo-white.svg" alt="Mi logo"/>
            </div>
        </div>
    )
}

export default Introduction;