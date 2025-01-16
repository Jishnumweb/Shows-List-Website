import React, { useState } from 'react'
import Seriescard from '../components/Seriescard'
import { seriesdata } from '../datas/Seriesdata'

function Seriespage() {
    const [seri,setSeri] = useState(seriesdata)
  return (
    <div className='seriespage py-2'>
        <div className="seriespagecard container ">
        <h3>Browse Our Movie Collection : </h3>

            <div className="row g-3">
                {
                    seri.map((prod)=>(
                        <div className="col-md-3" key={prod.id}>
                            <Seriescard item={prod}/>
                        </div>
                    ))

                }
                
            </div>
        </div>
      
    </div>
  )
}

export default Seriespage

