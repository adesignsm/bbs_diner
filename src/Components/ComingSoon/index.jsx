import { useLayoutEffect } from "react";
import $ from "jquery";
import logoPink from "../../Assets/logo_pink.png";
import logoRed from "../../Assets/logo_red.png";

import "./index.css";

const ComingSoon = () => {

    useLayoutEffect(() => {
        $(".logo-container").delay(500).animate({opacity: "1"}, 500);
    }, []);

    document.onmousemove = (e) => {
        console.log(e);

        let mouseX = e.clientX + window.innerWidth / 2;
        let mouseY = e.clientY - window.innerHeight / 2;

        document.getElementById("movable-logo").style.marginLeft = (mouseX) * 0.0009 + "rem";
        document.getElementById("movable-logo").style.marginTop = (mouseY) * 0.0009 + "rem";
    }

    return (
        <>
            <div>
                <div className="logo-container">
                    <img className="logo" src={logoPink} />
                    <img id="movable-logo" className="logo" src={logoRed} />
                    <h1> Coming soon! </h1>
                </div>
            </div>
        </>
    )
}

export default ComingSoon;