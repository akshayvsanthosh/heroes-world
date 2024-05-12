import React from 'react'
import panther from '../assets/blackpanther2.png'
import Card from 'react-bootstrap/Card';
import pantherFilm1Text from '../assets/blackPantherfilm1Text.png'
import pantherFilm2Text from '../assets/blackPantherfilm2Text.png'
import '../Styles/thor.css'
import '../Styles/BlackPanther.css'
import { ScrollParallax } from "react-just-parallax";



import Atropos from 'atropos/react';

function CaptainAmerica() {
    return (
        <div className='pantherComponentDiv '>
            <div className='captainComponentBlurDiv position-relative '>
            <ScrollParallax strength={0.08} enableOnTouchDevice={false}>

                <div className="row w-100 " style={{ height: "100%" }}>
                    <div className="col-7  " style={{ height: "100%", padding: "48px 7px 9px 57px" }}>
                        <h1 className='headingPantherComponent'>BLACK PANTHER</h1>
                        <p className='paraCaptainComponent'>Black Panther, whose real name is T’Challa, is a fictional superhero in Marvel Comics. He was created by writer-editor Stan Lee and artist-coplotter Jack Kirby.<br /> <br />As the king of Wakanda, T’Challa serves as the religious leader, commander-in-chief, and protector of his people.His role combines intellect, physical prowess, and access to advanced Wakandan technology.His role combines intellect, physical prowess, and access to advanced Wakandan technology.</p>

                        <div className='row w-100 ' style={{ height: "36%" }}>
                            <div className="col-4 " style={{ height: "100%" }}>

                                

                            </div>
                            <div className="col-4 " style={{ height: "100%" }}>

                                <div id="app" style={{ width: "75%", height: "100%" }}>
                                    {/* Atropos */}
                                    <Atropos className="my-atropos" style={{ width: "100%", height: "100%" }}>
                                        <Card className='pantherCardBg2' data-atropos-offset="-5">
                                            <a href='https://www.hotstar.com/in/movies/black-panther-wakanda-forever/1260118821?utm_source=gwa' target='_blank'>
                                                <Card.Img variant="top" src={pantherFilm2Text} data-atropos-offset="12" className='position-absolute' style={{ top: "30%" }} />
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
                                        <Card className='pantherCardBg3' data-atropos-offset="-5">
                                            <a href='https://www.hotstar.com/in/movies/black-panther/1660010672?utm_source=gwa' target='_blank'>
                                                <Card.Img variant="top" src={pantherFilm1Text} data-atropos-offset="12" className='position-absolute' style={{ top: "30%" }} />
                                                <button data-atropos-offset="8" className='cardBttn'>WATCH MOVIE</button>
                                            </a>
                                        </Card>
                                    </Atropos>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col " style={{ height: "100%" }}>
                        <img style={{ height: "91%", right: "7%", top:"7%", filter:"drop-shadow(-34px 6px 11px #000)"}} className='position-absolute' src={panther} alt="Panther Image" />
                    </div>
                </div>
            
            </ScrollParallax>
            </div>
        </div>
    )
}

export default CaptainAmerica
