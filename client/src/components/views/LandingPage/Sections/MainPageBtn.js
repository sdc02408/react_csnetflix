import React from 'react'
import { Button } from 'antd'
import { CaretRightOutlined, InfoCircleOutlined } from '@ant-design/icons'

const MainPageBtn = (props) =>{
  
  return (
    <>
  
      <div style={{display:'flex'}}>
        <Button size="large" style={{color:'#181818',borderRadius:'0.3rem', paddingLeft:'calc(3.6rem / 2)', paddingRight:'calc(3.6rem / 2)', fontWeight:'bold',marginRight:'1rem' }}>
          <CaretRightOutlined style={{fontSize:'20px',color:'#181818', fontWeight:'bold'}} />
          재생</Button>
        <Button size="large"
                style={{borderRadius:'0.3rem', paddingLeft:'calc(3.6rem / 2)', paddingRight:'calc(3.6rem / 2)',
                  fontWeight:'bold',marginRight:'1rem',backgroundColor:'rgba(133,133,133,0.6)', color:'white',border:'unset'}}>
          <InfoCircleOutlined style={{fontSize:'20px'}} />
          상세보기</Button>
      </div>
      
    </>
  )
}

export default MainPageBtn




