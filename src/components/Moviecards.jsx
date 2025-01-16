import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa6";
import { IoIosArrowDropright } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';

function Moviecards({ item }) {

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    return (
        <div>
            <Card className='moviepagecard border-0'>
                <Link to={`/movies-list/${item.id}`}>                <Card.Img variant="top" src={item.image} className='moviepagecardimg' />
                </Link>
                <div className="moviepagecardimgcontent">
                    <h3>{item.title}</h3>
                    <p className='m-0'>{item.detailes}</p>
                    <div className="iconscard">
                        <p>{item.rating}<FaStar className='staricon' /></p>
                        <Link to={`/movies-list/${item.id}`}><IoIosArrowDropright className='overviewbtn' /></Link>
                    </div>

                </div>
            </Card>

        </div>
    )
}

export default Moviecards
