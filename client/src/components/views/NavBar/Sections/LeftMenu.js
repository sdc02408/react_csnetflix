import React from 'react';
import {Menu} from 'antd';

function LeftMenu(props) {
  return(
    <Menu mode={props.mode}>
      <Menu.Item key="mail" className='customclass'>
        <a href="/">홈</a>
      </Menu.Item>
      <Menu.Item key="topten" >
        <a href="/topten">베스트 콘텐츠</a>
      </Menu.Item>
      <Menu.Item key="favorite">
        <a href="/favorite">내가 찜한 콘텐츠</a>
      </Menu.Item>
    </Menu>
  )
}

export default LeftMenu
