import "./AboutMe.css";

function AboutMe() {
    return(
        <div className="about-me">
            <p><b>About me</b></p>

            <p>
                Hi, I'm Alejandro, a front-end software developer from Argentina.
                My primary tools of choice include: 
            </p>

            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Solidjs</li>
                <li>Astro</li>
                <li>Svelte</li>
                <li>NodeJS</li>
            </ul>

            <p>
                Beyond coding, I'm passionate about design, illustration, animation and 3D modelling and traveling.
            </p>
        </div>
    )
}

export default AboutMe;