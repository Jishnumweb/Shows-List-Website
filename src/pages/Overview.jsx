import Firstsection from '../overviewcomp/Firstsection'
import Scrollcards from '../components/Scrollcards'

function Overview() {
   

    
  return (
    <div>
        <div className="overviewpage">
            <div className="firstoverview container py-4">
                <Firstsection/>
            </div>
            <div className="secondoverview">
              <Scrollcards/>

            </div>

        </div>
      
    </div>
  )
}

export default Overview
