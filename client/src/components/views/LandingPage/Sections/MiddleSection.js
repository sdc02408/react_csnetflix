import React from 'react'
import MainPageBtn from './MainPageBtn'
import '../../../../static/sass/components/LandingpageText.scss'
import '../../../../static/sass/components/SetButton.scss'

function MiddleSection (props) {
  return (
   
      <div className="MiddleContainer" style={{
        background: `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),
        url('${props.image}'), #1c1c1c`,
       
      }}>
        
          <div className="MiddleImage" >
            <img src={props.image} style={{ width: '100%' }}/>
          </div>
          
          
          <div className="MiddleTextContainer" >
            <p className="MiddleTextTitle">{props.titles}</p>
            
            <MainPageBtn />
            
            <p className="MiddleTextContent" >{props.texts}</p>
          </div>
      
      </div>
    

  
  )
}

export default MiddleSection
