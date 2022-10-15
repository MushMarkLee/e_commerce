import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import review1 from '../../assets/review/1.jpg';
import review2 from '../../assets/review/2.jpg';
import review3 from '../../assets/review/3.jpg';
import review4 from '../../assets/review/4.jpg';
import SideAni from "../SideAni/SideAni";

const Review = () => {
    return(
        <React.Fragment>
            <div style={{backgroundColor: '#EFD8DF'}}>
                <div id='our_reviews'> Our reviews 💞 </div>

                <SideAni />
                <Carousel variant="dark" className='justify-content-center'>
                    <Carousel.Item interval={1500} style={{textAlign: 'center'}} >
                        <img src={review1} alt="First slide" style={{height: '650px'}} className="d-block w-15 center-block" />
                    </Carousel.Item>
                    <Carousel.Item interval={1500} style={{textAlign: 'center'}}>
                        <img src={review2} alt="Second slide" style={{height: '650px'}} className="d-block w-15 center-block"  />
                    </Carousel.Item>
                    <Carousel.Item interval={1500} style={{textAlign: 'center'}}>
                        <img src={review3} alt="Second slide" style={{height: '650px'}}className="d-block w-15 center-block"  />
                    </Carousel.Item>
                    <Carousel.Item interval={1500} style={{textAlign: 'center'}}>
                        <img src={review4} alt="Second slide" style={{height: '650px'}} className="d-block w-15 center-block"  />
                    </Carousel.Item>
                </Carousel>

            </div>
            <div  style={{backgroundColor: '#EFD8DF',height: '150px'}}>

            </div>
        </React.Fragment>
    )
}

export default Review