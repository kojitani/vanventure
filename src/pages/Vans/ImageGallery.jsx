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
    console.log(i);
    setSliderNumber(i);
    console.log(sliderNumber);
    goToSlide(sliderNumber);
    setOpenGallery(true);
  }
  function closeGallery() {
    setOpenGallery(false);
  }

  function goToSlide() {
    const slides = document.querySelectorAll('.fullscreen-img');
    slides.forEach((slide, i) => {
      slide.style.webkitTransition = '-webkit-transform 300ms ease 0ms';
      slide.style.transform = `translate3d(${
        100 * (i - sliderNumber)
      }%,0px,0px)`;
    });
  }
  function nextSlide() {
    setSliderNumber(PrevSliderNumber => {
      if (PrevSliderNumber === galleryImages.length - 1) {
        return 0;
      } else {
        return sliderNumber + 1;
      }
    });

    goToSlide(sliderNumber);
  }
  function prevSlide() {
    setSliderNumber(PrevSliderNumber => {
      if (PrevSliderNumber === 0) {
        return galleryImages.length - 1;
      } else {
        return PrevSliderNumber - 1;
      }
    });
    goToSlide(sliderNumber);
  }

  const [touchStartX, setTouchStartX] = useState(null);
  const [touchStartY, setTouchStartY] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [touchEndY, setTouchEndY] = useState(null);
  // console.log(touchStartX, touchStartY, touchEndX, touchEndY);
  const minSwipeDistance = 50;
  function onTouchStart(e) {
    setTouchEndX(null);
    setTouchEndX(null);
    setTouchEndY(null);
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchStartY(e.targetTouches[0].clientY);
  }

  function onTouchMove(e) {
    setTouchEndX(e.targetTouches[0].clientX);
    setTouchEndY(e.targetTouches[0].clientY);
    const slides = document.querySelectorAll('.fullscreen-img');

    slides.forEach((slide, i) => {
      const distance = touchEndX - touchStartX;

      slide.style.webkitTransition = '-webkit-transform 300ms ease 0ms';
      slide.style.transform = `translate3d(${
        100 * (i - sliderNumber) + distance
      }%,0px,0px)`;
    });
  }
  // transform: translate3d(-1450.8px, 0px, 0px);
  function onTouchEnd() {
    if (!touchStartX || !touchEndX) return;
    const distanceX = touchStartX - touchEndX;
    const distanceY = touchStartY - touchEndY;
    const isLeftSwipe = distanceX > minSwipeDistance;
    const isRightSwipe = distanceX < -minSwipeDistance;
    const distance = touchEndX - touchStartX;
    if (distance < minSwipeDistance && distance > -minSwipeDistance) {
      const slides = document.querySelectorAll('.fullscreen-img');
      slides.forEach((slide, i) => {
        slide.style.webkitTransition = '-webkit-transform 300ms ease 0ms';
        slide.style.transform = `translate3d(${
          100 * (i - sliderNumber)
        }%,0px,0px)`;
      });
    }

    if (isRightSwipe && Math.abs(distanceX) > distanceY) {
      prevSlide();
    }
    if (isLeftSwipe && distanceX > distanceY) {
      nextSlide();
    }
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
  const fullscreenElements = galleryImages.map((img, i) => {
    return (
      <img
        className="fullscreen-img"
        id={`slide-${i}`}
        key={i}
        src={img}
        onTouchStart={() => onTouchStart(event)}
        onTouchMove={() => onTouchMove(event)}
        onTouchEnd={() => onTouchEnd()}
        style={{
          transform: `translate3d(${100 * (i - sliderNumber)}%,0px,0px)`,
        }}
      ></img>
    );
  });

  return (
    <>
      {openGallery && (
        <div className="fullscreen-gallery">
          <button onClick={() => closeGallery()} className="close-btn">
            Close
          </button>
          <button onClick={() => nextSlide()} className="next-btn">
            Next
          </button>
          <button onClick={() => prevSlide()} className="prev-btn">
            Prev
          </button>
          <p className="slide-number-prev">
            {`Slide ${sliderNumber + 1}/${galleryImages.length}`}
          </p>

          {fullscreenElements}
        </div>
      )}
      {loading && <Loading />}

      <div className="van-gallery" id="van-gallery">
        {imageElements}
        <button
          style={loading ? { display: 'none' } : {}}
          onClick={() => setOpenGallery(true)}
          className="show-gallery"
        >
          Show all photos
        </button>
      </div>
    </>
  );
}
