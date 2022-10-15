import React from "react";
import SideAni from "../SideAni/SideAni";
import rebekka from '../../assets/rebekka.jpg';

const About = () => {
    return(
        <div style={{paddingTop: '10%', paddingLeft: '5%', backgroundColor: '#EFD8DF'}}>
            <SideAni />
            <div style={{height: '100vh',  backgroundColor: '#EFD8DF'}}>


                <div className='col-xs-12 col-sm-6 col-md-6 col-lg-5'>
                    <div id='square'>

                    </div>

                    <div>
                        <img alt='about' src={rebekka} id='about' />
                    </div>
                </div>

                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12' >
                    <div id='aboutmee'>
                        <p>
                            Hello everyone, my name is Rebekka and this is my handmade jewelry and accessories website :))</p>

                        <p> Since I can remember myself I've been interested in arts and crafts as well as jewelry making. </p>
                        <p> Each piece on our page is truly unique and made to make you feel beautiful in your own skin.
                            Thank you so much for reading and happy shopping!  </p>
                        <p> Much love, Rebekka 💖 </p>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default About