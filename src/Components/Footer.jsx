import React from 'react'


function Footer() {
  return (
    <div id='contact' className='container mt-5 w-100'>
      <div className="d-lg-flex justify-content-between ">
        <div style={{width:'400px'}}>
          <h5 className='homeSubHeading' >SUPERHEROES</h5>
          <p>HeroesWorld, crafted with passion by our dedicated team, brings you an immersive universe where superheroes and their epic adventures come to life.</p>
          <p>Code licensed HeroesWorld, docs CC BY 1.0.Currently</p>
          <p>v1.0.0.</p>
        </div>
        <div className="d-flex flex-column ">
          <h5>Contact Us</h5>
          <div className="d-flex">
            <input placeholder='Email Id Please' type="text" className='form-control '/>
            <button className='btn btn-primary  ms-2'><i className='fa-solid fa-arrow-right'></i></button>
          </div>
          <div className='icons d-flex justify-content-between mt-3'>
            <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'>
              <i className='fa-brands fa-twitter'></i>
            </a>
            <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'>
              <i className='fa-brands fa-instagram'></i>
            </a>
            <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'>
              <i className='fa-brands fa-facebook'></i>
            </a>
            <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'>
              <i className='fa-brands fa-linkedin'></i>
            </a>
            <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'>
              <i className='fa-brands fa-github'></i>
            </a>
            <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'>
              <i className='fa-solid fa-phone'></i>
            </a>
          </div>
        </div>
      </div>
        <div className='d-flex flex-row justify-content-between '>
          <p className='text-center mt-3'>Copyright © HeroesWorld. Built with React.</p>
          <a href='#home' className='text-center mt-3 text-white'><i  className="fa-solid fa-arrow-up border rounded-circle p-2"></i></a>
        </div>
    </div>
  )
}

export default Footer
