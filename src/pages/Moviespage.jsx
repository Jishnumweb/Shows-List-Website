import React, { useState } from 'react'
import Filters from '../components/Filters'
import Moviecards from '../components/Moviecards'
import { moviesdata } from '../datas/Moviesdata';


function Moviespage() {
    const [mov, setMove] = useState(moviesdata)
    

    return (
        <div className='mainmoviespage py-2 '>
            
            <div className="moviespagecards container ">
                <h3>Explore Our Latest Series: </h3>
                <div className="row g-3">
                    {
                        mov.map((products) => (
                            <div className="col-md-3 col-sm-6" key={products.id}>
                                <Moviecards item={products} />
                            </div>
                        ))
                    }

                </div>
            </div>

        </div>
    )
}

export default Moviespage
