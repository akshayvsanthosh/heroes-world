import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Card from 'react-bootstrap/Card';
import '../Styles/BlackPanther.css'



import image1 from '../assets/blackPantherfilm1bg.jpg'
import image2 from '../assets/blackPantherfilm2bg.jpg'
import image3 from '../assets/captainFilm2bg.jpg'
import image4 from '../assets/captainFilm3bg..jpg'
import image5 from '../assets/thorFilm1bg.jpg'
import image6 from '../assets/thorFilm2bg.jpg'
import image7 from '../assets/thorFilm3bg.jpg'


import pantherFilm1Text from '../assets/blackPantherfilm1Text.png'
import pantherFilm2Text from '../assets/blackPantherfilm2Text.png'
import captainFilm2Text from '../assets/captainFilm2text.png'
import captainFilm3Text from '../assets/captainFilm3text..png'
import thorFilm1Text from '../assets/thorFilm1Text.png'
import thorFilm2Text from '../assets/thorFilm2Text.png'
import thorFilm3Text from '../assets/thorFilm3Text.png'

// import 'swiper/css/effect-coverflow'


import { EffectCoverflow} from 'swiper/modules'
function Slider() {
    return (
        <div  style={{height:"80vh", width:"100%",}} className="d-flex justify-content-center align-items-center ">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                  }}
                  
                  modules={[EffectCoverflow]}
                spaceBetween={4}
                slidesPerView={'auto'}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                style={{height:"91%", width:"100%"}} 
                
            >
                <SwiperSlide className="slider" style={{height:"82%"}}>
                    <Card style={{width:"100%", height:"100%" }}>
                        <Card.Img style={{width:"100%", height:"100%" }} variant="top" src={image1} className='position-absolute'  />
                        <Card.Img variant="top" src={pantherFilm1Text} className='position-absolute' style={{ top: "30%" }} />
                        <button className='cardBttn' style={{left:"38%"}}>WATCH MOVIE</button>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className="slider" style={{height:"82%"}}>
                    <Card style={{width:"100%", height:"100%" }}>
                        <Card.Img style={{width:"100%", height:"100%" }} variant="top" src={image2} className='position-absolute'  />
                        <Card.Img variant="top" src={pantherFilm2Text} className='position-absolute' style={{ top: "30%" }} />
                        <button className='cardBttn' style={{left:"38%"}}>WATCH MOVIE</button>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className="slider" style={{height:"82%"}}>
                    <Card style={{width:"100%", height:"100%" }}>
                        <Card.Img style={{width:"100%", height:"100%" }} variant="top" src={image3} className='position-absolute'  />
                        <Card.Img variant="top" src={captainFilm2Text} className='position-absolute' style={{ top: "30%" }} />
                        <button className='cardBttn' style={{left:"38%"}}>WATCH MOVIE</button>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className="slider" style={{height:"82%"}}>
                    <Card style={{width:"100%", height:"100%" }}>
                        <Card.Img style={{width:"100%", height:"100%" }} variant="top" src={image4} className='position-absolute'  />
                        <Card.Img variant="top" src={captainFilm3Text} className='position-absolute' style={{ top: "30%" }} />
                        <button className='cardBttn' style={{left:"38%"}}>WATCH MOVIE</button>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className="slider" style={{height:"82%"}}>
                    <Card style={{width:"100%", height:"100%" }}>
                        <Card.Img style={{width:"100%", height:"100%" }} variant="top" src={image5} className='position-absolute'  />
                        <Card.Img variant="top" src={thorFilm1Text} className='position-absolute' style={{ top: "30%" }} />
                        <button className='cardBttn' style={{left:"38%"}}>WATCH MOVIE</button>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className="slider" style={{height:"82%"}}>
                    <Card style={{width:"100%", height:"100%" }}>
                        <Card.Img style={{width:"100%", height:"100%" }} variant="top" src={image6} className='position-absolute'  />
                        <Card.Img variant="top" src={thorFilm2Text} className='position-absolute' style={{ top: "30%" }} />
                        <button className='cardBttn' style={{left:"38%"}}>WATCH MOVIE</button>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className="slider" style={{height:"82%"}}>
                    <Card style={{width:"100%", height:"100%" }}>
                        <Card.Img style={{width:"100%", height:"100%" }} variant="top" src={image7} className='position-absolute'  />
                        <Card.Img variant="top" src={thorFilm3Text} className='position-absolute' style={{ top: "30%" }} />
                        <button className='cardBttn' style={{left:"38%"}}>WATCH MOVIE</button>
                    </Card>
                </SwiperSlide>
                

            </Swiper>
        </div>
    )
}

export default Slider

