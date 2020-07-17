import React from 'react'
import MainPageBtn from './MainPageBtn'
import '../../../../static/sass/components/LandingpageText.scss'
function MainImage (props) {
  
  return (
    <>
      <div style={{
        background: `linear-gradient(to top, rgba(0,0,0,0)
        39%,rgba(0,0,0,0)
        41%,rgba(0,0,0,0.65)
        100%),
        url('${props.image}'), #1c1c1c`,
        height: '100vh',
        backgroundSize: '100%, cover',
        backgroundPosition: 'center, center',
        width: '100%',
        position: 'absolute',
        zIndex: '0',
      }}>
      
      </div>
      
      
      <div style={{width:'90%', margin:'0 auto' }}>
      <div className="MainTextContainer">
        <p className="MainTextTitle" >{props.title}</p>
        <p className="MainTextContent">{props.text}</p>
  
  
   <MainPageBtn />
      
      </div>
      </div>
      
    </>
  )
}

export default MainImage
