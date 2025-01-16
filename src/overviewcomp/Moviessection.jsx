import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa6";
import { useLocation, useParams } from 'react-router-dom';
import { seriesdata } from '../datas/Seriesdata';


function Moviessection() {
    const { id } = useParams();  // Get the movie id from the URL
    console.log(id);
    
  const [mov, setMov] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    setLoading(true);  // Start loading the movie data

    // Get the movie data
    const selectedMovie = seriesdata().find((movie) => movie.id === id);

    if (selectedMovie) {
      setMov(selectedMovie);  // If movie is found, update the state
      setError(null);  // Clear any previous errors
    } else {
      setMov(null);  // No movie found, set mov to null
      setError('Movie not found');  // Set error message
    }

    setLoading(false);  // Finish loading
  }, [id]);  // Re-run this effect when `id` changes

  if (loading) {
    return <p>Loading movie details...</p>;
  }

  if (error) {
    return <p>{error}</p>;  // Show error if movie is not found
  }

  if (!mov) {
    return <p>Movie not found!</p>;  // Handle the case where no movie is found
  }
  console.log(mov);

  
  

    return (
        <div>
            <div className="overviewcard">
                <div className="row">
                    <div className="col-md-6 overviewcardimgsec">
                        <h3 className='mb-0'>{mov.title}</h3>
                        <p className='mb-1'>{mov.detailes}</p>

                        <Card className='border-0'>
                            <Card.Img variant="top" src={mov.image2} />

                        </Card>
                        <p className='mb-1 mt-2'> 
                            {mov.directors}</p>
                        <p className='mb-1'>
                            {mov.writters}</p>
                        <p className='mb-1'>
                            {mov.stars}</p>
                        <p>
                            {mov.category} </p>
                        <p className='mt-0'>{mov.rating}<FaStar className='staricon' /></p>


                        <h3>Plotline</h3>
                        <p>{mov.plotline}</p>
                        <div className="details">
                            <h3>Details</h3>
                            <p>
                               {mov.release}
                            </p>
                            <p>
                                {mov.country}</p>
                            <p>
                               {mov.language}</p>
                            <p>
                               {mov.location}</p>
                            <p>
                               {mov.company}</p>
                        </div>


                    </div>

                    <div className="col-md-6 overviewcontentsfirst ">
                        <iframe className='ytlink' width="560" height="315"
                            src={mov.ytlink}
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                           
                            >
                        </iframe>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Moviessection
