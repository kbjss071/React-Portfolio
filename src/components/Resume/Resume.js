/* eslint-disable react/jsx-no-target-blank */
import resume from "../../assets/files/ResumeJin.pdf"
import "./Resume.css";
import Particle from "../Particle";

function Resume() {
    return (
        <div className="resumeContainer">
            <Particle/>
            <div className="resume">
                <h2>Click to download my resume</h2>
                <h3><a className="link" href={resume} target="_blank">Resume</a></h3>
            </div>
        </div>
    )
}

export default Resume;