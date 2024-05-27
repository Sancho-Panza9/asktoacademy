import React, { useEffect, useRef, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, Tooltip, theme } from 'antd';
import { PowerIcon } from '@heroicons/react/24/solid';
import { auth } from '../firebase';
const { Header, Sider, Content } = Layout;
const LayoutMain = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const parentRef = useRef(null);
  const childRef = useRef(null);


  if (parentRef.current != null && childRef.current != null) {
    const parentWidth = parentRef.current.offsetWidth;
    const childWidth = childRef.current.offsetWidth;

  }
  useEffect(() => {
    const checkWidth = async() => {

      if (parentRef.current && childRef.current) {

        const parentWidth = parentRef.current.offsetWidth;
        const childWidth = childRef.current.offsetWidth;
        console.log("childWidth:", childWidth)
        console.log("parentWidth: ",parentWidth)
  
        setTimeout(()=>{
        setIsVisible(parentWidth >= childWidth);

        },1000)
        setIsVisible(parentWidth > childWidth);

        //console.log("w:",parentWidth, childWidth)
      }
    };

    // Initial check
    checkWidth();

    // Add event listener for window resize
    window.addEventListener('resize', checkWidth);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkWidth);
    };
  }, []);
  const onSliderResize =()=>{
    console.log("onSliderResize")

  
  }
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onMenuClick = (e) => {
    console.log(e);
    if(e.key === "3"){
    auth.signOut();

    }else if(e.key === "1"){
      setCollapsed(!collapsed)
    }
  };
  return (
    <Layout className='flex'>
      <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div className='px-4 flex h-full items-center'>
            <Tooltip placement="bottomRight" title="Go back" >
              <svg  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 
                hover:stroke-[#002047] hover:stroke-2 hover:scale-110 transition-all ease-in-out duration-300 
                cursor-pointer disabled:pointer-events-none" 
                data-tooltip-target="test2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </Tooltip>
            <Tooltip placement="bottomRight" title="Go forward">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 
                hover:stroke-[#002047] hover:stroke-2 hover:scale-110 transition-all ease-in-out duration-300 
                cursor-pointer"

              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Tooltip>

          </div>
        </Header>
      <Layout>
      <Sider className='my-1 py-1 rounded-xl font-bold bg-[#002047]'
        trigger={null} collapsible collapsed={collapsed}
        ref={parentRef}
      >
        <div className="demo-logo-vertical " />
        <div className="pt-4 px-8 mb-4 text-white" ref = {childRef}>
        {collapsed ? 
            <MenuUnfoldOutlined fill="white" style={{color : "white",  fontSize : "1.5rem"}}
            className=' icon-hover  hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer'
            onClick={() => setCollapsed(!collapsed)}
            />
             
            : 
            <div >
            <MenuFoldOutlined style={{color : "white", fontSize : "1.5rem"}} 
              className=' icon-hover  hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer'
              onClick={() => setCollapsed(!collapsed)}
            />
            {isVisible && <span  className='ml-4  transition-opacity duration-1000'>Your Profile</span>}
            </div>
        }
        
        </div>
        
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          className='rounded-xl'
          onClick={onMenuClick}
          onResize={onSliderResize}

          items={[
            {
              key: '2',
              icon: <VideoCameraOutlined style={{  fontSize : "1.5rem"}}/>,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <PowerIcon className="h-6 w-6" />,
              label: 'Sign Out',
            },
          ]}
        />
      </Sider>
    
        <Content
          style={{
            margin: '8px 8px',
            minHeight: 280,
            borderRadius: borderRadiusLG,
            maxHeight : '90vh',
            
          }}
          className='flex bg-[#003474]'
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default LayoutMain;