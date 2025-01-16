import React from 'react'
import { Link } from 'react-router-dom';

function Filters() {
    return (
        <div>
            <div className="navvlinks container">
                <Link to={"/action"} className='navlinks'>ACTION</Link>
                <Link to={"/horror"} className='navlinks'>HORROR</Link>
                <Link to={"/romance"} className='navlinks'>ROMANCE</Link>
                <Link to={"/sci-fi"} className='navlinks'>SCI-FI</Link>
                <Link to={"/thriller"} className='navlinks'>THRILLER</Link>
            </div>





        </div>
    )
}

export default Filters
