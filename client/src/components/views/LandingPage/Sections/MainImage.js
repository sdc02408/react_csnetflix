import React from 'react';
import { Button} from 'antd'
import {CaretRightOutlined,InfoCircleOutlined } from '@ant-design/icons'
import SetButton from '../../commons/SetButton'

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
      backgroundSize:'100%, cover',
      backgroundPosition:'center, center',
      width:'100%',
      position:'absolute',
      zIndex:'0'
    }} >




    </div>

      <div style={{position:'relative', maxWidth:'600px', top:'17rem', marginLeft:'60px',height:'90vh'}}>
        <p style={{color:'white', fontSize:'70px', margin:'0 auto',textAlign:'left',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.45)',}}>{props.title}</p>
        <p style={{color:'white', fontSize:'1.2rem',
          fontWeight: 'normal',
          lineHeight: 'normal',
          width: '100%',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.45)',
          marginTop: '.1vw',
        }}>{props.text}</p>

        <SetButton />
      </div>
    </>
  )
}

export default MainImage
