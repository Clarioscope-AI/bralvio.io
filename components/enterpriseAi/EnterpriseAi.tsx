"use client"
import React, { FC, JSX, useEffect, useState } from 'react';

import dynamic from 'next/dynamic';

const MobileEnterpriseAi = dynamic(() => import("./MobileEnterpriseAi"), { ssr: false });
const DesktopEnterpriseAi = dynamic(() => import("./DesktopEnterpriseAi"), {
  ssr: false,
});

const EnterpriseAi: FC=():JSX.Element => {
   const [isMobile,setIsMobile]=useState<boolean>(false);
   useEffect(()=>{
        const checkScreenSize=()=>{
             setIsMobile(window.innerWidth<1024);
        };
        checkScreenSize();
        window.addEventListener('resize',checkScreenSize);
        return ()=>window.removeEventListener('resize',checkScreenSize);
   },[])
 return isMobile ? <MobileEnterpriseAi/>:<DesktopEnterpriseAi/>;
};

export default EnterpriseAi;