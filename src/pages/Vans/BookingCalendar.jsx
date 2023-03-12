import { useState } from 'react';
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

export default function BookingCalendar() {
  const [value, setValue] = useState([(new Date(), new Date())]);
  //   console.log(value);
  return (
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
        value={value}
        onChange={setValue}
        className="calendar hidden"
      />
    </Group>
  );
}
