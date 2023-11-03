import React, { useState } from 'react';
import './Home.css';
import '../../App.css'
import home from './img.png';
import overview from'./home_fig.png'
import skeleton from './reference.png'

//the home page consists of one picture and the login and register button
//it has two child components: ButtonGroup and LoginForm

function Home() {

    return (
        <div className="homeContainer">
            <img className="homeLogo" src={home} alt="Logo" />
            <figure>
                <img className="homeFig" src={overview} alt="Home Figure" />
                <figcaption>
                Pictured on the left: Motion capture from the 3.6M database
                <br/>
                On the right: Generated pose estimation with mapped coordinates
                </figcaption>
            </figure>

            <h1>Overview</h1>
            <div className="dottedline">.....................................................................................................................................................................................................................................................................................................................................................................................................</div>
            <p className="overviewText">
                PEDA Toolkit is a state-of-the-art solution designed specifically for researchers, developers, and AI enthusiasts in the realm of pose estimation. Our toolkit provides a unique ability to standardize and merge a variety of 3D pose estimation datasets, creating a unified dataset that paves the way for more comprehensive and robust transformer-based model training.
            </p>
            <p className="datasetsSurvey">
                A review of current 3D datasets underscores their limitations, which frequently hamper the effectiveness of pose estimators. One significant issue is the constrained number of frames, impeding the efficiency of vision transformers. For context, even though AIST Dance++ is notably larger than the Human3.6M dataset, it encompasses only 12,760 videos. A possible solution could be to employ sliding windows to divide videos into smaller segments, but transformers undeniably need more expansive datasets to achieve peak functionality. Another notable drawback is the evident lack of diversity. The majority of these datasets are captured in studio settings with consistent lighting, backgrounds, and a limited pool of actors. Training on such homogenized datasets can result in models that are optimized for specific conditions but struggle to adapt to diverse, real-world scenarios.
            </p>
            <figure>
              <img className="skeletonFig" src={skeleton} alt="Home Skeleton"/>
              <figcaption>Upper body key points to establish the standard for the skeleton</figcaption>
            </figure>
            <h1>Getting Started</h1>
            <div className="dottedline">.....................................................................................................................................................................................................................................................................................................................................................................................................</div>

        </div>

    );
}

export default Home;
