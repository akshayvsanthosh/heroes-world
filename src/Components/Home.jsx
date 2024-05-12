import React from 'react'
import 'react-bootstrap'
import Header from './Header'
import { Grid } from '@mui/material'
import Atropos from 'atropos/react';
import { ScrollParallax } from "react-just-parallax";

function Home() {
  return (
    <ScrollParallax strength={0.22}>
      <div id='home' className="homeDiv">

        <div id="app">
          {/* Atropos */}
          <Atropos className="my-atropos my-atroposBlur" rotateTouch={'scroll-y'} shadow={false} rotateXInvert={true} rotateXMax={5} rotateYMax={5} >
            <div className='mainDiv' data-atropos-offset="-5" >

              <div className='blurEffect' data-atropos-offset="5" >
                <div style={{ width: "100%", height: "100%" }}>
                  <Header />
                  <Grid container spacing={2} data-atropos-offset="10" >
                    <Grid item xs={12} style={{ paddingLeft: "101px", paddingTop: "51px" }}>
                      <h5 className='homeSubHeading' >SUPERHEROES</h5>
                      <p className='homeSubPara'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam esse possimus nobis alias dolore, repellendus beatae!</p>
                    </Grid>
                    <Grid item xs={12} >
                      <h1 className='homeHeading'>SUPE<span className='homeHeadingSpan'>RHE</span>ROES</h1>
                    </Grid>
                    <Grid item xs={12} className=''>

                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </Atropos>
        </div>

      </div>
    </ScrollParallax>
  )
}

export default Home
