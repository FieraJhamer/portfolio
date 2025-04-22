import "./Introduction.css";

function Introduction() {
    return(
        <div className="introduction">
            <div className="intro-text">
                <p>Hi, I'm <b>Alejandro J. Gómez</b>, a software developer with strong focus on the user experience, animations and micro interactions.
                Feel free to reach out to me if you have any projects in mind, or just to say hello. </p>

                <div className="intro-buttons">
                    <span className="intro-button">Instagram</span>
                    <span className="intro-button">LinkedIn</span>
                    <span className="intro-button">GitHub</span>
                    <span className="intro-button">Steam</span>
                    <span className="intro-button">PlayStation</span>
                </div>

            </div>

            <div className="intro-img">
                <img src="src/assets/logo-white.svg" alt="Mi logo"/>
            </div>
        </div>
    )
}

export default Introduction;