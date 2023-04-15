import React, { useState } from 'react'
import CarouselComponent from "./CarouselComponent"
import { Link } from 'react-router-dom';


const NavbarSec = () => {
    return (
        <div>
            <div className='container'>
                <h1 className='text d-flex justify-center align-items-center'>Latest News</h1>
                <div className='row navv justify-start'>
                    <div className='col-lg-2 col-sm-4 col-4'>
                        <Link to={`/search/4`}><button className='btn btn-light nav-sec-link'>Entertainment</button></Link>
                    </div>
                    <div className='col-lg-2 col-sm-4 col-4'>
                        <Link to={`/search/2`}><button className='btn btn-light nav-sec-link'>Business</button></Link>
                    </div>
                    <div className='col-lg-2 col-sm-4 col-4'>
                        <Link to={`/search/3`}><button className='btn btn-light nav-sec-link'>Tech</button></Link>
                    </div>
                    <div className='col-lg-2 col-sm-4 col-4'>
                        <Link to={`/search/5`}><button className='btn btn-light nav-sec-link'>Sports</button></Link>
                    </div>
                    <div className='col-lg-2 col-sm-4 col-4'>
                        <Link to={`/search/6`}><button className='btn btn-light nav-sec-link'>Science</button></Link>
                    </div>
                    <div className='col-lg-2 col-sm-4 col-4'>
                        <Link to={`/search/7`}><button className='btn btn-light nav-sec-link'>Health</button></Link>
                    </div>
                </div>
                <CarouselComponent />
            </div>
        </div>
    )
}

export default NavbarSec