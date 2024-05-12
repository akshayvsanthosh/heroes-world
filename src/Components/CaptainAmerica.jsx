import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Heroes'
import Card from 'react-bootstrap/Card';
import captainFilm1Text from '../assets/cpatainFilm1text.png'
import captainFilm1Cap from '../assets/cpatainFilm1cap.png'
import captainFilm2Text from '../assets/captainFilm2text.png'
import captainFilm3Text from '../assets/captainFilm3text..png'


import Atropos from 'atropos/react';

function CaptainAmerica() {
    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger)

        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.captainComponentBlurDiv',
                start: '10% 80%',
                end: '50% 50%',
                scrub: 2,
            }
        });

        tl2.to('.captainAmerica', { height: "93%", top: "106%", left: "65%", filter: "drop-shadow( 24px -7px 10px #000)" })
    })

    return (
        <div id='about' className='captainComponentDiv '>
            <div className='captainComponentBlurDiv position-relative '>
                <div className="row w-100 " style={{ height: "100%" }}>
                    <div className="col-7  " style={{ height: "100%", padding: "48px 7px 9px 57px" }}>
                        <h1 className='headingCaptainComponent'>CAPTAIN AMERICA</h1>
                        <p className='paraCaptainComponent'>Steve Rogers was a frail young man who wanted to serve his country during World War II. He volunteered for an experimental procedure called the “Super-Soldier Serum,” which transformed him into the peak of human physicality..<br /> <br />His enhanced strength, agility, and endurance allow him to perform incredible feats. He’s also an expert hand-to-hand combatant. He’s a founding member of the Avengers, Earth’s mightiest heroes, and has played a crucial role in defending the world from various threats. His arch-nemesis is the Red Skull, a villain obsessed with world domination.</p>

                        <div className='row w-100 ' style={{ height: "36%" }}>
                            <div className="col-4 " style={{ height: "100%" }}>

                                <div id="app" style={{ width: "75%", height: "100%" }}>
                                    {/* Atropos */}
                                    <Atropos className="my-atropos" style={{ width: "100%", height: "100%" }}>
                                        <Card className='captainCardBg3' data-atropos-offset="-5">
                                            <a href='https://www.hotstar.com/in/movies/captain-america-civil-war/1260016768?utm_source=gwa' target='_blank'>
                                                <Card.Img variant="top" src={captainFilm3Text} data-atropos-offset="12" className='position-absolute' style={{ top: "30%" }} />
                                                <button data-atropos-offset="5" className='cardBttn'>WATCH MOVIE</button>
                                            </a>
                                        </Card>
                                    </Atropos>
                                </div>

                            </div>
                            <div className="col-4 " style={{ height: "100%" }}>

                                <div id="app" style={{ width: "75%", height: "100%" }}>
                                    {/* Atropos */}
                                    <Atropos className="my-atropos" style={{ width: "100%", height: "100%" }}>
                                        <Card className='captainCardBg2' data-atropos-offset="-5">
                                            <a href='https://www.hotstar.com/in/movies/captain-america-the-winter-soldier/1260016410?utm_source=gwa' target='_blank'>
                                                <Card.Img variant="top" src={captainFilm2Text} data-atropos-offset="12" className='position-absolute' style={{ top: "50%" }} />
                                                <button data-atropos-offset="5" className='cardBttn'>WATCH MOVIE</button>
                                            </a>
                                        </Card>
                                    </Atropos>
                                </div>

                            </div>
                            <div className="col-4 " style={{ height: "100%" }}>

                                <div id="app" style={{ width: "75%", height: "100%" }}>
                                    {/* Atropos */}
                                    <Atropos className="my-atropos" style={{ width: "100%", height: "100%" }}>
                                        <Card className='captainCardBg1' data-atropos-offset="-5">
                                            <a href='https://www.youtube.com/watch?v=93YVRWQcQh8' target='_blank'>
                                                <Card.Img variant="top" src={captainFilm1Cap} data-atropos-offset="5" className='position-absolute ' />
                                                <Card.Img variant="top" src={captainFilm1Text} data-atropos-offset="12" className='position-absolute' style={{ top: "30%" }} />
                                                <button className='cardBttn'>WATCH MOVIE</button>
                                            </a>
                                        </Card>
                                    </Atropos>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col " style={{ height: "100%" }}></div>
                </div>
            </div>
        </div>
    )
}

export default CaptainAmerica
