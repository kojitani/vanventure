import React from 'react';
import { useOutletContext } from 'react-router-dom';
export default function HostVansPhotos() {
  const van = useOutletContext();

  const vanPhotos = van.imageUrl.map((img, i) => {
    return <img key={i} src={img} width={150}></img>;
  });
  return <div>{vanPhotos}</div>;
}
