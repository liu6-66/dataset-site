import React, {useState, useEffect, useContext} from 'react';


import {UserContext} from "../../UserContext";

import home from "../Home/img.png";
import overview from "../Home/home_fig.png";
import skeleton from "../Home/reference.png";

function Transcription() {

    return (
        <div className="homeContainer">
            <img className="homeLogo" src={home} alt="Logo" />
            <div className="termsContainer">

                <h1>Terms of Use</h1>
                <div className="dottedline">.....................................................................................................................................................................................................................................................................................................................................................................................................</div>


                <p className="overviewText">
                    By accessing and utilizing the Dataset Augmentation Toolkit ("Toolkit"), you acknowledge and consent to the following terms of use. The Toolkit has been meticulously designed and crafted to cater to the needs of researchers, academicians, and developers in the realm of data augmentation. Its primary aim is to streamline and enhance the augmentation processes, thus ensuring quality results. While the Toolkit serves as a potent tool for these purposes, it's crucial to note that it isn't intended for commercial exploitation. Any efforts to monetize, redistribute, or modify the Toolkit without acquiring explicit written permission from [Your Company Name] are strictly forbidden. We put immense trust in our users and expect them to use the Toolkit ethically and responsibly. Furthermore, as the digital domain is ever-evolving, we maintain the discretion to introduce modifications, updates, or even revoke the Toolkit's availability without prior notification.
                </p>

                <h2>Disclaimer</h2>

                <p className="overviewText">
                    The Dataset Augmentation Toolkit is furnished to users on an "as is" and "as available" basis, devoid of any express or implied warranties, representations, or guarantees. While we have invested significant resources to ensure the Toolkit's reliability, [Your Company Name] does not assure uninterrupted access, flawless operation, or complete accuracy in results. We, including our developers, affiliates, and partners, disclaim all responsibility for any form of damages, data loss, inaccuracies, or any adverse incidents that might arise from the Toolkit's deployment. It remains the prerogative and responsibility of the user to conduct due diligence, ascertain the Toolkit's appropriateness for specific tasks, and validate outcomes. We highly recommend continuous backups and checks when working with vital datasets.
                </p>

            </div>
        </div>

    );
}

export default Transcription;
