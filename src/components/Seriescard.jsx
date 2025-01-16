import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa6";
import { IoIosArrowDropright } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';

function Seriescard({item}) {

    const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

    
    return (
        <div>
            <Card className='moviepagecard  border-0'>
            <Link to={`/series-list/${item.id}`}>                <Card.Img variant="top" src={item.image} className='moviepagecardimg' />
            </Link>
                <div className="moviepagecardimgcontent">
                    <h3>{item.title}</h3>
                    <p className='m-0'>{item.detailes}</p>
                    <div className="iconscard">
                            <p>{item.rating}<FaStar className='staricon' /></p>
                            <Link to={`/series-list/${item.id}`}><IoIosArrowDropright className='overviewbtn'/></Link>
                    </div>

                </div>
            </Card>

        </div>
    )
}

export default Seriescard
