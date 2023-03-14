import React, { useEffect, useState } from 'react';
import { Skeleton } from '@mantine/core';

import { useOutletContext } from 'react-router-dom';
export default function HostVansPhotos() {
  const van = useOutletContext();
  const [imageLoaded, setImageLoaded] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (imageLoaded === van.imageUrl.length) setLoading(false);
  }, [imageLoaded]);

  const vanPhotos = van.imageUrl.map((img, i) => {
    return (
      <img
        key={i}
        src={img}
        onLoad={() => setImageLoaded(prevImageLoaded => prevImageLoaded + 1)}
      ></img>
    );
  });
  return (
    <div>
      <Skeleton visible={loading} mt={'1rem'}>
        <div className="host-photos">{vanPhotos}</div>
      </Skeleton>
    </div>
  );
}
