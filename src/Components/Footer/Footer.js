import React from 'react'
import { scroller } from "react-scroll";

export default function Footer() {

    function scrollToHome(){
        scroller.scrollTo("Home", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
    }

    return (
        <div id="Footer">
            <i class="fas fa-arrow-up fa-2x" onClick={scrollToHome}></i>
        </div>
    )
}
