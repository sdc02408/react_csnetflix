import React from 'react'
import MainPageBtn from './MainPageBtn'
import '../../../../static/sass/components/LandingpageText.scss'

function MiddleSection (props) {
  return (
    <div className="bibi">
      <div style={{
        background: `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),
        url('${props.image}'), #1c1c1c`,
        height: '80vh',
        backgroundSize: '100%, cover',
        backgroundPosition: 'center, center',
        width: '100%',
        position: 'relative',
        margin: '35px 0',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-evenly'
      }}>
        
          <div className="MiddleImage" >
            <img src={props.image} style={{ width: '100%' }}/>
          </div>
          
          
          <div className="MiddelTextContainer" >
            <p className="MiddleTextTitle">{props.titles}</p>
            
            <MainPageBtn  />
            
            <p className="MiddleTextContent" >{props.texts}</p>
          </div>
      
      </div>
    
    </div>
  
  )
}

export default MiddleSection
