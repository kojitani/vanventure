import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  createStyles,
  Text,
  Avatar,
  Group,
  rem,
  Rating,
  Divider,
} from '@mantine/core';

const useStyles = createStyles(theme => ({
  body: {
    paddingLeft: rem(30),
    paddingTop: theme.spacing.sm,
  },
}));

export default function VanDetailsReviews(props) {
  const { classes } = useStyles();
  console.log(props.vanDetails.reviews);
  const ratingArr = [];
  props.vanDetails.reviews.forEach(review => ratingArr.push(review.rating));
  const ratingTotal =
    ratingArr.reduce((accRating, curRating) => accRating + curRating, 0) /
    ratingArr.length;

  const reviewElements = props.vanDetails.reviews.map((review, i) => {
    return (
      <div key={i}>
        <Group>
          <Avatar
            src={''}
            color="green.9"
            size="lg"
            alt={''}
            radius="md"
            ml={30}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Text size="lg">{review.author}</Text>
            <Text size="lg" color="dimmed">
              {review.postedAt}
            </Text>
            <Rating ml={-3} value={review.rating} fractions={2} readOnly />
          </div>
        </Group>
        <Text className={classes.body} size="lg">
          {review.body}
        </Text>
        <Divider size="xs" variant="dashed" mt="1.5rem" />
      </div>
    );
  });
  return (
    <div className="reviews-container" id="reviews-container">
      <div className="reviews-sidebar">
        <h1>Customer reviews </h1>
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            padding: '0.5rem 0',
          }}
        >
          <Rating readOnly fractions={4} value={ratingTotal}></Rating>{' '}
          <p>{ratingTotal.toFixed(2)} out of 5</p>
        </div>
      </div>
      <div className="reviews-list">{reviewElements}</div>
    </div>
  );
}
