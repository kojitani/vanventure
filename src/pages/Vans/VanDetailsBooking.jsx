import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { IconCalendarQuestion } from '@tabler/icons-react';

export default function VanDetailsBooking(props) {
  const [sticky, setSticky] = useState(false);
  const [params, setParams] = useState(useParams());
  const [dateValue, setDateValue] = useState([(new Date(), new Date())]);
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
  }
  function clearDates() {
    setDateValue([]);
  }
  function closeCalendar() {
    setCalendarState(false);
  }

  function calendarOverlayClose(e) {
    if (
      e.target.className === 'calendar-overlay' ||
      e.target.className === 'van-details-container'
    )
      closeCalendar();
  }
  window.addEventListener('click', calendarOverlayClose);
  return (
    <>
      {calendarState && <div className="calendar-overlay"></div>}
      <div className="booking-container">
        <div className="booking-price">
          <p>{`$${props.vanDetails.price} night`} </p>
          <span>{`★${props.vanDetails.rating} (${props.vanDetails.reviews})`}</span>
        </div>

        <button onClick={() => showCalendar()} className="choose-date">
          Select your dates
        </button>
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

        <h2>PICK UPanels, a composting toi </h2>
        <button className="booking-btn">RENT NOW</button>
        <div className="booking-calc">
          <h3>{}</h3>
          <h3>$900 </h3>
        </div>
        <div className="booking-total">
          <h1>TOTAL BEFORE TAXES </h1>
          <h1>$8948934</h1>
        </div>
      </div>
    </>
  );
}
