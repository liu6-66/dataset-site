import React, { useState, useEffect, useContext } from 'react';
import {UserContext} from "../../UserContext";
import './Start.css';
import axios from "axios";
import transcriptions from "../Transcriptions/Transcriptions";
import home from "../Home/img.png";
import sample from './sample.png'


//The start page has the following child components: TranscriptionPanel, GlossaryPanel, and UploadForm
//TranscriptionPanel has two child components called SpeechRecognitionComponent and SelectGlossaryComponent

function Start() {

    return (
        <div className="homeContainer">
            <img className="homeLogo" src={home} alt="Logo" />

            <h1>Methodology</h1>
            <div className="dottedline">.....................................................................................................................................................................................................................................................................................................................................................................................................</div>
            <p className="datasetsSurvey">
                Our global standard consists of two primary components: a distinct coordinate system and three crucial 3D reference points. This coordinate system is defined by the origin and the positive directions of the x, y, and z axes. For the origin, we've selected the midpoint between the left and right shoulders. The vector spanning from the left to the right shoulder establishes the positive direction for the y-axis. Meanwhile, the vector from the pubis to the origin sets the z-axis's positive direction, and the direction the face points determines the positive x-axis. To solidify this standard, we've identified the left shoulder, right shoulder, and pubis as the pivotal 3D reference points, as illustrated in Fig. 3. These reference points were chosen to stabilize the skeletons at a consistent scale and pinpoint key locations. The rationale behind selecting these three upper body points is twofold: they facilitate the identification of key frames when the upper body aligns vertically with the x-y plane, and fewer reference points simplify the process of finding suitable key frames, ensuring compatibility across all datasets.
            </p>
            <img className="sample" src={sample} alt="sample" />

            <h1>Download the toolkit</h1>
            <div className="dottedline">.....................................................................................................................................................................................................................................................................................................................................................................................................</div>
            <p className="datasetsSurvey">
                Our global standard consists of two primary components: a distinct coordinate system and three crucial 3D reference points. This coordinate system is defined by the origin and the positive directions of the x, y, and z axes. For the origin, we've selected the midpoint between the left and right shoulders. The vector spanning from the left to the right shoulder establishes the positive direction for the y-axis. Meanwhile, the vector from the pubis to the origin sets the z-axis's positive direction, and the direction the face points determines the positive x-axis. To solidify this standard, we've identified the left shoulder, right shoulder, and pubis as the pivotal 3D reference points, as illustrated in Fig. 3. These reference points were chosen to stabilize the skeletons at a consistent scale and pinpoint key locations. The rationale behind selecting these three upper body points is twofold: they facilitate the identification of key frames when the upper body aligns vertically with the x-y plane, and fewer reference points simplify the process of finding suitable key frames, ensuring compatibility across all datasets.
            </p>
            <p className="downloadText">
                To get started with the PEDA Toolkit, follow these steps:
                <ol>
                    <li><strong>Download from GitHub:</strong> Head to our official GitHub repository and clone or download the toolkit. Ensure you have `git` installed on your machine. Use the command:</li>
                    <code>git clone [repository URL]</code>

                    <li><strong>Installation:</strong> After downloading, navigate to the toolkit directory and install any required dependencies. This process might vary depending on the specifics of the toolkit, but often involves commands like:</li>
                    <code>
                        cd PEDA-Toolkit<br />
                        npm install
                    </code>

                    <li><strong>Applying to Public Datasets:</strong> With the toolkit set up, you can now apply its functionalities to various public datasets. Ensure the datasets are in the recommended format as outlined in our documentation. Then, use the toolkit's scripts or commands to process and unify the datasets according to our global standard.</li>

                    <li><strong>Consult Documentation:</strong> For any challenges or advanced configurations, always refer to the provided documentation on our GitHub repository. It offers detailed guidance and troubleshooting tips to ensure smooth processing.</li>
                </ol>
            </p>
        </div>

    );
}

export default Start;
