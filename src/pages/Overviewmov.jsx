import React from 'react'
import Scrollcards from '../components/Scrollcards'
import Moviessection from '../overviewcomp/Moviessection'

function Overviewmov() {
  return (
    <div>
        <div className="overviewpage">
            <div className="firstoverview container py-4">
                <Moviessection/>
            </div>
            <div className="secondoverview">
              <Scrollcards/>

            </div>

        </div>
      
    </div>
  )
}

export default Overviewmov
