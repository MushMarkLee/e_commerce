import React from "react";

import flower from '../../assets/flower.svg';
import flower1 from '../../assets/flower1.svg';
import flower2 from '../../assets/flower2.svg';

const SideAni = () => {

    return(
        <React.Fragment>
            <div id='flowerdiv'>
                <img src={flower} id='flower'/>

                <img src={flower1} id='flower1'/>


            </div>
        </React.Fragment>

    )

}

export default SideAni