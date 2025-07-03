"use client"
import React, { FC, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const MobileReview = dynamic(() => import('./MobileReview'), { ssr: false });
const DesktopReview = dynamic(() => import('./DesktopReview'), { ssr: false });

const Review: FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isMobile ? <MobileReview /> : <DesktopReview />;
};

export default Review;
