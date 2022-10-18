import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import cloud from '../../assets/cl3.png';
import cloud3 from '../../assets/cl5.png';
import cloud4 from '../../assets/cl6.png';
import cloud5 from '../../assets/new_cloud.png';
import cloud6 from '../../assets/new_cloud2.png';
import star from '../../assets/stardesk.png';
import moon from '../../assets/moon1.png';

import MyButton from "./Button";


const Screen = (seller) => {
    const width = window.innerWidth;
    const location = useLocation()

    return(
        <React.Fragment>
            {location.pathname === '/' && (
                <div id='screen'>
                    <div id='texarea' >
                        <div id='text' >
                            <p>{seller.seller} </p>
                        </div>
                        <img src={moon} alt='moon' id='moon' />
                        <img src={star} alt='star' id='star' />
                    </div>
                    <div id='clouds'>
                        <img src={cloud6} alt='cloud6' id='cloud6'/>
                        <img src={cloud4} alt='cloud4' id='cloud4'/>
                        <img src={cloud3} alt='cloud3' id='cloud3'/>
                        <img src={cloud} alt='cloud' id='cloud'/>
                        <img src={cloud5} alt='cloud2' id='cloud2'/>
                    </div>
                </div>
            )}
        </React.Fragment>

    )
}

export default Screen
