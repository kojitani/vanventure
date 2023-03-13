import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { IconCalendarQuestion, IconChefHat } from '@tabler/icons-react';
import { IconChevronRight } from '@tabler/icons-react';
export default function VanDetailsBooking(props) {
  const [sticky, setSticky] = useState(false);
  const [params, setParams] = useState(useParams());
  const [dateValue, setDateValue] = useState([(null, null)]);
  const [numDays, setNumDays] = useState(0);
  const [calendarState, setCalendarState] = useState(false);

  let observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      setSticky(false);
    } else {
      setSticky(true);
    }
  });
  useEffect(() => {
    if (!params) {
      observer.disconnect();
      console.log('disconnected');
    } else {
      observer.observe(document.querySelector('#van-gallery'));
      console.log('observing');
    }
  }, [params]);

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
  console.log(numDays);
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
            <p>
              <span className="booking-rating">★{props.vanDetails.rating}</span>{' '}
              ·{' '}
              <span className="booking-reviews">
                {props.vanDetails.reviews} reviews
              </span>
            </p>
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
        <button className="booking-btn" onClick={() => showCalendar()}>
          {dateValue[1] ? 'Reserve' : 'Check availability'}
        </button>

        {dateValue[1] && (
          <>
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
                  numDays * props.vanDetails.price * 0.09
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
