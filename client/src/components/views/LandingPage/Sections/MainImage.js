import React from 'react';
import { Button} from 'antd'
import {CaretRightOutlined,InfoCircleOutlined } from '@ant-design/icons'

function MainImage (props) {
  return (
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
  )
}

export default MainImage
