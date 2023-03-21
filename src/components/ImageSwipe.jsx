import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

export function ImageSwipe(fullscreenImg) {
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchStartY, setTouchStartY] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [touchEndY, setTouchEndY] = useState(null);
  const minSwipeDistance = 100;
  function onTouchStart(e) {
    setTouchEndX(null);
    setTouchEndX(null);
    setTouchEndY(null);
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchStartY(e.targetTouches[0].clientY);
  }
  console.log(fullscreenImg);
  function onTouchMove(e) {
    setTouchEndX(e.targetTouches[0].clientX);
    setTouchEndY(e.targetTouches[0].clientY);
  }
  function onTouchEnd() {
    if (!touchStartX || !touchEndX) return;
    const distanceX = touchStartX - touchEndX;
    const distanceY = touchStartY - touchEndY;
    const isLeftSwipe = distanceX > minSwipeDistance;
    const isRightSwipe = distanceX < -minSwipeDistance;

    if (isRightSwipe && Math.abs(distanceX) > distanceY) {
      console.log('swipe right');
    }
    if (isLeftSwipe && distanceX > distanceY) {
      console.log('swipe left');
    }
  }
  return (
    <>
      <Outlet />
    </>
  );
}
