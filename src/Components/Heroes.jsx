import React, { useEffect } from 'react'
import hulk from '../assets/hulk.png'
import ironMan from '../assets/iron.png'
import spiderMan from '../assets/spiderman.png'
import captain from '../assets/captain.png'
import thor from '../assets/thor.png'
import batman from '../assets/batman.png'
import blackPanther from '../assets/blackpanther.png'
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Heroes() {
    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger)

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.heroBlurDiv',
                start: '10% 80%',
                end: '50% 50%',
                scrub: 1,
            }
        });

        tl.from('.hulk', { bottom: "0%" }, "same")
            .to('.hulk', { top: "14%", filter:"drop-shadow(0px -16px 15px #000)"}, "same")

            .from('.ironMan', { top: "5%", left: "-30%", }, "same")
            .to('.ironMan', { top: "21%", left: "22%", filter:"drop-shadow(-26px -24px 8px #000)"}, "same")

            .from('.spiderMan', { right: "-30%", top: "5%" }, "same")
            .to('.spiderMan', { right: "27%", top: "22%", filter:"drop-shadow( 25px -19px 11px #000)"}, "same")

            .from('.thor', { top: "26%", right: "0%" }, "same")
            .to('.thor', { top: "26%", right: "31%" }, "same")

            .from('.captainAmerica', { top: "23%", left: "0%" }, "same")
            .to('.captainAmerica', { top: "23%", left: "33%" }, "same")

            .from('.batman', { top: "26%", left: "0%", }, "same")
            .to('.batman', { top: "31%", left: "14%", filter:"drop-shadow(-19px -15px 9px #000)"}, "same")

            .from('.blackPanther', { top: "25%", right: "0%", }, "same")
            .to('.blackPanther', { top: "29%", right: "23%", filter:"drop-shadow( 25px -19px 11px #000)"}, "same")

    })

    return (
        <div id='heroes' className='heroDiv '>
            <div className='heroBlurDiv position-relative '>
                <div className='ironManDiv position-absolute ' style={{ width: "16%", left: "14%", top: "12%" }}>
                    <h5 className='heroesHeadings'>IRON MAN</h5>
                    <p className='heroesParas'>Soluta dolores laboriosam at animi corrupti quaerat, quas nisi modi illum perferendis fugiat eius tenetur!</p>
                </div>
                <div className='batManDiv position-absolute ' style={{ width: "16%", left: "3%", top: "50%", zIndex: 1 }}>
                    <h5 className='heroesHeadings'>BATMAN</h5>
                    <p className='heroesParas'>Soluta dolores laboriosam at animi corrupti quaerat, quas nisi modi illum perferendis fugiat eius tenetur!</p>
                </div>
                <div className='captainAmericaDiv position-absolute ' style={{ width: "16%", left: "19%", top: "79%", zIndex: 1 }}>
                    <h5 className='heroesHeadings'>CAPTAIN AMERICA</h5>
                    <p className='heroesParas'>Soluta dolores laboriosam at animi corrupti quaerat, quas nisi modi illum perferendis fugiat eius tenetur!</p>
                </div>

                <img height={"73%"} className='position-absolute hulk' src={hulk} alt="Hulk Image" />

                <img height={"71%"} className='position-absolute ironMan' style={{ top: "21%", left: "22%", transform: "rotate(347deg)" }} src={ironMan} alt="IronMan Image" />

                <img className='position-absolute spiderMan' style={{ right: "27%", transform: "rotate(39deg)", height: "51%", top: "22%" }} src={spiderMan} alt="Spiderman Image" />

                <img height={"74%"} style={{ zIndex: 1, top: "26%", right: "31%" }} className='position-absolute thor' src={thor} alt="Thor Image" />

                <img style={{ zIndex: 1, height: "77%", top: "23%", left: "33%", }} className='position-absolute captainAmerica' src={captain} alt="Captain America Image" />

                <img style={{ top: "31%", left: "14%", height: "65%", transform: "rotate(353deg)" }} className='position-absolute batman' src={batman} alt="Batman Image" />

                <img style={{ top: "29%", right: "23%", height: "66%", transform: "rotate(15deg)" }} className='position-absolute blackPanther' src={blackPanther} alt="BlackPanther Image" />

                <div className='hulkDiv position-absolute ' style={{ width: "16%", right: "28%", top: "6%" }}>
                    <h5 className='heroesHeadings text-start '>HULK</h5>
                    <p className='heroesParas text-start '>Soluta dolores laboriosam at animi corrupti quaerat, quas nisi modi illum perferendis fugiat eius tenetur!</p>
                </div>
                <div className='spiderManDiv position-absolute ' style={{ width: "16%", right: "14%", top: "18%" }}>
                    <h5 className='heroesHeadings text-start '>SPIDER-MAN</h5>
                    <p className='heroesParas text-start '>Soluta dolores laboriosam at animi corrupti quaerat, quas nisi modi illum perferendis fugiat eius tenetur!</p>
                </div>
                <div className='blackPantherDiv position-absolute ' style={{ width: "16%", right: "10%", top: "48%" }}>
                    <h5 className='heroesHeadings text-start '>BLACK PANTHER</h5>
                    <p className='heroesParas text-start '>Soluta dolores laboriosam at animi corrupti quaerat, quas nisi modi illum perferendis fugiat eius tenetur!</p>
                </div>
                <div className='thorDiv position-absolute ' style={{ width: "16%", right: "20%", top: "74%" }}>
                    <h5 className='heroesHeadings text-start '>THOR</h5>
                    <p className='heroesParas text-start '>Soluta dolores laboriosam at animi corrupti quaerat, quas nisi modi illum perferendis fugiat eius tenetur!</p>
                </div>
            </div>
        </div>
    )
}

export default Heroes
