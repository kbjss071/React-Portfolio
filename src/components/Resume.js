/* eslint-disable react/jsx-no-target-blank */
import resume from "../assets/files/ResumeJin.pdf"
import "../styles/Resume.css";
import Skills from "./Skills"

function Resume() {
    return (
        <div className="resumeContainer">
            <div className="resume">
                <h2>Click to download my resume</h2>
                <h3><a className="link" href={resume} target="_blank">Resume</a></h3>
            </div>
            <div className="skill">
                <Skills/>
            </div>
        </div>
    )
}

export default Resume;