import React from 'react'
import Feed from "react-instagram-authless-feed"


export default function SocialMedia() {
    return (
        <div className="SocialMedia">
            <div id="socialHeader">
                <span><i class="fab fa-instagram fa-2x" id ="IG"></i></span><span className="headerTitle">DJ XeroKool Instagram</span>
                
            </div>
            <Feed userName="djxerokool" className="Feed" classNameLoading="Loading" />
        </div>
    )


}
