import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading';

export default function ImageGallery(props) {
  const galleryImages = props.vanDetails.imageUrl;
  const [sliderNumber, setSliderNumber] = useState(0);
  const [openGallery, setOpenGallery] = useState(false);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(0);

  useEffect(() => {
    if (imageLoaded === 5) {
      setLoading(false);
    }
  }, [imageLoaded]);
  function fullscreenImg(i) {
    setSliderNumber(i);
    setOpenGallery(true);
  }
  function closeGallery() {
    setOpenGallery(false);
  }
  function nextSlide() {
    const currentImg = document.querySelector('#fullscreen-img');
    currentImg;
    setSliderNumber(PrevSliderNumber => {
      if (PrevSliderNumber === galleryImages.length - 1) {
        return 0;
      } else {
        return sliderNumber + 1;
      }
    });
  }
  function prevSlide() {
    setSliderNumber(PrevSliderNumber => {
      if (PrevSliderNumber === 0) {
        return galleryImages.length - 1;
      } else {
        return PrevSliderNumber - 1;
      }
    });
  }

  const imageElements = galleryImages.map((img, i) => {
    let className;
    if (i === 0) className = 'wide-gallery-img';
    if (i === 1 || i === 2) className = 'medium-gallery-img';
    if (i > 2) className = 'small-gallery-img';
    if (i > 4) return;

    return (
      <img
        onLoad={() => setImageLoaded(prevImageLoaded => prevImageLoaded + 1)}
        style={loading ? { display: 'none' } : {}}
        key={i}
        className={className}
        onClick={() => fullscreenImg(i)}
        src={img}
      />
    );
  });

  return (
    <>
      {openGallery && (
        <div className="fullscreen-gallery">
          <button className="close-btn" onClick={() => closeGallery()}>
            CLOSE GALLERY
          </button>
          <button className="next-btn" onClick={() => nextSlide()}>
            NEXT SLIDE
          </button>
          <button className="prev-btn" onClick={() => prevSlide()}>
            PREV SLIDE
          </button>
          <img
            className="fullscreen-img"
            id="fullscreen-img"
            src={galleryImages[sliderNumber]}
          ></img>{' '}
        </div>
      )}
      {loading && <Loading />}
      <div className="van-gallery" id="van-gallery">
        {imageElements}
      </div>
    </>
  );
}
