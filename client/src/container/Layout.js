import React from 'react';
import TrendContainer from './TrendContainer';
import TopRated from './TopRated'
import Netflix from './Netflix'


//컴포넌트에서 리덕스 스토어에 접근하여 원하는 상태 받아오고, 액션도 디스패치해줘.  -> 컨테이너 컴포넌트
const Layout = () => {
  
  return (
    <div className="layout">
      
     
  
      <Netflix />
      {/*<div style={{backgroundColor:'white', width:'100%', height:'300px'}}>*/}
      {/*</div>*/}
      <TopRated />


    </div>
  )
}

export default Layout;
