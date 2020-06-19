import React from 'react';
import { Button} from 'antd'
import {CaretRightOutlined,InfoCircleOutlined } from '@ant-design/icons'
import SetButton from '../../commons/SetButton'


function MiddleSection (props) {
  return (
    <div >
    <div style={{
      background: `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),
        url('${props.image}'), #1c1c1c`,
      height: '80vh',
      backgroundSize:'100%, cover',
      backgroundPosition:'center, center',
      width:'100%',
      position:'relative',
      margin:'35px 0'
    }} >
    
    <img src={props.image} style={{width:'40%',position:'absolute',top:'30%',left:'5%'}}/>
  
    
    
      <div style={{position:'absolute', Width:'40%', top:'30%', left:'50%'}}>
        <p style={{color:'white', fontSize:'70px', margin:'0 auto',textAlign:'left',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.45)',}}>{props.titles}</p>
  
        <SetButton />
       
        <p style={{color:'white', fontSize:'1.2rem',
          fontWeight: 'normal',
          lineHeight: 'normal',
          width: '80%',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.45)',
          marginTop: '5vw',
        }}>{props.texts}</p>
    

      </div>
    
   
    
    </div>
    
</div>



)
}

export default MiddleSection
