import React from 'react'
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom';



function Scrollcards() {
    return (
        <div>
            <div className="scrollheader container py-4 text-center ">
                <h2 className='popular'>POPULAR SHOWS 
                </h2>
            </div>
            <div class="scroll-container container py-0">
                <div class="cardscroll">
                    <img src="https://wallpapercave.com/wp/wp12028188.jpg" alt="" />
                    <h3>SQUID GAME <Link to={`/movies-list/17`}><IoIosArrowDropright className='overviewbtn'/></Link></h3>
                </div>
                <div class="cardscroll">
                    <img src="https://wallpapercave.com/wp/wp4995606.jpg" alt="" />

                    <h3>DARK <Link to={`/movies-list/18`}><IoIosArrowDropright className='overviewbtn'/></Link></h3>
                </div>
                <div class="cardscroll">
                    <img src="https://wallpapercave.com/wp/wp13577868.jpg" alt="" />

                    <h3>WALKING DEAD <Link to={`/movies-list/19`}><IoIosArrowDropright className='overviewbtn'/></Link></h3>

                </div>
                <div class="cardscroll">
                    <img src="https://wallpapercave.com/wp/wp11717725.jpg" alt="" />

                    <h3>INTERSTELLAR <Link to={`/series-list/13`}><IoIosArrowDropright className='overviewbtn'/></Link></h3>
                </div>
                <div class="cardscroll">
                    <img src="https://wallpapercave.com/wp/wp7876716.png" alt="" />

                    <h3>MR ROBOT <Link to={`/movies-list/20`}><IoIosArrowDropright className='overviewbtn'/></Link></h3>
                </div>
                <div class="cardscroll">
                    <img src="https://wallpapercave.com/wp/wp8463693.jpg" alt="" />

                    <h3>BREAKING BAD <Link to={`/movies-list/1`}><IoIosArrowDropright className='overviewbtn'/></Link></h3>
                </div>
                <div class="cardscroll">
                    <img src="https://wallpapercave.com/wp/wp13889411.jpg" alt="" />

                    <h3>INCEPTION <Link to={`/series-list/6`}><IoIosArrowDropright className='overviewbtn'/></Link></h3>
                </div>
            </div>

        </div>
    )
}

export default Scrollcards
