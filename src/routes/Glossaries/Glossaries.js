import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';

import {UserContext} from "../../UserContext";
import './styles/Glossaries.css';

import home from "../Home/img.png";
import overview from "../Home/home_fig.png";
import skeleton from "../Home/reference.png";
import aist from './aist.png'

function Glossaries() {

    return (
        <div className="homeContainer">
            <img className="homeLogo" src={home} alt="Logo" />
            <figure>
            <img className="aist" src={aist} alt="aist" />
                <figcaption>
                Photo credited from AIST++ Dataset
                </figcaption>
            </figure>

            <h1>Public Datasets Integration</h1>
            <div className="dottedline">.....................................................................................................................................................................................................................................................................................................................................................................................................</div>
            <p className="overviewText">
                Utilizing our innovative augmentation techniques, we've seamlessly integrated four prominent datasets: Human3.6M, MADS, AIST Dance++, and MPI INF 3DHP. For the Human3.6M dataset, only the training data has been amalgamated into our collective dataset. Its testing data is preserved separately as the "Human3.6M Testing" dataset, dedicated solely for evaluation purposes.
            </p>
            <div className="dataDescription">
                <h1>Datasets Overview</h1>
                <div className="dottedline">.....................................................................................................................................................................................................................................................................................................................................................................................................</div>
                <ul>
                    <li><strong>Human3.6M:</strong> Integrated only the training data into our merged dataset. The testing data is saved as "Human3.6M Testing" for evaluation.</li>
                    <li><strong>MADS:</strong> Details or description about MADS integration (if any).</li>
                    <li><strong>AIST Dance++:</strong> Details or description about AIST Dance++ integration (if any).</li>
                    <li><strong>MPI INF 3DHP:</strong> Details or description about MPI INF 3DHP integration (if any).</li>
                </ul>
            </div>

            <div className="dataDistribution">
                <h1>Dataset Distribution</h1>
                <div className="dottedline">.....................................................................................................................................................................................................................................................................................................................................................................................................</div>

                <p className= "overviewText" >
                    Our datasets consist of:
                </p>
                <ul>
                    <li><strong>Training Clips:</strong> 331,875</li>
                    <li><strong>Validation Clips:</strong> 94,821</li>
                    <li><strong>Testing Clips:</strong> 47,412</li>
                </ul>
            </div>
        </div>

    );
}

export default Glossaries;






