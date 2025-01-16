import React from 'react'
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom';




function Topmovies() {
    return (
        <>
        <div>
            <div className="scrollheader container py-4 text-center ">
                <h2 className='popular'>Movies <Link to={`/movies`}><IoIosArrowDropright className='overviewbtn'/></Link></h2>
            </div>
            <div class="scroll-container container py-0">
                <div class="cardscroll">
                    <img src="https://wallpaperaccess.com/full/2624025.jpg" alt="" />
                    <h3>Titanic <Link to={`/series-list/1`}><IoIosArrowDropright className='overviewbtn'/></Link></h3>
                </div>
                <div class="cardscroll">
                    <img src="https://wallpaperaccess.com/full/210228.jpg" alt="" />

                    <h3>The Dark Knight <Link to={`/series-list/2`}><IoIosArrowDropright className='overviewbtn'/></Link></h3>
                </div>
                <div class="cardscroll">
                    <img src="https://wallpaperaccess.com/full/8066419.jpg" alt="" />

                    <h3>The Godfather <Link to={`/series-list/3`}><IoIosArrowDropright className='overviewbtn'/></Link></h3>

                </div>
                <div class="cardscroll">
                    <img src="https://wallpaperaccess.com/full/1104070.jpg" alt="" />

                    <h3>Pirates of the Caribbean <Link to={`/series-list/4`}><IoIosArrowDropright className='overviewbtn'/></Link></h3>
                </div>
                <div class="cardscroll">
                    <img src="https://wallpaperaccess.com/full/1076811.jpg" alt="" />

                    <h3>Avatar<Link to={`/series-list/5`}><IoIosArrowDropright className='overviewbtn'/></Link></h3>
                </div>
                <div class="cardscroll">
                    <img src="https://wallpaperaccess.com/full/5553014.jpg" alt="" />

                    <h3>Inception<Link to={`/series-list/6`}><IoIosArrowDropright className='overviewbtn'/></Link></h3>
                </div>
                <div class="cardscroll">
                    <img src="https://wallpaperaccess.com/full/1571282.jpg" alt="" />

                    <h3>Terminator 2<Link to={`/series-list/7`}><IoIosArrowDropright className='overviewbtn'/></Link></h3>
                </div>
            </div>

        </div>


        <div>
        <div className="scrollheader container py-4 text-center ">
            <h2 className='popular'>Series  <Link to={`/series`}><IoIosArrowDropright className='overviewbtn'/></Link>
            </h2>
        </div>
        <div class="scroll-container container py-0">
            <div class="cardscroll">
                <img src="https://wallpaperaccess.com/full/1827412.jpg" alt="" />
                <h3>House <Link to={`/movies-list/8`}><IoIosArrowDropright className='overviewbtn'/></Link></h3>
            </div>
            <div class="cardscroll">
                <img src="https://wallpaperaccess.com/full/6520910.jpg" alt="" />

                <h3>Peaky Blinders <Link to={`/movies-list/9`}><IoIosArrowDropright className='overviewbtn'/></Link></h3>
            </div>
            <div class="cardscroll">
                <img src="https://wallpaperaccess.com/full/2854511.jpg" alt="" />

                <h3>Money Heist <Link to={`/movies-list/21`}><IoIosArrowDropright className='overviewbtn'/></Link></h3>
            </div>
            <div class="cardscroll">
                <img src="https://wallpaperaccess.com/full/3422243.jpg" alt="" />

                <h3>Homeland <Link to={`/movies-list/12`}><IoIosArrowDropright className='overviewbtn'/></Link></h3>
            </div>
            <div class="cardscroll">
                <img src="https://wallpaperaccess.com/full/4907859.jpg" alt="" />

                <h3>Vikings<Link to={`/movies-list/13`}><IoIosArrowDropright className='overviewbtn'/></Link></h3>
            </div>
            <div class="cardscroll">
                <img src="https://wallpaperaccess.com/full/7631050.jpg" alt="" />

                <h3>Chernobyl<Link to={`/movies-list/14`}><IoIosArrowDropright className='overviewbtn'/></Link></h3>
            </div>
            <div class="cardscroll">
                <img src="https://wallpaperaccess.com/full/10543120.jpg" alt="" />

                <h3>Squid Game <Link to={`/movies-list/17`}><IoIosArrowDropright className='overviewbtn'/></Link></h3>
            </div>
            
        </div>

    </div>
        </>
    )
}

export default Topmovies
