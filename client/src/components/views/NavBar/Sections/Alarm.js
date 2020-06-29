import React from 'react'
import { BellOutlined } from '@ant-design/icons'
import { Popover, Button } from 'antd';

function Alarm () {
  
  
  
  
  const text = <span>Title</span>;
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  
  
  return(
    
    <>
      
        <Popover placement="bottom" title={text} content={content} trigger="click">
          <a className="searchLogo" style={{color:'#ffffff',fontSize: '20px',fontWeight: '600'}} ><BellOutlined/></a>
        </Popover>
    
      
  </>)
}

export default Alarm
