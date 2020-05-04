import React from 'react';
import { Button} from 'antd'
import {CaretRightOutlined,InfoCircleOutlined } from '@ant-design/icons'

function MainText(props) {

 return (


      <div style={{position:'relative', maxWidth:'500px', top:'10rem', marginLeft:'60px',height:'90vh'}}>
        <p style={{color:'white', fontSize:'70px', margin:'0 auto',textAlign:'center',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.45)',}}>{props.props.title}</p>
        <p style={{color:'white', fontSize:'1.2rem',
          fontWeight: 'normal',
          lineHeight: 'normal',
          width: '100%',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.45)',
          marginTop: '.1vw',
        }}>{props.props.text}</p>
        <div style={{display:'flex'}}>
      <Button size="large" style={{color:'#181818',borderRadius:'0.3rem', paddingLeft:'calc(3.6rem / 2)', paddingRight:'calc(3.6rem / 2)', fontWeight:'bold',marginRight:'1rem' }}>
        <CaretRightOutlined style={{fontSize:'20px',color:'#181818', fontWeight:'bold'}} />
        재생</Button>
      <Button size="large" style={{borderRadius:'0.3rem', paddingLeft:'calc(3.6rem / 2)', paddingRight:'calc(3.6rem / 2)',fontWeight:'bold',marginRight:'1rem',backgroundColor:'rgba(133,133,133,0.6)', color:'white',border:'unset'}}>
        <InfoCircleOutlined style={{fontSize:'20px'}} />
        상세정보</Button>

        </div>
      </div>


)}

export default MainText
