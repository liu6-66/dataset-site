import React from 'react';
import TranscriptionToLearn from './TranscriptionToLearn'
import home from "../Home/img.png";
import overview from "../Home/home_fig.png";
import skeleton from "../Home/reference.png";
import imaginarium from './imaginarium.jpg'

function LearningSpace() {
    return (
        <div className="homeContainer">
            <img className="homeLogo" src={home} alt="Logo" />
            <img className="imag" src={imaginarium} alt="imag" />

            <h1>SCU Imaginarium</h1>
            <div className="dottedline">.....................................................................................................................................................................................................................................................................................................................................................................................................</div>
            <p className="overviewText">
                The WAVE+Imaginarium lab is a space dedicated to exploring the potential of extended reality (VR, AR, MR), data visualization, digital art, and game design. We celebrate the transformative capabilities of mixed reality technologies, enabling intuitive data visualization, pushing the boundaries of digital art, and leveraging game design for education and storytelling.
            </p>
            <p className="overviewText">
            Our lab is also more than just a physical space; it cultivates a community that thrives on active collaboration, fostering an environment of shared learning and imaginative exploration. By bridging the gap between diverse fields and fostering interdisciplinary collaboration, the lab unites students and faculty members, creating a community of creators and researchers passionate about exploring the possibilities of emerging technologies and creative expression.
            </p>
            <p className="overviewText">
                We aim to create an environment that encourages active engagement in immersive art, data visualization, and human interaction to create projects that emphasize social responsibility, collaboration, and engagement.
            </p>

        </div>

    );
}

export default LearningSpace;
