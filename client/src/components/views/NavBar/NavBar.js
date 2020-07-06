import React, { useState } from 'react'
import LeftMenu from './Sections/LeftMenu'
import RightMenu from './Sections/RightMenu'
import { Drawer, Button} from 'antd'
import {BarsOutlined} from '@ant-design/icons'
import '../../../static/sass/components/Navbar.scss'

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
    <nav className={"menu " + (scrolling ? "black" : "" )} style={{ position: 'fixed', zIndex: 5, width: '100%', margin:'0 auto' }} >
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
          type="primary"
          onClick={showDrawer}
        >
          <BarsOutlined type="align-right"/>
        </Button>
        <Drawer
          title="Logo"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          {/*<LeftMenu mode="inline"/>*/}
          <RightMenu mode="inline"/>
        </Drawer>
      </div>
    </nav>
  )
}

export default NavBar
