import React, { useState } from 'react'
import LeftMenu from './Sections/LeftMenu'
import RightMenu from './Sections/RightMenu'
import { Drawer, Button} from 'antd'
import {CaretDownOutlined } from '@ant-design/icons'
import './Sections/Navbar.css'

function NavBar () {
  const [visible, setVisible] = useState(false)
  const [scrolling, setScrolling] = useState(false);

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  const handleScroll = () => {
    if(window.scrollY === 0) {
      setScrolling(false);
    } else if (window.scrollY > 50) {
      setScrolling(true);
    }
  }

  window.addEventListener('scroll', handleScroll);
  return (
    <nav className={"menu " + (scrolling ? "black" : "" )} style={{ position: 'fixed', zIndex: 5, width: '100%', margin:'0px auto',paddingBottom:'7px', paddingTop:'7px'}} >
      <div className="menu__logo">
        <a href="/">NETFLIX</a>
      </div>
      <div className="menu__container">
        
        <div className="menu_left">
          <LeftMenu mode="horizontal"/>
        </div>
        
        <div className="menu_right">
          <RightMenu mode="horizontal"/>
        </div>
        
        <Button
          className="menu__mobile-button"
          onClick={showDrawer}
        >
          메뉴<CaretDownOutlined />
        </Button>
        
        <Drawer
          title="NETFLIX"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          
          <LeftMenu mode="inline"/>

        </Drawer>
  
        {/*<RightMenu  mode="horizontal"/>*/}
        
      </div>
    </nav>
  )
}

export default NavBar
