import React from 'react'
import thor from '../assets/thor.png'
import Card from 'react-bootstrap/Card';
import thorFilm1Text from '../assets/thorFilm1Text.png'
import thorFilm2Text from '../assets/thorFilm2Text.png'
import thorFilm3Text from '../assets/thorFilm3Text.png'
import '../Styles/thor.css'
import Atropos from 'atropos/react';
import { ScrollParallax } from "react-just-parallax";


function CaptainAmerica() {
    return (
        <div className='thorComponentDiv '>
            <div className='captainComponentBlurDiv position-relative '>
                <ScrollParallax strength={-0.3} enableOnTouchDevice={false}>
                    <div className="row w-100 " style={{ height: "100%" }}>
                        <div className="col " style={{ height: "100%" }}>
                            <img style={{ height: "91%", left: "4%", top: "6%", filter: "drop-shadow(-32px 4px 11px #000)" }} className='position-absolute' src={thor} alt="Thor Image" />
                        </div>
                        <div className="col-7  " style={{ height: "100%", padding: "48px 7px 9px 57px" }}>
                            <h1 className='headingThorComponent'>THOR</h1>
                            <p className='paraCaptainComponent'>Thor Odinson, often called “The Mighty Thor,” is based on the thunder god from Norse mythology. He was created by editor Stan Lee, penciller Jack Kirby, and scripter Larry Lieber.<br /> <br />Thor is one of the gods of Asgard, the mythical realm. He is the son of the Asgardian king, OdinThor possesses superhuman strength, stamina, durability, speed, agility, reflexes, healing, longevity, and heightened senses. He wields control over weather elements, including rain, lightning, and thunder.</p>

                            <div className='row w-100 ' style={{ height: "36%" }}>
                                <div className="col-4 " style={{ height: "100%" }}>

                                    <div id="app" style={{ width: "75%", height: "100%" }}>
                                        {/* Atropos */}
                                        <Atropos className="my-atropos" style={{ width: "100%", height: "100%" }}>
                                            <Card className='thorCardBg1' data-atropos-offset="-5">
                                                <a href='https://www.hotstar.com/in/movies/thor-love-and-thunder/1260110008?utm_source=gwa' target='_blank'>
                                                    <Card.Img variant="top" src={thorFilm3Text} data-atropos-offset="12" className='position-absolute' style={{ top: "30%" }} />
                                                    <button data-atropos-offset="8" className='cardBttn'>WATCH MOVIE</button>
                                                </a>
                                            </Card>
                                        </Atropos>
                                    </div>

                                </div>
                                <div className="col-4 " style={{ height: "100%" }}>

                                    <div id="app" style={{ width: "75%", height: "100%" }}>
                                        {/* Atropos */}
                                        <Atropos className="my-atropos" style={{ width: "100%", height: "100%" }}>
                                            <Card className='thorCardBg2' data-atropos-offset="-5">
                                                <a href='https://www.hotstar.com/in/movies/thor-the-dark-world/1260018142?utm_source=gwa' target='_blank'>
                                                    <Card.Img variant="top" src={thorFilm2Text} data-atropos-offset="12" className='position-absolute' style={{ top: "30%" }} />
                                                    <button data-atropos-offset="12" className='cardBttn'>WATCH MOVIE</button>
                                                </a>
                                            </Card>
                                        </Atropos>
                                    </div>

                                </div>
                                <div className="col-4 " style={{ height: "100%" }}>

                                    <div id="app" style={{ width: "75%", height: "100%" }}>
                                        {/* Atropos */}
                                        <Atropos className="my-atropos" style={{ width: "100%", height: "100%" }}>
                                            <Card className='thorCardBg3' data-atropos-offset="-5">
                                                <a href='https://www.hotstar.com/in/movies/thor/1660000044?utm_source=gwa' target='_blank'>
                                                    <Card.Img variant="top" src={thorFilm1Text} data-atropos-offset="12" className='position-absolute' style={{ top: "30%" }} />
                                                    <button data-atropos-offset="8" className='cardBttn'>WATCH MOVIE</button>
                                                </a>
                                            </Card>
                                        </Atropos>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollParallax>
            </div>
        </div>
    )
}

export default CaptainAmerica
