import React, { useState } from "react";

const LeftSection = () => {
    const [num, setNum] = useState(0);

    if(num > -300) {
        setTimeout(() => {
        setNum(num - 50);
        }, 2000)
    }

    const ulStyle = {
        "marginTop": num + 'px'
    }

    return(
        <div className="left-section">
            <div className="location">
                <p><i className="fas fa-map-marker-alt"></i> &nbsp;Salt Lake City, UT</p>
            </div>
            <div className="logo">
                <img src="https://i.ibb.co/myjr5LQ/Logo-black.png" alt="logo"/>
            </div>
            <div className="i-am-section">
                <h1>I am a...</h1>
                <div className="labels">
                    <ul style={ulStyle} className="label-list">
                        <li className="label">
                        <h1>DEVELOPER</h1>
                        </li>
                        <li className="label">
                        <h1>LEARNER</h1>
                        </li>
                        <li className="label">
                        <h1>MAKER</h1>
                        </li>
                        <li className="label">
                        <h1>THINKER</h1>
                        </li>
                        <li className="label">
                        <h1>DO'ER</h1>
                        </li>
                        <li className="label">
                        <h1>HUMAN</h1>
                        </li>
                        <li className="label">
                        <h1>DEVELOPER</h1>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LeftSection;