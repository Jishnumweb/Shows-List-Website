import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Twocard() {
    return (
        <div className='container'>
            <div className="row g-3">
                <div className="col-md-6">
                    <Card className='imgcards border-0'>
                        <Card.Img variant="top" src="images/movie.jpg" className='twocardimg' />
                        <div className="imgcontents">
                            <h1>MOVIES</h1>
                            <p>Explore our curated collection of the latest and greatest movies across various genres. Whether you're into action, drama, comedy, or adventure, we have something for everyone. Check out the trending titles, read reviews, and find your next favorite film!</p>
                            <Link to={"movies"}><button className='twocardbtn'>Explore</button></Link>
                        </div>
                       
                    </Card>
                </div>
                <div className="col-md-6">
                    <Card className='imgcards border-0 '>
                        <Card.Img variant="top" src="https://wallpaperaccess.com/full/732908.jpg" className='twocardimg' />
                        <div className="imgcontents">
                            <h1>SERIES</h1>
                            <p>Dive into a world of binge-worthy TV series. From thrilling dramas to hilarious comedies, discover your next show to watch. Stay up to date with the most popular series and explore a vast array of genres to match your mood.</p>
                            <Link to={"series"}><button className='twocardbtn'>Explore</button></Link>

                        </div>
                        
                    </Card>
                </div>
            </div>



        </div>
    )
}

export default Twocard
