import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import { IconChevronLeft, IconChevronRight, IconX } from '@tabler/icons-react';

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
    goToSlide(sliderNumber);
    setOpenGallery(true);
    document.querySelector('body').classList.add('body-hide-overflow');
  }
  function closeGallery() {
    setOpenGallery(false);
    document.querySelector('body').classList.remove('body-hide-overflow');
  }

  function goToSlide() {
    const slides = document.querySelectorAll('.fullscreen-img');
    slides.forEach((slide, i) => {
      slide.style.WebkitTransform = `translate3d(${
        100 * (i - sliderNumber)
      }%,0px,0px)`;
      slide.style.transition = 'all 0.5s ease 0s';
      slide.style.WebkitTransition = 'all 0.5s ease 0s';
    });
  }
  function nextSlide() {
    setSliderNumber(PrevSliderNumber => {
      if (PrevSliderNumber === galleryImages.length - 1) {
        return 0;
      } else {
        return PrevSliderNumber + 1;
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

  useEffect(() => {
    if (!openGallery) return;
    function handleKeyEvent(e) {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') closeGallery();
    }
    document.addEventListener('keydown', handleKeyEvent);

    return () => document.removeEventListener('keydown', handleKeyEvent);
  }, [openGallery]);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchStartY, setTouchStartY] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [touchEndY, setTouchEndY] = useState(null);

  const minSwipeDistance = 50;
  function onTouchStart(e) {
    setTouchStartX(0);
    setTouchEndX(0);
    setTouchStartY(0);
    setTouchEndY(0);
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchStartY(e.targetTouches[0].clientY);
  }

  function onTouchMove(e) {
    setTouchEndX(e.targetTouches[0].clientX);
    setTouchEndY(e.targetTouches[0].clientY);

    const slides = document.querySelectorAll('.fullscreen-img');
    slides.forEach((slide, i) => {
      //touchEndX bugs on touch start on low end mobile phoness
      if (touchEndX < 10) return;
      const distance = touchEndX - touchStartX;
      slide.style.transition = 'all 0s ease 0s';
      slide.style.WebkitTransition = 'all 0s ease 0s';
      slide.style.WebkitTransform = `translate3d(${
        100 * (i - sliderNumber) + distance / 3
      }%,0px,0px)`;
    });
  }
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
        slide.style.WebkitTransform = `translate3d(${
          100 * (i - sliderNumber)
        }%,0px,0px)`;
        slide.style.transition = 'all 0.5s ease 0s';
        slide.style.WebkitTransition = 'all 0.5s ease 0s';
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
        alt={`Image ${i}`}
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
        alt={`Image ${i}`}
        onTouchStart={() => onTouchStart(event)}
        onTouchMove={() => onTouchMove(event)}
        onTouchEnd={() => onTouchEnd()}
        style={{
          WebkitTransform: `translate3d(${100 * (i - sliderNumber)}%,0px,0px)`,
        }}
      ></img>
    );
  });

  return (
    <>
      {openGallery && (
        <div className="fullscreen-gallery">
          <button onClick={() => closeGallery()} className="close-btn">
            <IconX />
          </button>
          <button onClick={() => nextSlide()} className="next-btn">
            <IconChevronRight />
          </button>
          <button onClick={() => prevSlide()} className="prev-btn">
            <IconChevronLeft />
          </button>
          <p className="slide-number-prev">
            {`${sliderNumber + 1}/${galleryImages.length}`}
          </p>

          {fullscreenElements}
        </div>
      )}
      {loading && <Loading />}

      <div
        style={loading ? { margin: '5rem 0rem' } : {}}
        className="van-gallery"
        id="van-gallery"
      >
        {imageElements}
        <button
          style={loading ? { display: 'none' } : {}}
          onClick={() => {
            setOpenGallery(true);
            document.querySelector('body').classList.add('body-hide-overflow');
          }}
          className="show-gallery"
        >
          Show all photos
        </button>
      </div>
    </>
  );
}
