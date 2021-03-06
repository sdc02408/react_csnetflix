/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Avatar, Menu } from 'antd'
import axios from 'axios'
import { UserOutlined } from '@ant-design/icons'
import { withRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SearchInput from '../../../../container/SearchInput'
import './Navbar.css'
import Alarm from '../../NavBar/Sections/Alarm'

function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get('/api/users/logout')
    .then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="search">
         
          <SearchInput />
          
        </Menu.Item>
        <Menu.Item key="alaram">
          <Alarm  />
        </Menu.Item>
        <Menu.Item key="signin">
          <a className="loginNav" href="/login">로그인</a>
        </Menu.Item>
        <Menu.Item key="signup">
          <a className="signupNav" href="/register">회원가입</a>
        </Menu.Item>
      </Menu>
    )
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="search">
   
            <SearchInput />
      
        </Menu.Item>
        <Menu.Item key="alarm">
          <Alarm />
        </Menu.Item>
        <Menu.Item key="avatar">
          <a className="avatorNav" href="/"><Avatar shape="square"  style={{ color: '#ffffff', backgroundColor: '#cccccc' }}   icon={<UserOutlined />} /></a>
        </Menu.Item>
        <Menu.Item key="logout">
          <a className="logoutNav" onClick={logoutHandler}>로그아웃</a>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(RightMenu);

