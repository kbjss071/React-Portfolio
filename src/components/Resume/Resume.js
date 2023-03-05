/* eslint-disable react/jsx-no-target-blank */
import resume from "../../assets/files/ResumeJin.pdf"
import "./Resume.css";
import Particle from "../Particle";
import { Button } from "react-bootstrap";
import {Document, Page, pdfjs} from 'react-pdf/'
import {Container, Row} from 'react-bootstrap'
import React, { useState } from "react";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumnetLoadSuccess({numPages}){
        setNumPages(numPages);
    }

    return (
        <div className="resumeContainer">
            <Particle/>
            <div className="resume">
                <h2>Click to download my resume</h2>
                <div className="download btn btn-primary"><a className="link" href={resume} target="_blank">Download Resume</a></div>
                <Document className="d-flex justify-content-center" file={resume} onLoadSuccess={onDocumnetLoadSuccess}>
                    <Page pageNumber={pageNumber}/>
                </Document>
            </div>
        </div>
    )
}

export default Resume;