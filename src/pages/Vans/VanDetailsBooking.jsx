import React, { ReactDOM, useEffect, useState } from 'react';
import { Divider, Group, Rating } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

export default function VanDetailsBooking(props) {
  const [dateValue, setDateValue] = useState([(null, null)]);
  const [numDays, setNumDays] = useState(0);
  const [calendarState, setCalendarState] = useState(false);
  const ratingArr = [];
  props.vanDetails.reviews.forEach(review => ratingArr.push(review.rating));
  const ratingTotal =
    ratingArr.reduce((accRating, curRating) => accRating + curRating, 0) /
    ratingArr.length;
  const calendar = (
    <Group position="center">
      <DatePicker
        numberOfColumns={2}
        maxLevel="month"
        minDate={new Date()}
        maxDate={
          new Date(
            new Date().getFullYear(),
            new Date().getMonth() + 3,
            new Date().getDate()
          )
        }
        type="range"
        size="md"
        value={dateValue}
        onChange={setDateValue}
      />
    </Group>
  );
  function showCalendar() {
    setCalendarState(true);
    document.querySelector('.calendar-overlay').style.display = 'block';
  }
  function clearDates() {
    setDateValue([]);
  }
  function closeCalendar() {
    setCalendarState(false);
    document.querySelector('.calendar-overlay').style.display = 'none';
  }
  useEffect(() => {
    if (dateValue[1]) {
      closeCalendar();
      setNumDays(
        (dateValue[1].getTime() - dateValue[0].getTime()) /
          (1000 * 60 * 60 * 24)
      );
    }
  }, [dateValue]);
  function calendarOverlayClose(e) {
    if (e.target.className === 'calendar-overlay') closeCalendar();
  }
  window.addEventListener('click', calendarOverlayClose);

  function featureUnavailable() {
    const btn = document.querySelector('.booking-reserve');
    btn.textContent = 'Sorry, this feature is currently under progress.';
    btn.disabled = true;
    btn.style.backgroundColor = '#4e5752';
    btn.style.cursor = 'default';
  }
  return (
    <>
      <div className="booking-container">
        <div className="booking-info">
          <div className="booking-price">
            <span style={{ fontWeight: 'bold', fontSize: '2rem' }}>
              ${props.vanDetails.price}
            </span>{' '}
            <span>night</span>
          </div>
          <div className="booking-reviews-container">
            <Rating readOnly value={1} color="dark" count={1} />
            <span style={{ fontWeight: 'bold' }}>{ratingTotal.toFixed(2)}</span>
            <Divider size="xs" orientation="vertical" m="0 0.3rem" />
            <a href="#reviews-container" className="booking-reviews">
              {ratingArr.length} reviews
            </a>
          </div>
        </div>

        <div onClick={() => showCalendar()} className="calendar-date">
          <div className="pickup-date">
            <p>Pickup date</p>
            <span className="selected-date">
              {dateValue[0] ? String(dateValue[0]).slice(4, 15) : 'Add date'}
            </span>
          </div>
          <div className="dropoff-date">
            <p>Dropoff date</p>
            <span className="selected-date">
              {dateValue[1] ? String(dateValue[1]).slice(4, 15) : 'Add date'}
            </span>
          </div>
        </div>

        {calendarState && (
          <div className="calendar-container">
            {calendar}
            <div className="calendar-btns">
              <button className="calendar-clear" onClick={() => clearDates()}>
                Clear dates
              </button>
              <button
                className="calendar-close"
                onClick={() => closeCalendar()}
              >
                Close
              </button>
            </div>
          </div>
        )}
        {!dateValue[1] && (
          <button
            className="booking-availability"
            onClick={() => showCalendar()}
          >
            Check availability
          </button>
        )}

        {dateValue[1] && (
          <>
            <button
              className="booking-reserve"
              onClick={() => featureUnavailable()}
            >
              Reserve
            </button>
            <p className="booking-warning">You won't be charged yet</p>
            <div className="booking-calc">
              <p>
                ${props.vanDetails.price} x {numDays}{' '}
                {numDays > 1 ? 'nights' : 'night'}
              </p>
              <p>
                ${(numDays * props.vanDetails.price).toLocaleString('en-US')}
              </p>
            </div>
            <div className="booking-cleaning">
              <p>Cleaning fee</p>
              <p>$100</p>
            </div>
            <div className="booking-insurance">
              <p>Insurance Coverage</p>
              <p>${(numDays * props.vanDetails.price * 0.21).toFixed(2)}</p>
            </div>
            <div className="booking-tax">
              <p>State & local tax</p>
              <p>${(numDays * props.vanDetails.price * 0.09).toFixed(2)}</p>
            </div>
            <div className="booking-total">
              <p>Total</p>
              <p>
                $
                {(
                  numDays * props.vanDetails.price +
                  numDays * props.vanDetails.price * 0.21 +
                  numDays * props.vanDetails.price * 0.09 +
                  100
                )
                  .toFixed(2)
                  .toLocaleString('en-US')}
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
