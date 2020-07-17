import React from 'react'
import { Button } from 'antd'
import { CaretRightOutlined, InfoCircleOutlined } from '@ant-design/icons'
import '../../../../static/sass/components/SetButton.scss'

const MainPageBtn = (props) =>{
  
  return (
    <>
  
      <div className="MainPageBtnContainer" >
        <Button className="MainPageBtnPlay" size="large" >
          <CaretRightOutlined style={{fontSize:'20px',color:'#181818', fontWeight:'bold'}} />
          재생</Button>
        <Button className="MainPageBtnDetail" size="large">
          <InfoCircleOutlined style={{fontSize:'20px'}} />
          상세보기</Button>
      </div>
      
    </>
  )
}

export default MainPageBtn




